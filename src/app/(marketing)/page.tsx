import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import DraftBitIcon from "./_icons/DraftBitIcon";
import Link from "next/link";
import AmieIcon from "./_icons/AmieIcon";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatters";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter m-4">
          Price Smarter, Sell bigger!
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Optimize your product pricing across countries to maximize sales. Capture 85% of the
          untapped market with location-based dynamic pricing
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">Trusted by the top modern companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Link href="#">
              <DraftBitIcon />
            </Link>
            <Link href="#">
              <AmieIcon />
            </Link>
            <Link href="#">
              <DraftBitIcon />
            </Link>
            <Link href="#">
              <AmieIcon />
            </Link>
            <Link href="#">
              <DraftBitIcon />
            </Link>
            <Link href="#">
              <AmieIcon />
            </Link>
            <Link href="#">
              <DraftBitIcon />
            </Link>
            <Link href="#">
              <AmieIcon />
            </Link>
            <Link href="#">
              <DraftBitIcon />
            </Link>
            <Link href="#" className="md:max-xl:hidden">
              <AmieIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
