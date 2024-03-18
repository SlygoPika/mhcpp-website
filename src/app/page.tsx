import Link from "next/link";

// Components
import Hero from "./components/Hero";
import About from "./components/About";
import Button from "./components/Button";
import Modal from "./components/Modal";
import EmailForm from "./components/EmailForm";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="mx-[20%] my-24">
      <About />
      <div className="mt-10 grid grid-cols-2 xl:grid-cols-4 content-center">
        <div className="hidden xl:block"/>
        <div className="flex justify-center">
          <Button text="Become a Volunteer" />
        </div>
        <div className="flex justify-center">
          <Modal buttonText="Sponsor MHCPP">
            <EmailForm />
          </Modal>
        </div>
        
      </div>
      </div>
    </main>
  );
}
