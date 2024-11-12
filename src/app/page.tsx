import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Core_Curses from "./components/Core_Curses";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Core_Curses />
      </div>
  );
}
