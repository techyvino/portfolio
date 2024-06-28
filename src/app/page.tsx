import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
      <div className="snap-proximity snap-center" id="Intro">
        <Intro />
      </div>
      <div className="snap-proximity snap-start mx-5 scroll-my-5" id="Skills">
        <Skills />
      </div>
      <div
        className="snap-proximity snap-start mx-5 scroll-my-5"
        id="Experience"
      >
        <Experience />
      </div>
    </main>
  );
}
