import React from "react";

import { Line, Text } from "components";
import FrameTwentyOneColumnlinesix from "components/FrameTwentyOneColumnlinesix";

const FrameTwentyOnePage = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 gap-[93px] items-start mx-auto overflow-auto pb-[378px] w-full">
        <div className="overflow-x-auto w-full">
          <div className="h-[1500px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="h-[1500px] w-full"></div>
            </div>
            <FrameTwentyOneColumnlinesix className="absolute bg-black-900 flex flex-col gap-2.5 h-[1367px] md:h-auto inset-x-[0] items-center justify-start max-w-[1440px] mx-auto p-2.5 top-[0] w-full" />
          </div>
        </div>
        <FrameTwentyOneColumnlinesix className="bg-black-900 flex flex-col gap-2.5 h-[1367px] md:h-auto items-start justify-start max-w-[1440px] mb-[133px] p-2.5 w-full" />
      </div>
    </>
  );
};

export default FrameTwentyOnePage;
