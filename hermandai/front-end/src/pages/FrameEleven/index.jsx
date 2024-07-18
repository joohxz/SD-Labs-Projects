import React from "react";

import { Button, Img, Text } from "components";

const FrameElevenPage = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-center justify-start mx-auto p-[22px] sm:px-5 w-full">
        <div className="flex mb-[26px] md:mt-0 mt-0.5 md:px-5 relative w-[30%] md:w-full">
          <Img
            className="h-[135px] my-auto object-cover w-[32%]"
            src="images/img_image20.png"
            alt="imageTwenty"
          />
          <Img
            className="h-[101px] ml-[-18px] mt-2 object-cover w-[74%] z-[1]"
            src="images/img_image16.png"
            alt="imageSixteen"
          />
        </div>
        <Text className="text-indigo-500 text-xl" size="txtInterSemiBold20">
          Product
        </Text>
        <Text
          className="md:ml-[0] ml-[29px] text-indigo-500 text-xl"
          size="txtInterSemiBold20"
        >
          T&O Standings
        </Text>
        <Text
          className="md:ml-[0] ml-[25px] text-indigo-500 text-xl"
          size="txtInterSemiBold20"
        >
          Learn
        </Text>
        <Text
          className="ml-6 md:ml-[0] text-indigo-500 text-xl"
          size="txtInterSemiBold20"
        >
          Support
        </Text>
        <Text
          className="ml-6 md:ml-[0] text-indigo-500 text-xl"
          size="txtInterSemiBold20"
        >
          My account
        </Text>
        <Button
          className="cursor-pointer font-extrabold leading-[normal] mb-[74px] min-w-[140px] md:ml-[0] ml-[265px] md:mt-0 mt-[55px] rounded-[17px] shadow-bs1 text-center text-xl"
          size="xs"
        >
          My account
        </Button>
      </div>
    </>
  );
};

export default FrameElevenPage;
