import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { env } from "@/data/env/server";
import { createUserSubscription } from "@/server/db/subscription";
import { deleteUser } from "@/server/db/users";

export async function POST(req: Request) {
  const wh = new Webhook(env.CLERK_WEBHOOK_SECRET);

  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  let event: WebhookEvent;

  try {
    event = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  switch (event.type) {
    case "user.created":
      {
        await createUserSubscription({
          clerkUserId: event.data.id,
          tier: "Free",
        });
      }
      break;
    case "user.deleted":
      {
        if (event.data.id != null) await deleteUser(event.data.id);
      }
      break;

    default:
      break;
  }

  return new Response("Webhook received", { status: 200 });
}
