import React from 'react';

const ContactUs = () => {
    return (
        <div className="my-10">
            <h1 className="text-center sm:text-left pb-8 text-3xl text-logored font-semibold">Contact Information</h1>
            <p className="text-justify">
              We’re here to help! If you have any questions, feel free to reach out to us via email.
            </p>
            <ul className="list-disc mt-6">
              <li className="ml-10"><span className="font-bold">Email:</span> montrealhcpp@gmail.com</li>
            </ul>
          </div>
    );
}

export default ContactUs;