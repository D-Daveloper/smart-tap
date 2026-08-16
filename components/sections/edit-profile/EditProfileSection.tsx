import { Section } from "@/components/ui/Sections";
import { User } from "lucide-react";
import { useState } from "react";

interface EditProfileSectionProps {
  value: File | null;
  setValue: (value: File | null) => void;
}

export const ProfilePicSection = ({
  value,
  setValue,
}: EditProfileSectionProps) => {
  const [image, setimage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    if (e?.target?.files) {
      const file = e?.target?.files[0];
      setValue(file);
      setimage(URL.createObjectURL(file));
    }
  };

  return (
    <Section
      id="profilepic"
      title="Profile Picture"
      meta={"Profile"}
      icon={<User />}
    >
      <div className="flex gap-5 justify-start items-center ">
        <div>
          <label htmlFor="profilepic" className="cursor-pointer w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-accent-100 border-2 border-dashed border-accent/20 hover:border-accent hover:opacity-80 transition relative">
            <img
              src={image ? image : "/empty_profile_pic.jpg"}
              alt="Preview"
              className="w-full h-full object-cover absolute inset-0"
            />
            <input
            id="profilepic"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="space-y-1">
          <h2>Upload Profile Picture</h2>
          <p
            className="max-w-[56ch] text-[13.5px] leading-[1.6]"
            style={{
              color: "color-mix(in srgb, var(--color-text) 65%, transparent)",
            }}
          >
            JPG and PNG - Max 3MB
          </p>
          <label htmlFor="profilepic" className="cursor-pointer underline text-accent">
            Upload Picture
          </label>
        </div>
      </div>
    </Section>
  );
};
