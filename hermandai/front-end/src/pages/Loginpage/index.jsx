import React from "react";

import { Img, Line, Text } from "components";

const LoginpagePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1484px] items-center justify-start mx-auto p-[47px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_signupinformations.png')" }}
      >
        <div className="flex flex-col gap-9 justify-start max-w-[1196px] mb-[207px] mx-auto w-full">
          <div className="flex sm:flex-col flex-row gap-3 items-start justify-end md:ml-[0] ml-[478px] w-[42%] md:w-full">
            <Img
              className="h-[183px] md:h-auto object-cover w-[38%] sm:w-full"
              src="images/img_image20.png"
              alt="imageTwenty"
            />
            <Img
              className="h-[50px] md:h-auto sm:mt-0 mt-10 object-cover w-3/5 sm:w-full"
              src="images/img_image33.png"
              alt="imageThirtyEight"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="sm:h-[1030px] md:h-[1132px] h-[964px] relative w-full">
              <div className="absolute bg-indigo-900 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[35px] sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col justify-start mb-[31px] w-[96%] md:w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                    size="txtInterBold50"
                  >
                    Sign in to Hermandai
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[433px] mt-[113px] md:text-5xl text-[68px] text-center text-white-A700"
                    size="txtInterBold68"
                  >
                    Login
                  </Text>
                  <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] mt-[65px] w-full">
                    <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-between w-full">
                      <Text
                        className="sm:mt-0 mt-[15px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                        size="txtInterMedium40"
                      >
                        Email address:
                      </Text>
                      <div className="bg-white-A700 border border-black-900 border-solid h-24 rounded-[20px] shadow-bs w-[72%]"></div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-[26px] w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                        size="txtInterMedium40"
                      >
                        Password:
                      </Text>
                      <div className="bg-white-A700 border border-black-900 border-solid flex flex-col items-end justify-end p-5 rounded-[20px] shadow-bs">
                        <Img
                          className="h-[43px] mr-[11px] mt-[11px]"
                          src="images/img_lock.svg"
                          alt="lock"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end ml-9 md:ml-[0] mt-[45px] w-[94%] md:w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 underline"
                        size="txtInterMedium25"
                      >
                        Forgot password?
                      </Text>
                      <Text
                        className="bg-indigo-700 border border-black-900 border-solid h-[90px] justify-center md:ml-[0] ml-[55px] md:mt-0 mt-[41px] pb-[23px] pt-1.5 sm:px-5 px-[35px] rounded-[20px] sm:text-[40px] md:text-[46px] text-[50px] text-shadow-ts text-white-A700 w-[485px]"
                        size="txtInterSemiBold50"
                      >
                        Next
                      </Text>
                      <Img
                        className="h-[57px] md:ml-[0] ml-[201px] md:mt-0 mt-[30px]"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[225px] mt-[110px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtInterRegular25"
                    >
                      <span className="text-white-A700 font-inter text-left font-medium">
                        Don’t have an account?{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-white-A700 font-inter text-left font-black underline"
                      >
                        Send Solicitation
                      </a>
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[15%] w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginpagePage;
