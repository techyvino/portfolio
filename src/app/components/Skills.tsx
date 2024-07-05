import Image from "next/image";
import { skillSet } from "../data";

const Skills = () => {
  return (
    <div className="relative min-h-screen">
      <h1 className={"text-5xl font-bold"}>Skills</h1>
      <div className="flex flex-wrap gap-4 my-5">
        {skillSet.map((skill, idx) => (
          <div
            key={`${idx}-${skill?.name}`}
            className="border rounded-xl p-4 flex flex-col items-center gap-y-3 min-w-36"
          >
            <Image
              src={skill.iconPath}
              alt={skill?.name}
              width={50}
              height={50}
            />
            <p className="font-semibold">{skill?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
