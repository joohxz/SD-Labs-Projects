import React from "react";

import { Button, Img, Line, List, Text } from "components";

const WebappSixPage = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto pr-1.5 py-1.5 w-full">
        <div className="flex flex-col justify-start max-w-[1440px] mb-[102px] mt-[11px] mx-auto md:px-5 w-full">
          <header className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col md:gap-10 gap-[78px] items-center justify-center md:ml-[0] ml-[43px] mr-7 mt-[62px] w-[96%]">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Img
                  className="sm:flex-1 h-[63px] md:h-auto sm:mt-0 mt-1 object-cover w-[6%] sm:w-full"
                  src="images/img_image20.png"
                  alt="imageTwenty"
                />
                <Img
                  className="md:flex-1 h-[50px] sm:h-auto sm:mt-0 mt-[7px] object-cover w-[22%] md:w-full"
                  src="images/img_image33.png"
                  alt="imageThirtyFour"
                />
                <Text
                  className="ml-0.5 sm:ml-[0] sm:mt-0 mt-3 text-indigo-900_01 text-xl"
                  size="txtInterSemiBold20Indigo90001"
                >
                  Product
                </Text>
                <Text
                  className="sm:ml-[0] ml-[17px] sm:mt-0 mt-[15px] text-indigo-900_01 text-xl"
                  size="txtInterSemiBold20Indigo90001"
                >
                  T&O Standings
                </Text>
                <Text
                  className="sm:ml-[0] ml-[21px] sm:mt-0 mt-3 text-indigo-900_01 text-xl"
                  size="txtInterSemiBold20Indigo90001"
                >
                  Learn
                </Text>
                <Text
                  className="ml-6 sm:ml-[0] sm:mt-0 mt-3.5 text-indigo-900_01 text-xl"
                  size="txtInterSemiBold20Indigo90001"
                >
                  Support
                </Text>
                <Button
                  className="cursor-pointer font-extrabold leading-[normal] mb-[27px] min-w-[140px] sm:ml-[0] ml-[436px] shadow-bs1 text-center text-xl"
                  shape="round"
                  size="sm"
                >
                  My account
                </Button>
              </div>
              <Line className="bg-blue_gray-100 h-px w-[96%]" />
            </div>
          </header>
          <div className="bg-white-A700 md:h-[232px] h-[83px] md:ml-[0] ml-[275px] mr-[281px] mt-[151px] relative rounded-[20px] shadow-bs w-[62%] md:w-full">
            <Img
              className="absolute bottom-[6%] h-[15px] right-[3%]"
              src="images/img_group94.svg"
              alt="polygonTwo"
            />
            <Text
              className="m-auto text-center text-indigo-900 text-xl"
              size="txtInterExtraBold20Indigo900"
            >
              Step 5
            </Text>
            <div className="absolute bg-white-A700 flex flex-col gap-3 h-full inset-[0] items-center justify-center m-auto p-[5px] rounded-[20px] shadow-bs w-full">
              <Text
                className="mt-[19px] text-center text-indigo-900 text-xl"
                size="txtInterExtraBold20Indigo900"
              >
                Download Risk Profile
              </Text>
              <Img
                className="h-[15px]"
                src="images/img_group94.svg"
                alt="polygonTwo_One"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[299px] mt-[108px] w-[52%] md:w-full">
            <Button
              className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] text-center text-xl"
              shape="round"
              color="indigo_900"
            >
              Risk Details
            </Button>
            <div className="bg-white-A700 flex flex-col gap-1.5 justify-start md:ml-[0] ml-[49px] mt-[21px] pb-[21px] sm:px-5 px-[21px] rounded-[20px] shadow-bs w-[94%] md:w-full">
              <Text
                className="md:ml-[0] ml-[5px] text-center text-indigo-900 text-xl"
                size="txtInterExtraBold20Indigo900"
              >
                Description
              </Text>
              <Img
                className="h-[86px] mr-3"
                src="images/img_group98.svg"
                alt="groupTwentyFive"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-11 w-full">
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] sm:mt-0 mt-1 text-center text-xl"
                shape="round"
              >
                Causes
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] mb-1 min-w-[250px] text-center text-xl"
                shape="round"
              >
                Effects
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[236px] mt-10 w-[67%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start w-[45%] md:w-full"
              style={{ backgroundImage: "url('images/img_group98.svg')" }}
            >
              <Img
                className="h-[177px]"
                src="images/img_group69.svg"
                alt="groupSixtyNine"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[60px] mt-[53px] w-[90%] md:w-full">
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] md:mt-0 mt-[3px] text-center text-xl"
                shape="round"
                color="indigo_900"
              >
                Risk Scoring
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] md:mt-0 mt-[3px] text-center text-xl"
                shape="round"
              >
                Change Rating Type
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] mb-[3px] min-w-[250px] text-center text-xl"
                shape="round"
              >
                View Heat Map
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[101px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[149px] w-full"
              orientation="horizontal"
            >
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[177px] items-center justify-start py-11 w-full"
                style={{ backgroundImage: "url('images/img_group98.svg')" }}
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                  <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-1 flex-col h-[177px] items-center justify-start py-11 w-full"
                style={{ backgroundImage: "url('images/img_group98.svg')" }}
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                  <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                </div>
              </div>
            </List>
            <div className="flex sm:flex-col flex-row gap-[52px] items-center justify-start md:ml-[0] ml-[60px] mt-[114px] w-[58%] md:w-full">
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] text-center text-xl"
                shape="round"
                color="indigo_900"
              >
                Risk Mitigation
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] text-center text-xl"
                shape="round"
              >
                Change Action Type
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[43px] w-full">
              <div className="bg-white-A700 border border-black-900 border-solid flex md:flex-1 flex-col items-center justify-start py-11 w-[45%] md:w-full">
                <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
              </div>
              <Line className="bg-indigo-900 h-[3px] mb-[106px] md:ml-[0] ml-[78px] md:mt-0 mt-[59px] rotate-[-119deg] w-[1%]" />
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[177px] items-center justify-start ml-4 md:ml-[0] w-[45%] md:w-full"
                style={{ backgroundImage: "url('images/img_group98.svg')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start py-11 w-full"
                  style={{ backgroundImage: "url('images/img_group98.svg')" }}
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                    <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] md:ml-[0] ml-[362px] mt-14 text-center text-xl"
              shape="round"
            >
              View Bow-Tie
            </Button>
          </div>
          <Img
            className="h-[539px] md:ml-[0] ml-[137px] mt-12"
            src="images/img_group98.svg"
            alt="groupSixtySix"
          />
          <Button
            className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] md:ml-[0] ml-[568px] mr-[622px] mt-[47px] text-center text-xl"
            shape="round"
            color="indigo_900"
          >
            Download
          </Button>
          <div className="flex flex-row gap-[7px] items-start justify-center md:ml-[0] ml-[612px] mt-5 w-[12%] md:w-full">
            <div className="bg-indigo-500 flex flex-col items-start justify-end mb-[5px] shadow-bs w-[15px]">
              <Line className="bg-indigo-900 h-[3px] mt-2 rotate-[-30deg] w-[34%]" />
            </div>
            <Text
              className="text-[15px] text-indigo-900"
              size="txtInterExtraBold15"
            >
              Send copy to email
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebappSixPage;
