import React from "react";
export const Inputs = () => {
  return (
    <div className="block py-[60px]">
      <div className="lg:container mx-auto">
        <h1 className="text-myprimary-font text-2xl font-mysemibold mb-[40px]">
          Inputs
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-[16px] text-myprimary-font uppercase font-mysemibold">
              Input Sizes
            </h2>
            <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
              Default | Avenir Heavy | Size 20
            </h3>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-1/4 border group border-mysecondary-font rounded-[6px] overflow-hidden bg-white flex flex-col">
              <label
                htmlFor=""
                className="text-[16px] text-myprimary-font bg-white pt-[4px] px-[10px] font-mysemibold"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="text-[16px] w-100 text-myprimary-font py-[4px] px-[10px] focus:outline-none focus:bottom-0"
              />
            </div>

            <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
              Input 1 | Avenir Heavy | Size 16
            </h3>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-2/4 border group border-mysecondary-font rounded-[6px] overflow-hidden bg-white flex flex-col">
              <label
                htmlFor=""
                className="text-[20px] text-myprimary-font bg-white pt-[4px] px-[10px] font-mysemibold"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="text-[20px] w-100 text-myprimary-font py-[4px] px-[10px] focus:outline-none focus:bottom-0"
              />
            </div>

            <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
              Input 1 | Avenir Heavy | Size 20
            </h3>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-3/4 border group border-mysecondary-font rounded-[6px] overflow-hidden bg-white flex flex-col">
              <label
                htmlFor=""
                className="text-[24px] text-myprimary-font bg-white pt-[4px] px-[10px] font-mysemibold"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="text-[24px] w-100 text-myprimary-font py-[4px] px-[10px] focus:outline-none focus:bottom-0"
              />
            </div>

            <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
              Input 1 | Avenir Heavy | Size 24
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
