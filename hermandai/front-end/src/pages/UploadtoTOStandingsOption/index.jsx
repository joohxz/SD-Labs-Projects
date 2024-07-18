import React from "react";

import { Button, Img, Line, Text } from "components";

const UploadtoTOStandingsOptionPage = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-auto pb-[23px] sm:pr-5 pr-[23px] w-full">
        <div className="flex flex-col justify-start max-w-[1417px] mb-[51px] mx-auto md:px-5 w-full">
          <Img
            className="h-[34px] md:h-auto object-cover"
            src="images/img_navbarbluelogo.png"
            alt="navbarbluelogo"
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[308px] w-[51%] md:w-full">
            <Button
              className="cursor-pointer font-extrabold leading-[normal] min-w-[300px] text-center text-xl"
              shape="round"
              color="blue_200"
            >
              Generate Risk Profile
            </Button>
            <Button
              className="cursor-pointer font-extrabold leading-[normal] min-w-[300px] text-center text-xl"
              shape="round"
              color="indigo_900"
            >
              View Risk Profile
            </Button>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[285px] mt-[73px] w-[63%] md:w-full">
            <div className="bg-white-A700 md:h-[81px] h-[83px] relative rounded-[20px] shadow-bs w-full">
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
              <div className="absolute bg-white-A700 flex flex-col gap-2.5 h-full inset-[0] items-center justify-center m-auto p-[5px] rounded-[20px] shadow-bs w-full">
                <Text
                  className="mt-[21px] text-center text-indigo-900 text-xl"
                  size="txtInterExtraBold20Indigo900"
                >
                  Upload to T&O Standings
                </Text>
                <Img
                  className="h-[15px]"
                  src="images/img_group94.svg"
                  alt="polygonTwo_One"
                />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-start justify-start mt-[105px] w-[66%] md:w-full">
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] sm:mt-0 mt-[13px] text-center text-xl"
                shape="round"
                color="indigo_900"
              >
                Risk Details
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] mb-[13px] min-w-[250px] text-center text-xl"
                shape="round"
              >
                View Bow-Tie
              </Button>
            </div>
            <div className="h-[140px] md:h-[174px] md:ml-[0] ml-[51px] mt-[35px] relative w-[72%] md:w-full">
              <Line className="bg-indigo-900 h-[3px] ml-auto mr-[237px] mt-[50px] rotate-[-30deg] w-[1%]" />
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="bg-white-A700 flex flex-col gap-1.5 items-start justify-start pb-[19px] px-[19px] rounded-[20px] shadow-bs w-full">
                  <Text
                    className="text-center text-indigo-900 text-xl"
                    size="txtInterExtraBold20Indigo900"
                  >
                    Description
                  </Text>
                  <Img
                    className="h-[86px] mb-[3px]"
                    src="images/img_group98.svg"
                    alt="groupTwentyFive"
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[27px] w-[87%] md:w-full">
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] text-center text-xl"
                shape="round"
              >
                Causes
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] text-center text-xl"
                shape="round"
              >
                Effects
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[220px] mt-[43px] w-[68%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[177px] items-center justify-start w-[45%] md:w-full"
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
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[177px] items-center justify-start w-[45%] md:w-full"
                style={{ backgroundImage: "url('images/img_group98.svg')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start w-full"
                  style={{ backgroundImage: "url('images/img_group98.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start w-full"
                    style={{ backgroundImage: "url('images/img_group98.svg')" }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start py-11 w-full"
                      style={{
                        backgroundImage: "url('images/img_group98.svg')",
                      }}
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[73px] items-center justify-start md:ml-[0] ml-[65px] mt-[53px] w-3/5 md:w-full">
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] text-center text-xl"
                shape="round"
                color="indigo_900"
              >
                Risk Scoring
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] text-center text-xl"
                shape="round"
              >
                Change Rating Type
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[119px] w-full">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[177px] items-center justify-start w-[45%] md:w-full"
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
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[177px] items-center justify-start w-[45%] md:w-full"
                style={{ backgroundImage: "url('images/img_group98.svg')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start w-full"
                  style={{ backgroundImage: "url('images/img_group98.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start w-full"
                    style={{ backgroundImage: "url('images/img_group98.svg')" }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start py-11 w-full"
                      style={{
                        backgroundImage: "url('images/img_group98.svg')",
                      }}
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[73px] items-center justify-start md:ml-[0] ml-[65px] mt-[141px] w-3/5 md:w-full">
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
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[108px] w-full">
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[177px] items-center justify-start w-[45%] md:w-full"
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
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[177px] items-center justify-start w-[45%] md:w-full"
                style={{ backgroundImage: "url('images/img_group98.svg')" }}
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start w-full"
                  style={{ backgroundImage: "url('images/img_group98.svg')" }}
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start w-full"
                    style={{ backgroundImage: "url('images/img_group98.svg')" }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[177px] items-center justify-start py-11 w-full"
                      style={{
                        backgroundImage: "url('images/img_group98.svg')",
                      }}
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-11 w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] md:ml-[0] ml-[388px] mt-[88px] text-center text-xl"
              shape="round"
            >
              View Heat Map
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadtoTOStandingsOptionPage;
