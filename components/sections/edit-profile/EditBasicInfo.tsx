import { BasicInput, BasicTextArea } from "@/components/ui/Inputs";
import { Section } from "@/components/ui/Sections";
import { IdCard } from "lucide-react";


interface EditProfileSectionProps {
  fullname: string;
  job: string;
  company: string;
  bio: string;
  setValue: (value: string,key:string) => void;
}

export const EditBasicInfo = ({ fullname,job,company,bio, setValue }: EditProfileSectionProps) => {
  return (
    <Section
      id="basicinfo"
      title="Basic Info"
      meta={"Profile"}
      icon={<IdCard />}
    >
      <div className="flex flex-col gap-5 justify-start items-start w-full ">
        <BasicInput onChange={e => setValue(e.target.value,e.target.id)} value={fullname} label="FullName" id="fullname" />
        <div className="flex gap-10">
          <BasicInput onChange={e => setValue(e.target.value,e.target.id)} value={job} label="Job Title" id="job" />
          <BasicInput onChange={e => setValue(e.target.value,e.target.id)} value={company} label="Company/Brand" id="company" />
        </div>
        <BasicTextArea onChange={e => setValue(e.target.value,e.target.id)} value={bio} label="Bio" id="bio" />
      </div>
    </Section>
  );
};
