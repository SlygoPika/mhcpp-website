import Link from "next/link";

// Components
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className=" mx-[20%] my-24">
      <About />
      </div>
      <Link href="/dashboard" target='_blank'>Go to dashboard</Link>
    </main>
  );
}
