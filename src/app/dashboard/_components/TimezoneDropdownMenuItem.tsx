import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { createURL } from "@/lib/utils";
import Link from "next/link";
import { SearchParamsType } from "../analytics/page";

function TimezoneDropdownMenuItem({ searchParams }: { searchParams: SearchParamsType }) {
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
