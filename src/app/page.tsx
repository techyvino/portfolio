import Experience from "./components/Experience";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
      <div className="snap-always snap-center" id="Intro">
        <Intro />
      </div>
      <div className="snap-always snap-center" id="Experience">
        <Experience />
      </div>
    </main>
  );
}
