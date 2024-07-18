import React from "react";

import { Img, Text } from "components";

const OPage = () => {
  return (
    <>
      <div className="font-inter h-[2984px] mx-auto pb-[47px] md:pl-10 sm:pl-5 pl-[47px] relative w-full">
        <div className="bg-gradient  flex flex-col md:h-auto h-full items-end justify-start max-w-[1393px] mx-auto pb-2.5 pt-[3817px] px-2.5 md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[612px] justify-start w-[67%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mr-[65px] w-[93%] md:w-full">
              <div className="bg-blue-200 flex flex-col items-center justify-start p-4 rounded-[20px] shadow-bs">
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtInterExtraBold20"
                >
                  Generate Risk Profile
                </Text>
              </div>
              <div className="bg-indigo-900 flex flex-col items-center justify-start p-3.5 rounded-[20px] shadow-bs">
                <Text
                  className="mb-1.5 text-center text-white-A700 text-xl"
                  size="txtInterExtraBold20"
                >
                  View Risk Profile
                </Text>
              </div>
            </div>
            <Img
              className="h-[177px] md:ml-[0] ml-[480px]"
              src="images/img_group69.svg"
              alt="groupSeventyThree"
            />
          </div>
        </div>
        <div className="absolute h-[2707px] inset-x-[0] max-w-[1393px] mx-auto top-[0] w-full">
          <Img
            className="h-[2707px] m-auto object-cover w-full"
            src="images/img_wallpaperflare2.png"
            alt="wallpaperflareTwo"
          />
          <Img
            className="absolute h-[2707px] inset-[0] justify-center m-auto object-cover w-[93%]"
            src="images/img_rectangle289.png"
            alt="rectangle289"
          />
        </div>
      </div>
    </>
  );
};

export default OPage;
