import React from "react";

import { Img, Line, Text } from "components";

const SignupinformationsrequiredBussinessonePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[81px] h-[2410px] justify-start mx-auto p-[76px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_signupinformations.png')" }}
      >
        <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start md:ml-[0] ml-[5px] w-[51%] md:w-full">
          <Img
            className="h-[290px] sm:h-auto object-cover w-[47%] md:w-full"
            src="images/img_image20.png"
            alt="imageTwenty"
          />
          <Img
            className="h-[50px] sm:h-auto md:mt-0 mt-[94px] object-cover w-[46%] md:w-full"
            src="images/img_image33.png"
            alt="imageForty"
          />
        </div>
        <div className="flex flex-col items-center max-w-[1265px] mb-[35px] mx-auto pl-[9px] w-full">
          <div className="md:h-[1841px] h-[1852px] sm:h-[1945px] relative w-full">
            <div className="absolute bg-indigo-900 flex flex-col h-max inset-[0] items-start justify-center m-auto p-3 rounded-[20px] w-[93%]">
              <div className="flex flex-col gap-[23px] justify-start md:ml-[0] ml-[87px] mt-[1582px] w-4/5 md:w-full">
                <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start w-full">
                  <div className="bg-white-A700 border-[3px] border-gray-300 border-solid h-[37px] mb-[42px] sm:mt-0 mt-[5px] w-[6%]"></div>
                  <Text
                    className="sm:flex-1 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-[92%] sm:w-full"
                    size="txtInterRegular25"
                  >
                    <span className="text-white-A700 font-inter text-left font-normal">
                      By creating an account you agree with our{" "}
                    </span>
                    <span className="text-white-A700 font-inter text-left font-normal">
                      Terms of Service
                    </span>
                    <span className="text-white-A700 font-inter text-left font-normal">
                      ,{" "}
                    </span>
                    <span className="text-white-A700 font-inter text-left font-normal">
                      Privacy Policy
                    </span>
                    <span className="text-white-A700 font-inter text-left font-normal">
                      , and our default{" "}
                    </span>
                    <span className="text-white-A700 font-inter text-left font-normal">
                      Notification Settings
                    </span>
                    <span className="text-white-A700 font-inter text-left font-normal">
                      .
                    </span>
                  </Text>
                </div>
                <div className="bg-indigo-700 border border-black-900 border-solid flex flex-col items-start justify-start ml-60 md:ml-[0] mr-[188px] p-[29px] sm:px-5 rounded-[20px] shadow-bs">
                  <Text
                    className="mb-[9px] md:ml-[0] ml-[132px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                    size="txtInterSemiBold50"
                  >
                    Done
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[74px] inset-x-[0] justify-end mx-auto p-[5px] top-[0] w-full">
              <div className="flex flex-col justify-start md:ml-[0] ml-[53px] mr-7 mt-[47px] w-[94%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[43px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                  size="txtInterBold50"
                >
                  Personal data
                </Text>
                <Line className="bg-black-900 h-px mt-[34px] w-full" />
                <div className="h-[628px] md:ml-[0] ml-[51px] mt-[27px] relative w-[79%] md:w-full">
                  <Text
                    className="mb-[-16.17px] ml-[25px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 z-[1]"
                    size="txtInterBold40"
                  >
                    Name
                  </Text>
                  <Text
                    className="mb-[-15.96px] ml-auto mr-[215px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 z-[1]"
                    size="txtInterBold40"
                  >
                    Surname
                  </Text>
                  <div className="flex flex-col items-center justify-end mt-auto mx-auto sm:pl-5 pl-[23px] pt-[23px] w-full">
                    <div className="flex flex-col items-start justify-start mt-[7px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <div className="bg-white-A700 border border-black-900 border-solid h-[71px] shadow-bs w-[44%]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[71px] shadow-bs w-[45%]"></div>
                      </div>
                      <Text
                        className="ml-2 md:ml-[0] mt-[30px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                        size="txtInterBold40"
                      >
                        Email
                      </Text>
                      <div className="bg-white-A700 border border-black-900 border-solid h-[71px] mt-[22px] shadow-bs w-full"></div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[11px] mt-[81px] w-[99%] md:w-full">
                        <div className="bg-gray-300 border-[3px] border-gray-500_01 border-solid h-[68px] rounded-[50%] w-[68px]"></div>
                        <Text
                          className="ml-12 md:ml-[0] md:mt-0 mt-2 sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                          size="txtInterBold45"
                        >
                          Bussiness
                        </Text>
                        <div className="bg-white-A700 border-[3px] border-gray-500_01 border-solid h-[68px] md:ml-[0] ml-[145px] rounded-[50%] w-[68px]"></div>
                        <Text
                          className="md:ml-[0] ml-[70px] md:mt-0 mt-3 sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                          size="txtInterBold45"
                        >
                          Professional
                        </Text>
                      </div>
                      <Text
                        className="mt-[55px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                        size="txtInterBold40"
                      >
                        Bussiness name
                      </Text>
                      <div className="bg-white-A700 border border-black-900 border-solid h-10 mt-[26px] shadow-bs w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[127px] mr-[198px] w-[74%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtInterBold40"
                >
                  Bussiness address
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[71px] mt-[18px] shadow-bs w-full"></div>
                <Text
                  className="mt-[53px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtInterBold40"
                >
                  CEO’s full name
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[71px] mt-[18px] shadow-bs w-full"></div>
                <Text
                  className="mt-11 sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtInterBold40"
                >
                  Password
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[71px] mt-4 shadow-bs w-full"></div>
                <Text
                  className="mt-[47px] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtInterBold40"
                >
                  Confirm password
                </Text>
                <div className="bg-white-A700 border border-black-900 border-solid h-[71px] mt-4 shadow-bs w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupinformationsrequiredBussinessonePage;
