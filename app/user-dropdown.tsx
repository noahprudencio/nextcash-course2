"use client";

import { UserButton } from "@clerk/nextjs";
import { ChartColumn, ChartColumnBigIcon, User } from "lucide-react";
import { useRouter } from "next/dist/client/components/navigation";
import router from "next/dist/shared/lib/router/router";

export default function UserDropdown() {
  const router = useRouter();
  return (
    <UserButton
      showName
      appearance={{
        elements: {
          userButtonOuterIdentifier: {
            color: "white !important",
          },
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Action
          label="Dashboard"
          labelIcon={<ChartColumnBigIcon size={16} />}
          onClick={() => {
            router.push("/dashboard");
          }}
        />
      </UserButton.MenuItems>
    </UserButton>
  );
}