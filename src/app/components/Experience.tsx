import clsx from "clsx";
import { TracingBeam } from "../ui/TracingBeam";
import { experience } from "../data";

const Experience = () => {
  return (
    <div className="my-5 relative min-h-screen ">
      <h1 className="text-5xl font-bold">Experience</h1>
      <TracingBeam>
        {experience.map((item, index) => (
          <div key={`content-${index}`} className="pt-8">
            <>
              <p className={clsx("text-xl font-semibold")}>{item.role}</p>
              <div className="flex justify-between w-full">
                <p className="text-sm text-gray-600 mb-4 italic">
                  <span>{item?.company}</span>
                </p>
                <p className="text-sm text-gray-600 mb-4 italic dark:text-gray-400">
                  <span>{item?.period}</span>
                </p>
              </div>

              <div className="text-sm">{item.description}</div>

              <div className="flex gap-3 flex-wrap mt-3">
                {item.badge?.map((skill, skillIndex) => (
                  <p
                    key={`${skill}-${skillIndex}`}
                    className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 dark:bg-white dark:text-ba"
                  >
                    <span>{skill}</span>
                  </p>
                ))}
              </div>
            </>
          </div>
        ))}
      </TracingBeam>
    </div>
  );
};

export default Experience;
