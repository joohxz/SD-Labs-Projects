import React from "react";

import { Img, Input, Line, Text } from "components";

const MainPagePaymentMethodPopUPPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-inter h-[792px] mx-auto p-[121px] md:px-10 sm:px-5 relative w-full"
        style={{ backgroundImage: "url('images/img_mainpageservices.png')" }}
      >
        <div className="absolute bg-indigo-900_99 bottom-[23%] flex flex-col items-start justify-end left-[15%] p-[38px] md:px-5 rounded-[20px] shadow-bs">
          <Text
            className="ml-6 md:ml-[0] mt-[30px] md:text-5xl text-6xl text-white-A700"
            size="txtInterExtraBold60"
          >
            <>
              Generate AI
              <br />
              Risk Profile
            </>
          </Text>
        </div>
        <div className="absolute sm:h-[537px] h-[540px] md:h-[869px] inset-[0] justify-center m-auto max-w-[980px] w-full">
          <div className="sm:h-[537px] h-[540px] md:h-[869px] m-auto w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[15px] rounded-[20px] w-full">
              <div className="flex flex-col gap-[47px] items-start justify-start my-[5px] w-[98%] md:w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-indigo-500"
                  size="txtInterRegular50"
                >
                  Select your Payment Method
                </Text>
                <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[97%] md:w-full">
                      <div className="bg-blue_gray-100 border border-black-900 border-solid h-[30px] sm:mt-0 my-[15px] rounded-[50%] w-[30px]"></div>
                      <Text
                        className="sm:ml-[0] ml-[26px] text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        Pay with PayPal
                      </Text>
                      <Img
                        className="h-[60px] md:h-auto sm:ml-[0] ml-[97px] object-cover w-[34%] sm:w-full"
                        src="images/img_image24.png"
                        alt="imageTwentyFour"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-0.5 md:ml-[0] mt-[3px] w-[92%] md:w-full">
                      <div className="bg-blue_gray-100 border border-black-900 border-solid h-[30px] mb-[13px] sm:mt-0 mt-[17px] rounded-[50%] w-[30px]"></div>
                      <Text
                        className="sm:ml-[0] ml-[25px] text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        Pay with Google Pay
                      </Text>
                      <Img
                        className="h-[60px] md:h-auto sm:ml-[0] ml-[47px] object-cover w-[33%] sm:w-full"
                        src="images/img_image30.png"
                        alt="imageThirty"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-0.5 md:ml-[0] mt-[9px] w-[90%] md:w-full">
                      <div className="bg-blue_gray-100 border border-black-900 border-solid h-[30px] mb-[17px] sm:mt-0 mt-[13px] rounded-[50%] w-[30px]"></div>
                      <Text
                        className="sm:ml-[0] ml-[25px] text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        Pay with Apple Pay
                      </Text>
                      <Img
                        className="h-[60px] md:h-auto sm:ml-[0] ml-[58px] object-cover w-[31%] sm:w-full"
                        src="images/img_image29.png"
                        alt="imageTwentyNine"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="bg-blue_gray-100 border border-black-900 border-solid h-[30px] mb-3 sm:mt-0 mt-[18px] rounded-[50%] w-[30px]"></div>
                      <Text
                        className="sm:ml-[0] ml-[27px] text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        Pay with Amazon Pay
                      </Text>
                      <Img
                        className="h-[60px] md:h-auto sm:ml-[0] ml-[38px] object-cover w-[35%] sm:w-full"
                        src="images/img_image32.png"
                        alt="imageThirtyTwo"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-1.5 w-full">
                      <div className="bg-blue_gray-100 border border-black-900 border-solid h-[30px] mb-[13px] sm:mt-0 mt-[17px] rounded-[50%] w-[30px]"></div>
                      <Text
                        className="text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        Pay with Samsung Pay
                      </Text>
                      <Img
                        className="h-[60px] md:h-auto object-cover"
                        src="images/img_image31.png"
                        alt="imageThirtyOne"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[15px] w-[49%] md:w-full">
                    <div className="flex flex-row gap-[26px] items-start justify-start w-[67%] md:w-full">
                      <div className="bg-blue_gray-100 border border-black-900 border-solid flex flex-col h-[30px] items-center justify-start p-[3px] rounded-[50%] w-[30px]">
                        <div className="bg-black-900 h-6 rounded-[50%] w-6"></div>
                      </div>
                      <Text
                        className="text-black-900 text-lg"
                        size="txtInterSemiBold18"
                      >
                        Pay with credit or debit card
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-2.5 w-[73%] md:w-full">
                      <Img
                        className="h-[50px] md:h-auto object-cover w-[26%]"
                        src="images/img_image25.png"
                        alt="imageTwentyFive"
                      />
                      <div className="flex relative w-1/2">
                        <Img
                          className="h-[50px] my-auto object-cover w-1/2"
                          src="images/img_image26.png"
                          alt="imageTwentySix"
                        />
                        <Img
                          className="h-[50px] ml-[-0.05px] my-auto object-cover w-[51%] z-[1]"
                          src="images/img_image28.png"
                          alt="imageTwentyEight"
                        />
                      </div>
                      <Img
                        className="h-[50px] md:h-auto object-cover w-[24%]"
                        src="images/img_image27.png"
                        alt="imageTwentySeven"
                      />
                    </div>
                    <Input
                      name="groupSeventyNine"
                      placeholder="Card Number*"
                      className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-black-900 border-solid ml-0.5 md:ml-[0] mt-3 w-[84%]"
                      shape="square"
                      size="sm"
                    ></Input>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-0.5 md:ml-[0] mt-[15px] w-[84%] md:w-full">
                      <Text
                        className="bg-white-A700 border border-black-900 border-solid h-[39px] justify-center pl-[13px] sm:pr-5 pr-[35px] py-[9px] text-base text-gray-500 w-[100px]"
                        size="txtInterSemiBold16"
                      >
                        MM*
                      </Text>
                      <Text
                        className="bg-white-A700 border border-black-900 border-solid h-[39px] justify-center sm:ml-[0] ml-[22px] pl-3 sm:pr-5 pr-[35px] py-[9px] text-base text-gray-500 w-[100px]"
                        size="txtInterSemiBold16"
                      >
                        YY*
                      </Text>
                      <Text
                        className="bg-white-A700 border border-black-900 border-solid h-[39px] justify-center ml-3.5 sm:ml-[0] pl-[11px] sm:pr-5 pr-[35px] py-[9px] text-base text-gray-500 w-[139px]"
                        size="txtInterSemiBold16"
                      >
                        CVV/CVC*
                      </Text>
                    </div>
                    <Input
                      name="groupSeventyFive"
                      placeholder="First Name*"
                      className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 text-left text-xs w-full"
                      wrapClassName="border border-black-900 border-solid ml-0.5 md:ml-[0] mt-[15px] w-[84%]"
                      shape="square"
                    ></Input>
                    <Input
                      name="groupSeventyFour"
                      placeholder="Last Name*"
                      className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 text-left text-xs w-full"
                      wrapClassName="border border-black-900 border-solid md:ml-[0] ml-[3px] mt-4 w-[84%]"
                      shape="square"
                    ></Input>
                    <div className="flex flex-row gap-[17px] items-center justify-end ml-36 md:ml-[0] mt-[23px] w-[68%] md:w-full">
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
                        className="bg-cover bg-no-repeat flex flex-col h-[47px] items-center justify-start p-[9px] rounded-[20px]"
                        style={{
                          backgroundImage: "url('images/img_group115.svg')",
                        }}
                      >
                        <Text
                          className="mb-0.5 text-center text-white-A700 text-xl"
                          size="txtInterExtraBold20"
                        >
                          Confirm
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto top-[19%] w-full" />
          </div>
          <Line className="absolute bg-black-900 bottom-[0] h-[436px] inset-x-[0] mx-auto w-px" />
        </div>
      </div>
    </>
  );
};

export default MainPagePaymentMethodPopUPPage;
