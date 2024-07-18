import React from "react";

import { Img, Line, Text } from "components";

const RecoverpasswordPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[1365px] mx-auto p-11 md:px-10 sm:px-5 relative w-full">
        <Img
          className="h-[233px] mb-[-70px] mx-auto object-cover w-[17%] z-[1]"
          src="images/img_image20.png"
          alt="imageTwenty"
        />
        <div className="h-[942px] m-auto max-w-[1165px] w-full">
          <Img
            className="h-[150px] mb-[-46px] ml-auto object-cover w-[77%] z-[1]"
            src="images/img_image33.png"
            alt="imageFortyTwo"
          />
          <div className="md:h-[834px] h-[838px] mt-auto mx-auto w-full">
            <div className="absolute bg-indigo-900 flex flex-col h-full inset-[0] justify-center m-auto p-[31px] sm:px-5 rounded-[20px]">
              <Text
                className="md:ml-[0] ml-[9px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtInterBold50"
              >
                Recovering password
              </Text>
              <Text
                className="md:ml-[0] ml-[93px] mt-[155px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                size="txtInterSemiBold45"
              >
                We will send you a temporary password.{" "}
              </Text>
              <Text className="md:ml-[0] ml-[37px] mr-[41px] mt-[94px]"></Text>
              <Text
                className="bg-indigo-700 border border-black-900 border-solid h-[78px] justify-center md:ml-[0] mt-[58px] mx-[312px] pb-[13px] pt-1 sm:px-5 px-[35px] rounded-[20px] sm:text-[40px] md:text-[46px] text-[50px] text-shadow-ts text-white-A700 w-[472px]"
                size="txtInterSemiBold50"
              >
                Continue
              </Text>
              <Text
                className="mb-[73px] md:ml-[0] ml-[342px] mt-[62px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtInterRegular25"
              >
                <span className="text-white-A700 font-inter text-left font-medium">
                  Already have an account?{" "}
                </span>
                <a
                  href="javascript:"
                  className="text-white-A700 font-inter text-left font-black underline"
                >
                  Sign In
                </a>
              </Text>
            </div>
            <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[15%] w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecoverpasswordPage;
