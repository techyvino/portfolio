import Experience from "./components/Experience";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-fit p-10">
      <Intro />
      <Experience />
    </main>
  );
}
