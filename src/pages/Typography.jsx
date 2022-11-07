import React from "react";

export const Typography = () => {
  return (
    <div className="block py-[60px]">
      <div className="lg:container mx-auto">
        <h1 className="text-myprimary-font text-2xl font-mysemibold mb-[40px]">
          Typography
        </h1>
        <div className="w-1/2">
          <div className="flex justify-between">
            <h2 className="text-myprimary-font text-8xl font-mybold mb-[40px]">
              Avenir
            </h2>
            <h2 className="text-myprimary-font text-8xl font-mybold mb-[40px]">
              01
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-[14px] text-mysecondary-font">Used</h5>
            <div className="flex justify-between">
              <h4 className="text-[26px] text-myprimary-font font-mynormal">
                Avenir Book
              </h4>
              <h4 className="text-[26px] text-myprimary-font font-mynormal">
                21
              </h4>
            </div>
            <div className="flex justify-between">
              <h4 className="text-[26px] text-myprimary-font font-mysemibold">
                Avenir Medium
              </h4>
              <h4 className="text-[26px] text-myprimary-font font-mysemibold">
                55
              </h4>
            </div>
            <div className="flex justify-between">
              <h4 className="text-[26px] text-myprimary-font font-mybold">
                Avenir Heavy
              </h4>
              <h4 className="text-[26px] text-myprimary-font font-mybold">
                78
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
