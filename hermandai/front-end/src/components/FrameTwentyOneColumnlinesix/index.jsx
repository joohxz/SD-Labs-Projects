import React from "react";

import { Line, Text } from "components";

const FrameTwentyOneColumnlinesix = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[1044px] sm:h-[1182px] h-[1184px] relative w-[95%] md:w-full">
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[42px] md:px-10 sm:px-5 rounded-[20px] w-full">
            <div className="flex flex-col md:gap-10 gap-[178px] justify-start mb-[72px] md:ml-[0] ml-[5px] w-[63%] md:w-full">
              <Text
                className="mr-[300px] sm:text-[40px] md:text-[46px] text-[50px] text-indigo-500"
                size="txtInterRegular50"
              >
                {props?.locationtext}
              </Text>
              <div className="h-[788px] md:ml-[0] ml-[461px] relative w-[42%]">
                {props?.locationoptions}
                <Text
                  className="absolute bottom-[43%] left-[12%] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                  size="txtInterRegular50WhiteA700"
                >
                  {props?.continuetext}
                </Text>
              </div>
            </div>
          </div>
          <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[19%] w-full" />
        </div>
      </div>
    </>
  );
};

FrameTwentyOneColumnlinesix.defaultProps = {};

export default FrameTwentyOneColumnlinesix;
