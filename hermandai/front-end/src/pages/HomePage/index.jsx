import React from "react";

import { Button, Img, Text } from "components";

const HomePagePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[792px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_homepage.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[135px] items-center justify-start mb-[184px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pb-[22px] sm:px-5 px-[22px] w-full">
            <div className="flex mb-[60px] md:px-5 relative w-[30%] md:w-full">
              <div className="h-[98px] my-auto w-[85%]">
                <Img
                  className="absolute h-[41px] left-[0] object-cover top-[20%] w-[17%]"
                  src="images/img_image13.png"
                  alt="imageEighteen"
                />
                <Img
                  className="absolute h-[98px] inset-y-[0] my-auto object-cover right-[0] w-[89%]"
                  src="images/img_image11_98x305.png"
                  alt="imageEleven"
                />
              </div>
              <Text
                className="ml-[-12px] mt-6 text-white-A700 text-xl z-[1]"
                size="txtInterSemiBold20WhiteA700"
              >
                Product
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[17px] md:mt-0 mt-[26px] text-white-A700 text-xl"
              size="txtInterSemiBold20WhiteA700"
            >
              T&O Standings
            </Text>
            <Text
              className="md:ml-[0] ml-[19px] md:mt-0 mt-6 text-white-A700 text-xl"
              size="txtInterSemiBold20WhiteA700"
            >
              Learn
            </Text>
            <Text
              className="md:ml-[0] ml-[26px] md:mt-0 mt-[26px] text-white-A700 text-xl"
              size="txtInterSemiBold20WhiteA700"
            >
              Support
            </Text>
            <Button
              className="cursor-pointer font-extrabold leading-[normal] mb-[93px] min-w-[140px] md:ml-[0] ml-[478px] md:mt-0 mt-[25px] shadow-bs1 text-center text-xl"
              shape="round"
              size="sm"
            >
              My Account
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1188px] mx-auto md:px-5 w-full">
            <div className="bg-indigo-900_99 flex flex-col items-center justify-end p-[39px] sm:px-5 rounded-[20px] shadow-bs">
              <Text
                className="mt-7 md:text-5xl text-6xl text-white-A700"
                size="txtInterExtraBold60"
              >
                <>
                  Generate AI
                  <br />
                  Risk Profile
                </>
              </Text>
            </div>
            <div className="bg-indigo-900_99 flex flex-col items-end justify-end p-5 rounded-[20px] shadow-bs">
              <Text
                className="mb-[18px] mt-[47px] md:text-5xl text-6xl text-white-A700"
                size="txtInterExtraBold60"
              >
                <>
                  Engage with
                  <br />
                  T&O Standings
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
