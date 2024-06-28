import { Caveat } from "next/font/google";

const CaveatFont = Caveat({ subsets: ["latin-ext"] });
const Navbar = () => {
  return (
    <nav className="flex w-full h-[5vh] justify-between">
      <h1 className={`${CaveatFont.className} text-3xl`}>
        {"< Vinothkumar />"}
      </h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
