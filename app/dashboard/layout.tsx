"use client";
import { NfcIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const NAV: {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "dashboard",
    label: "dashboard",
    href: "/dashboard",
    icon: <path d="M3 3v18h18M7 15l4-5 3 3 4-6" />,
  },
  {
    id: "edit",
    label: "Edit profile",
    href: "/dashboard/edit-profile",
    icon: (
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
    ),
  },
  {
    id: "theme",
    label: "Look & layout",
    href: "/dashboard/Look",
    icon: (
      <path d="M12 2a10 10 0 0 0 0 20 2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5h5a5 5 0 0 0-5-10Z" />
    ),
  },
  {
    id: "billing",
    label: "Billing & plan",
    href: "/dashboard/Billing",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    href: "/dashboard/Settings",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82 2 2 0 0 1-2.83 2.83A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 1.51 2 2 0 0 1-4 0 1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33 2 2 0 0 1-2.83-2.83A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1 2 2 0 0 1 0-4 1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82 2 2 0 0 1 2.83-2.83A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09a2 2 0 0 1 4 0A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33 2 2 0 0 1 2.83 2.83A1.65 1.65 0 0 0 19.4 9c.14.6.65 1.03 1.26 1.09a2 2 0 0 1 0 4 1.65 1.65 0 0 0-1.26 1Z" />
      </>
    ),
  },
];
const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const on = (id: string) => pathname===id;

  return (
    <div className=" text-text min-h-screen font-[family-font:--font-body] ">
      <div className="grid items-start lg:grid-cols-[244px_1fr]">
        <aside
          className="bg-bg hidden h-screen flex-col gap-0.5 border-r px-4 py-5.5 lg:sticky lg:top-0 lg:flex border-divider"
        >
          <div className="flex items-center gap-2.25 px-2.5 pb-5">
            <NfcIcon size={20} animated stroke="var(--color-accent)" />
            <span className="text-[19px] font-(--font-heading)">SmartTap</span>
          </div>

          <div
            className="mb-3.5 border-b px-2.5 pb-3.5"
            style={{ borderColor: "var(--color-divider)" }}
          >
            <p
              className="m-0 text-[16px] font-semibold"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              {"shopName"}
            </p>
            <p
              className="mt-0.5 mb-0 text-[11.5px]"
              style={{
                color: "color-mix(in srgb, var(--color-text) 55%, transparent)",
              }}
            >
              Yaba, Lagos
            </p>
          </div>

          {NAV.map((item) => (
            <Link
              key={item.id}
              href={`${item.href}`}
              className={
                "navrow flex cursor-pointer items-center gap-2.75 px-3 py-2.75 text-left text-[14px] hover:bg-accent hover:text-accent-700 font-body rounded-r-md transition-colors" +
                (on(item.href) ? "text-accent-700 border-l-accent border-l-2" : " text-text")
              }
              style={{
                background: on(item.href)
                  ? "color-mix(in srgb, var(--color-accent) 10%, transparent)"
                  : "transparent",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
              {item.label}
            </Link>
          ))}

          <div
            className="mt-auto grid gap-2.5 border-t pt-4"
            style={{ borderColor: "var(--color-divider)" }}
          >
            <ThemeToggle />
            <a
              href="/login"
              className="px-0.5 text-[12.5px] no-underline"
              style={{ color: "var(--color-accent-700)" }}
            >
              Log out
            </a>
          </div>
        </aside>

        <main className="bg-red-500! dark:bg-green-500! min-w-0">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
