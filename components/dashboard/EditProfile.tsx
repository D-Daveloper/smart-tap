"use client";
import React, { useState } from "react";
import { ProfilePicSection } from "../sections/edit-profile/EditProfileSection";
import { EditBasicInfo } from "../sections/edit-profile/EditBasicInfo";

interface seed {
    profilePic: {
    image: null | File,
  },
  basicInfo: {
    fullname: string,
    job: string,
    company: string,
    bio: string,
  },
}

const seed:seed = {
  profilePic: {
    image: null,
  },
  basicInfo: {
    fullname: "",
    job: "",
    company: "",
    bio: "",
  },
};

const EditProfile = () => {
  const [info, setinfo] = useState(seed);

  return (
    <div className="screen-in grid max-w-295 items-start gap-6 px-4 pt-5 pb-22.5 grid-cols-1">
      <header
        className="sticky top-0 z-20 flex flex-wrap items-center gap-3.5 border-b px-[clamp(18px,4vw,40px)] py-3.5 backdrop-blur-lg border-divider"
        style={{
          background: "color-mix(in srgb, var(--color-bg) 92%, transparent)",
        }}
      >
        <h1 className="mr-auto text-[clamp(21px,2.6vw,27px)] tracking-[-0.015em] m-0 font-normal">
          Edit View
        </h1>
      </header>
      <main className="">
        <div>
          <p
            className="mb-6.5 max-w-[56ch] text-[13.5px] leading-[1.6]"
            style={{
              color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
            }}
          >
            Every section carries its own look. Open one, change the words and
            the styling together, and watch the preview. Changes save as you
            type.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <ProfilePicSection
            value={info.profilePic.image}
            setValue={(value) => setinfo(prev => ({...prev, profilePic: { ...prev.profilePic, image: value }}))}
          />
          <EditBasicInfo
            fullname={info.basicInfo.fullname}
            company={info.basicInfo.company}
            job={info.basicInfo.job}
            bio={info.basicInfo.bio}
            setValue={(value,key) => setinfo(prev => ({...prev, basicInfo: {...prev.basicInfo,[key]:value} }))}
          />
        </div>
      </main>
    </div>
  );
};

export default EditProfile;
