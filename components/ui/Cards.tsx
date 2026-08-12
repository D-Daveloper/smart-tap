import React from "react";
import { BasicButton } from "./Buttons";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export const ProfileCard = () => {
  return (
    <div
      className="card elev-sm gap-0 p-5 h-80 bg-bg"
    >
      <div className="flex flex-col justify-between items-left gap-3 h-full">
        <div className="mb-3 flex items-center gap-3.5">
          <div className="rounded-full bg-accent-100 p-3 text-accent-700 w-10 h-10 flex items-center justify-center border uppercase text-[14px] font-bold">
            Z
          </div>
          <div>
            <h3 className="mb-0 text-[15px] font-bold leading-none tracking-[-0.015em] capitalize ">
              zombie
            </h3>
            <p
              className="mb-0 text-[14px] leading-[1.45] underline cursor-pointer"
              style={{
                color: "color-mix(in srgb, var(--color-text) 74%, transparent)",
              }}
            >
              thenfchq.com/test
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <BasicButton
            onClick={() => {}}
            label="Edit"
            icon={<PlusIcon />}
            pulse={false}
          />
          <BasicButton
            onClick={() => {}}
            label="Theme"
            icon={<PlusIcon />} 
            pulse={false}
          />
        </div>
        <div className="flex flex-col justify-between items-center gap-3.5">
          <Link href="#get" className="btn btn-primary btn-block m-0 px-5 py-3.25 text-[15px]">
            Get your SmartTap
          </Link>
          <a href="#get" className="btn btn-primary btn-block m-0 px-5 py-3.25 text-[15px] pulse-button">
            Get your SmartTap
          </a>
        </div>
        <div className="flex justify-between items-center gap-3.5">
          <BasicButton
            onClick={() => {}}
            // label="Add profile"
            icon={<PlusIcon />}
            pulse={false}
          />
          <BasicButton
            onClick={() => {}}
            // label="Add profile"
            icon={<PlusIcon />}
            pulse={false}
          />
          <BasicButton
            onClick={() => {}}
            // label="Add profile"
            icon={<PlusIcon />}
            pulse={false}
          />
        </div>
      </div>
    </div>
  );
};

export const AddProfileCard = () => {
  return (
    <div
      className="card elev-sm p-5 bg-surface h-80 flex flex-col justify-center items-center gap-3.5 cursor-pointer transition-colors"
    >
      <PlusIcon className="text-accent-700 w-10 h-10" />
      <h3 className="mb-0 text-[15px] font-bold leading-none tracking-[-0.015em] capitalize ">
        Add Profile
      </h3>
      <p className="text-[12px] leading-[1.45] text-center">
        99 slots remaining
      </p>
    </div>
  );
};
