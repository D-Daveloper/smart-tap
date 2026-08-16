"use client";

import { PlusIcon } from "lucide-react";
import { BasicButton } from "../ui/Buttons";
import { AddProfileCard, ProfileCard } from "../ui/Cards";

export function DashboardShell() {
  return (
    <div className="bg-bg text-text min-h-screen font-[family-font:--font-body] ">
      <header
        className="sticky top-0 z-20 flex flex-wrap items-center gap-3.5 border-b px-[clamp(18px,4vw,40px)] py-3.5 backdrop-blur-lg"
        style={{
          borderColor: "var(--color-divider)",
          background: "color-mix(in srgb, var(--color-bg) 92%, transparent)",
        }}
      >
        <h1
          className="mr-auto text-[clamp(21px,2.6vw,27px)] tracking-[-0.015em]"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Hello!
        </h1>
      </header>
      <div className="mt-10">
        <div className="flex justify-between px-4">
          <h2 className="text-xl">
            Profiles <span>(1/100)</span>
          </h2>
          <BasicButton
            onClick={() => {}}
            label="Add profile"
            icon={<PlusIcon />}
            pulse={true}
          />
        </div>
        <div className=" grid md:grid-cols-3 grid-cols-1 xl:grid-cols-4  items-start gap-[clamp(30px,5vw,60px)] px-[clamp(20px,5vw,40px)] py-10">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <AddProfileCard />
        </div>
      </div>
    </div>
  );
}
