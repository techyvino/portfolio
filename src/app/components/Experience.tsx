import clsx from "clsx";
import { experience } from "../data";
import { TracingBeam } from "../ui/TracingBeam";

const Experience = () => {
  return (
    <div className="relative min-h-screen">
      <h1 className={clsx("text-5xl font-bold")}>Experience</h1>
      <TracingBeam>
        {experience.map((item) => (
          <div key={`content-${item?.period}`} className="pt-8">
            <div>
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
                    className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 dark:bg-white dark:text-black"
                  >
                    <span>{skill}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </TracingBeam>
    </div>
  );
};

export default Experience;
