import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
export const Buttons = () => {
  return (
    <div className="block py-[60px]">
      <div className="lg:container mx-auto">
        <h1 className="text-myprimary-font text-2xl font-mysemibold mb-[40px]">
          Buttons
        </h1>
        <div className="flex gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] text-myprimary-font uppercase font-mysemibold">
                Button Sizes
              </h2>
              <h3 className="text-[18px] text-myprimary-font uppercase font-mynormal">
                Default | Avenir Heavy | Size 20
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="block">
                <button className="bg-myprimary py-[10px] px-[30px] rounded-[6px] text-white text-[16px] font-mysemibold">
                  Next Screen
                </button>
              </div>
              <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
                Cta 1 | Avenir Heavy | Size 16
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="block">
                <button className="bg-myprimary py-[10px] px-[30px] rounded-[6px] text-white text-[20px] font-mysemibold">
                  Next Screen
                </button>
              </div>
              <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
                Cta 2 | Avenir Heavy | Size 20
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="block">
                <button className="bg-myprimary py-[10px] px-[30px] rounded-[6px] text-white text-[24px] font-mysemibold">
                  Next Screen
                </button>
              </div>
              <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
                Cta 3 | Avenir Heavy | Size 24
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] text-myprimary-font uppercase font-mysemibold">
                Border Buttons
              </h2>
              <h3 className="text-[18px] text-myprimary-font uppercase font-mynormal">
                Default | Avenir Heavy | Size 20
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="block">
                <button className="bg-white py-[10px] px-[30px] rounded-[6px] border border-mysecondary text-myprimary-font text-[16px] font-mysemibold">
                  Next Screen
                </button>
              </div>
              <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
                Cta 1 | Avenir Heavy | Size 16
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="block">
                <button className="bg-white py-[10px] px-[30px] rounded-[6px] border border-mysecondary text-myprimary-font text-[20px] font-mysemibold">
                  Next Screen
                </button>
              </div>
              <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
                Cta 2 | Avenir Heavy | Size 20
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="block">
                <button className="bg-white py-[10px] px-[30px] rounded-[6px] border border-mysecondary text-myprimary-font text-[24px] font-mysemibold">
                  Next Screen
                </button>
              </div>
              <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
                Cta 3 | Avenir Heavy | Size 24
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] text-myprimary-font uppercase font-mysemibold">
                Icon Buttons
              </h2>
              <h3 className="text-[18px] text-myprimary-font uppercase font-mynormal">
                tailwind Icons | Size 20
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="block">
                <button className="bg-mytertiary py-[10px] px-[30px] rounded-[6px] border border-mysecondary text-myprimary-font text-[16px] font-mysemibold">
                  <div className="flex items-center">
                    <BsArrowRightShort className="text-[16px]" />{" "}
                    <span>Next Screen</span>
                  </div>
                </button>
              </div>
              <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
                Cta 1 | Avenir Heavy | Size 16
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="block">
                <button className="bg-mytertiary py-[10px] px-[30px] rounded-[6px] border border-mysecondary text-myprimary-font text-[20px] font-mysemibold">
                  <div className="flex items-center">
                    <BsArrowRightShort className="text-[20px]" />{" "}
                    <span>Next Screen</span>
                  </div>
                </button>
              </div>
              <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
                Cta 2 | Avenir Heavy | Size 20
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="block">
                <button className="bg-mytertiary py-[10px] px-[30px] rounded-[6px] border border-mysecondary text-myprimary-font text-[24px] font-mysemibold">
                  <div className="flex items-center">
                    <BsArrowRightShort className="text-[24px]" />{" "}
                    <span>Next Screen</span>
                  </div>
                </button>
              </div>
              <h3 className="text-[16px] text-myprimary-font uppercase font-mynormal">
                Cta 3 | Avenir Heavy | Size 24
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
