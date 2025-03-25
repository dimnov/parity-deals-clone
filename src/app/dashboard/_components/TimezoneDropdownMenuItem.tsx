import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { createURL } from "@/lib/utils";
import Link from "next/link";

function TimezoneDropdownMenuItem({ searchParams }: { searchParams: Record<string, string> }) {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <DropdownMenuItem>
      <Link
        href={createURL("/dashboard/analytics", searchParams, {
          timezone: userTimezone,
        })}
      >
        {userTimezone}
      </Link>
    </DropdownMenuItem>
  );
}

export default TimezoneDropdownMenuItem;
