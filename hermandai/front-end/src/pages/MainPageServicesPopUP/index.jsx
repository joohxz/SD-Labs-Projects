import React from "react";

import { Img, Line, Text } from "components";

const MainPageServicesPopUPPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-inter h-[792px] mx-auto p-[121px] md:px-10 sm:px-5 relative w-full"
        style={{ backgroundImage: "url('images/img_mainpageservices.png')" }}
      >
        <div className="md:h-[538px] h-[540px] my-auto w-[76%] md:w-full">
          <div className="md:h-[538px] h-[540px] m-auto w-full">
            <Img
              className="absolute bottom-[11%] h-[292px] left-[0]"
              src="images/img_group76.svg"
              alt="groupSeventySix"
            />
            <div className="absolute md:h-[538px] h-[540px] inset-y-[0] my-auto right-[0] w-[90%] md:w-full">
              <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[21px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col justify-start mb-[3px] w-[98%] md:w-full">
                  <Text
                    className="mr-[452px] sm:text-[40px] md:text-[46px] text-[50px] text-indigo-500"
                    size="txtInterRegular50"
                  >
                    Select your Service
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[223px] mt-[250px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtLohitBengali40"
                  >
                    Upload AI Risk Profile
                  </Text>
                  <div className="flex flex-row font-inter gap-[13px] items-center justify-end md:ml-[0] ml-[609px] mt-[68px] w-[34%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[47px] items-center justify-start p-2.5 rounded-[20px]"
                      style={{
                        backgroundImage: "url('images/img_group115.svg')",
                      }}
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
                      style={{
                        backgroundImage: "url('images/img_group115.svg')",
                      }}
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
          <Text
            className="absolute bottom-[16%] left-[7%] md:text-5xl text-6xl text-white-A700"
            size="txtInterExtraBold60"
          >
            <>
              Generate AI
              <br />
              Risk{" "}
            </>
          </Text>
        </div>
        <div className="absolute bg-white-A700 border border-indigo-900 border-solid flex flex-col font-lohitbengali inset-x-[0] items-center justify-start mx-auto p-[30px] md:px-5 top-[33%]">
          <Text
            className="mb-[7px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtLohitBengali40"
          >
            Generate AI Risk Profile
          </Text>
        </div>
      </div>
    </>
  );
};

export default MainPageServicesPopUPPage;
