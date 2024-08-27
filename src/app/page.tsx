import Link from "next/link";

// Components
import Hero from "./components/subviews/home/Hero";
import About from "./components/subviews/home/About";
import Button from "./components/Button";
import Modal from "./components/Modal";
import EmailForm from "./components/EmailForm";
import Activities from "./components/subviews/home/Activities";
import Socials from "./components/subviews/home/Socials";
import TeamPicture from "./components/TeamPicture";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="mx-[20%] my-24">
        <div id="aboutus"></div>
        <About />
        <div className="my-10 grid grid-cols-2 xl:grid-cols-4 content-center">
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
        <TeamPicture />
      <div className="mx-[20%] my-24">
        <div id="activities"></div>
        <Activities />
      </div>
    </main>
  );
}
