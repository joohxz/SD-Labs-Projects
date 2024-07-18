import React from "react";

import { Line, Text } from "components";

const MainPageAITypePopUpPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-inter h-[792px] mx-auto p-[121px] md:px-10 sm:px-5 relative w-full"
        style={{ backgroundImage: "url('images/img_mainpageservices.png')" }}
      >
        <div className="absolute bg-indigo-900_99 bottom-[23%] flex flex-col items-start justify-end left-[15%] p-8 md:px-5 rounded-[20px] shadow-bs">
          <Text
            className="ml-8 md:ml-[0] mt-[42px] md:text-5xl text-6xl text-white-A700"
            size="txtInterExtraBold60"
          >
            <>
              Generate AI
              <br />
              Risk Profile
            </>
          </Text>
        </div>
        <div className="absolute h-[540px] md:h-[695px] sm:h-[720px] inset-[0] justify-center m-auto max-w-[980px] w-full">
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] rounded-[20px] w-full">
            <div className="flex flex-col justify-start mb-1.5 w-[97%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-indigo-500"
                size="txtInterRegular50"
              >
                Select AI Model
              </Text>
              <div className="flex flex-col items-start justify-start ml-14 md:ml-[0] mr-[62px] mt-[82px] p-6 sm:px-5 w-[88%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[65px] items-start justify-start mb-[7px] mt-0.5 w-[96%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-12 rounded-[26px] w-[9%]"></div>
                    <Text
                      className="ml-6 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterRegular30"
                    >
                      gpt-3.5-turbo-0613
                    </Text>
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-12 md:ml-[0] ml-[53px] rounded-[26px] w-[9%]"></div>
                    <Text
                      className="ml-5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterRegular30"
                    >
                      gpt-4-0314
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-12 rounded-[26px] w-[8%]"></div>
                    <Text
                      className="ml-6 sm:ml-[0] sm:mt-0 mt-1.5 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterRegular30"
                    >
                      gpt-3.5-turbo-0301
                    </Text>
                    <div className="bg-blue_gray-100 border border-black-900 border-solid h-12 sm:ml-[0] ml-[55px] rounded-[26px] w-[8%]"></div>
                    <Text
                      className="sm:ml-[0] ml-[22px] sm:mt-0 mt-1 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterRegular30"
                    >
                      gpt-4-32k-0314
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[13px] items-center justify-end md:ml-[0] ml-[613px] mt-[90px] w-[33%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[47px] items-center justify-start p-2.5 rounded-[20px]"
                  style={{ backgroundImage: "url('images/img_group115.svg')" }}
                >
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtInterExtraBold20"
                  >
                    Back
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[47px] items-center justify-start p-2.5 rounded-[20px]"
                  style={{ backgroundImage: "url('images/img_group115.svg')" }}
                >
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtInterExtraBold20"
                  >
                    Next
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[19%] w-full" />
        </div>
      </div>
    </>
  );
};

export default MainPageAITypePopUpPage;
