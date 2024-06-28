import clsx from "clsx";
import { TracingBeam } from "../ui/TracingBeam";

const Experience = () => {
  const experience = [
    {
      period: "2023/05 - Present",
      role: "Team Lead",
      company: "Credo Health Services Pvt Ltd",
      description: (
        <p>
          As Team Lead, I oversee feature requirements with the product team,
          explaining technical possibilities. I estimate development times and
          provide updates at standup meetings. I ensure timely feature delivery,
          manage team schedules, and offer guidance for uninterrupted
          development. I collaborate on API structures with the backend team and
          review and approve pull requests. After QA approval, I handle staging
          and production environment setups and manage defects during sprints.
        </p>
      ),
      badge: [
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "React JS",
        "Next JS",
        "Azure DevOps",
      ],
    },
    {
      period: "2022/03 - 2023/05",
      role: "Junior Software Engineer",
      company: "Credo Health Services Pvt Ltd",
      description: (
        <p>
          In our Scrum methodology, tasks are initiated through ticket creation
          on the Azure board by our Team Lead. Once tasks are assigned, I begin
          execution, consulting the Functional Specification Document (FSD) and
          Figma designs as needed. Collaboration with backend developers is
          critical as we integrate REST API endpoints into our project. Upon
          task completion, I initiate a Git pull request for peer review and
          approval. If QA identifies bugs within my module, I take ownership by
          assigning myself the ticket for defect resolution. I promptly address
          issues, ensuring fixes progress seamlessly through both development
          and QA phases concurrently.
        </p>
      ),
      badge: ["JavaScript", "TypeScript", "React JS", "Redux", "Proof-Hub"],
    },
    {
      period: "2021/07 - 2022/03",
      role: "Software Developer - Frontend",
      company: "Billiontags Creations Pvt Ltd",
      description: (
        <p>
          At our small-scale company, we leverage the Kanban methodology for
          project management. My role involves receiving client requirements and
          collaborating with backend developers and my lead to plan the
          development process, ensuring alignment before initiating UI
          development. I prioritize optimization and the creation of reusable
          components for scalability and efficiency during code development.
          Working closely with backend developers, I integrate API endpoints
          seamlessly into our React project using Axios for efficient
          communication. Upon completing development tasks, I handle deploying
          the React application across various hosting platforms such as AWS,
          Netlify, and Vercel to ensure accessibility and functionality
        </p>
      ),
      badge: ["HTML", "CSS", "Sass", "JavaScript", "React", "AWS"],
    },
  ];

  return (
    <div className="my-5">
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
                <p className="text-sm text-gray-600 mb-4 italic">
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
            </>
          </div>
        ))}
      </TracingBeam>
    </div>
  );
};

export default Experience;
