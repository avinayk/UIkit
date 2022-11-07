import React from "react";

export const About = () => {
  return (
    <div className="block py-[60px]">
      <div className="lg:container mx-auto">
        <h1 className="text-myprimary-font text-2xl font-mynormal mb-[40px]">
          About Us
        </h1>
        <div className="flex flex-col gap-4">
          <h1 className="text-myprimary-font text-3xl font-mysemibold">
            Guided Flow Kit
          </h1>
          <h1 className="text-3xl text-mysecondary-font font-mysemibold">
            Open Source User Interface kit
            <br className="hidden md:block" /> built on top Tailwind CSS
          </h1>
        </div>
      </div>
    </div>
  );
};
