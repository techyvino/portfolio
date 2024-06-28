import clsx from "clsx";
import { Caveat } from "next/font/google";
import { BackgroundBeams } from "../ui/BackgroundBeams";

const CaveatFont = Caveat({ subsets: ["latin-ext"] });

// const JoseFin = Josefin_Sans();
const Intro = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="text-5xl font-semibold md:w-6/12 w-full">
          <p className="text-nowrap">
            {`Hello, I'm `}
            <span
              className={clsx(
                CaveatFont?.className,
                "bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-nowrap"
              )}
            >
              {`< Vinothkumar />`}
            </span>
          </p>
          <p className="text-gray-600 text-4xl text-nowrap">
            I build things for the web.
          </p>

          <p className="text-sm font-normal mt-2">
            Frontend Developer I specialize in building responsive,
            user-friendly interfaces with a focus on HTML, CSS, and JavaScript
            (ES6+). With proficiency in React.js and Next.js, I prioritize
            performance optimization and cross-browser compatibility. My passion
            lies in creating intuitive digital experiences that captivate and
            engage users effectively.
          </p>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};

export default Intro;
