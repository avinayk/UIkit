import React from "react";

export const BrandColors = () => {
  return (
    <div className="block py-[60px]">
      <div className="lg:container mx-auto">
        <h1 className="text-myprimary-font text-2xl font-mysemibold mb-[40px]">
          Brand Colors
        </h1>
        <div className="flex flex-column justify-between">
          <div className="flex flex-col gap-4 w-1/4">
            <h1 className="text-myprimary-font text-2xl font-mynormal">
              Colors
            </h1>
            <p className="text-myprimary-font text-[16px] font-mynormal">
              The core palette will cover the majority of your needs. It's
              intentionally small in variety so as to not dilute the brand
              visuals, which adds confusion.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-2/4">
            <div className="flex gap-6">
              <div className="flex flex-col gap-3 text-center">
                <div className="w-[100px] h-[100px] bg-myprimary rounded-full mx-auto"></div>
                <h6 className="text-[14px] text-myprimary-font uppercase">
                  Primary Color
                </h6>
              </div>
              <div className="flex flex-col gap-3 text-center">
                <div className="w-[100px] h-[100px] bg-mysecondary rounded-full mx-auto"></div>
                <h6 className="text-[14px] text-myprimary-font uppercase">
                  Secondary Color
                </h6>
              </div>
              <div className="flex flex-col gap-3 text-center">
                <div className="w-[100px] h-[100px] bg-mytertiary rounded-full mx-auto"></div>
                <h6 className="text-[14px] text-myprimary-font uppercase">
                  Tertiary Color
                </h6>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-3 text-center">
                <div className="w-[100px] h-[100px] bg-myprimary-font rounded-full mx-auto"></div>
                <h6 className="text-[14px] text-myprimary-font uppercase">
                  Primary Color
                </h6>
              </div>
              <div className="flex flex-col gap-3 text-center">
                <div className="w-[100px] h-[100px] bg-mysecondary-font rounded-full mx-auto"></div>
                <h6 className="text-[14px] text-myprimary-font uppercase">
                  Secondary Color
                </h6>
              </div>
              <div className="flex flex-col gap-3 text-center">
                <div className="w-[100px] h-[100px] bg-mycustom rounded-full mx-auto"></div>
                <h6 className="text-[14px] text-myprimary-font uppercase">
                  Custom Color
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
