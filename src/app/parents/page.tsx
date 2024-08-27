"use client"
import Link from "next/link";
import ContactUs from "../components/ContactUs";
import Button from "../components/Button";
import HorizontalRule from "../components/HorizontalRule";

export default function Parents() {
    return (
      <main className="flex min-h-screen flex-col justify-between py-20">
        <div className="flex min-h-screen flex-col items-center mx-[20%] mt-16 mb-12">
          <h1 className=" text-center pb-12 text-4xl text-logored font-semibold">To Parents</h1>
          <div className="mb-16">
              <h1 className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">Resources</h1>
              <h1 className="text-center sm:text-left pb-8 text-xl text-black font-semibold">Keyboard Lending</h1>
              <p className="text-justify">
                      aaSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              </p>
              <div className="w-full flex flex-row justify-center my-6">
                <a href="/">
                  <Button text="Apply for Keyboard" onClick={() => {}} />
                </a>
              </div>

              <h1 className="text-center sm:text-left pb-8 text-xl text-black font-semibold">Youtube Page</h1>
              <p className="text-justify mb-12">
                      aaSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              </p>
              <h1 className="text-center sm:text-left pb-8 text-xl text-black font-semibold">Registration</h1>
              <p className="text-justify">
                      aaSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              </p>
            </div>
            <HorizontalRule />
            <ContactUs />
        </div>

      </main> 
    );
  }
  