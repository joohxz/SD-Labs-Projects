import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const WebappFivePage = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-center justify-end mx-auto py-[15px] w-full">
        <div className="bg-white-A700 flex flex-col h-[3159px] md:h-auto items-start justify-start max-w-[1441px] mt-[77px] p-2.5 w-full">
          <div className="flex flex-col justify-start max-w-[1431px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-2.5 w-full">
              <Img
                className="sm:flex-1 h-[75px] md:h-auto mb-[31px] sm:mt-0 mt-4 object-cover w-[6%] sm:w-full"
                src="images/img_image20.png"
                alt="imageTwenty"
              />
              <Img
                className="md:flex-1 h-12 sm:h-auto sm:mt-0 mt-8 object-cover w-[21%] md:w-full"
                src="images/img_image33.png"
                alt="imageThirtyThree"
              />
              <Text
                className="sm:mt-0 mt-3.5 text-indigo-900 text-xl"
                size="txtInterSemiBold20Indigo900"
              >
                Product
              </Text>
              <Text
                className="sm:ml-[0] ml-[19px] sm:mt-0 mt-3.5 text-indigo-900 text-xl"
                size="txtInterSemiBold20Indigo900"
              >
                T&O Standings
              </Text>
              <Text
                className="sm:ml-[0] ml-[17px] sm:mt-0 mt-3.5 text-indigo-900 text-xl"
                size="txtInterSemiBold20Indigo900"
              >
                Learn
              </Text>
              <Text
                className="sm:ml-[0] ml-[23px] sm:mt-0 mt-4 text-indigo-900 text-xl"
                size="txtInterSemiBold20Indigo900"
              >
                Support
              </Text>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] mb-[67px] min-w-[140px] sm:ml-[0] ml-[452px] sm:mt-0 mt-[15px] shadow-bs1 text-center text-xl"
                shape="round"
                size="sm"
              >
                My account
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[92px] items-center justify-center md:ml-[0] ml-[361px] mt-[214px] w-[49%] md:w-full">
              <Input
                name="groupbuttonview"
                placeholder="Generate Risk Profile"
                className="font-extrabold leading-[normal] p-0 placeholder:text-white-A700 text-center text-xl w-full"
                wrapClassName="w-[44%] md:w-full"
                shape="round"
                color="indigo_900"
                size="md"
              ></Input>
              <Text
                className="bg-blue-200 h-[60px] justify-center pb-5 pt-3.5 sm:px-5 px-[35px] rounded-[20px] text-center text-shadow-ts text-white-A700 text-xl w-[300px]"
                size="txtInterExtraBold20"
              >
                View Risk Profile
              </Text>
            </div>
            <div className="bg-white-A700 flex md:h-[154px] h-[83px] justify-end md:ml-[0] ml-[304px] mr-[243px] mt-[72px] relative rounded-[20px] shadow-bs w-[62%] md:w-full">
              <Text
                className="absolute h-max inset-y-[0] left-[42%] my-auto text-center text-indigo-900 text-xl"
                size="txtInterExtraBold20Indigo900"
              >
                Step 1
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start mb-[5px] ml-auto mr-[53px] mt-auto w-[3%]"
                style={{ backgroundImage: "url('images/img_group94.svg')" }}
              >
                <Img
                  className="h-[15px]"
                  src="images/img_group94.svg"
                  alt="polygonThree"
                />
              </div>
              <div className="absolute bg-white-A700 flex flex-col gap-[9px] h-full inset-[0] justify-center m-auto p-[5px] rounded-[20px] shadow-bs w-full">
                <Text
                  className="md:ml-[0] ml-[370px] mr-[443px] mt-[23px] text-center text-indigo-900 text-xl"
                  size="txtInterExtraBold20Indigo900"
                >
                  Step 1
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start md:ml-[0] ml-[808px] mr-12 w-[3%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group94.svg')" }}
                >
                  <Img
                    className="h-[15px]"
                    src="images/img_group94.svg"
                    alt="polygonThree_One"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start md:ml-[0] ml-[353px] mt-[70px] w-[66%] md:w-full">
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[300px] mr-[633px] text-center text-xl"
                shape="round"
                color="indigo_900"
              >
                Select Action Type
              </Button>
              <Text
                className="bg-white-A700 h-[60px] justify-center ml-72 md:ml-[0] mr-[395px] mt-6 pb-[11px] pt-[23px] sm:px-5 px-[35px] rounded-[20px] text-center text-indigo-900 text-shadow-ts text-xl w-[250px]"
                size="txtInterExtraBold20Indigo900"
              >
                Global
              </Text>
              <Text
                className="bg-white-A700 h-[60px] justify-center ml-72 md:ml-[0] mr-[395px] mt-[22px] pb-[15px] pt-[19px] sm:px-5 px-[35px] rounded-[20px] text-center text-indigo-900 text-shadow-ts text-xl w-[250px]"
                size="txtInterExtraBold20Indigo900"
              >
                Region
              </Text>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[300px] mr-[633px] mt-[47px] text-center text-xl"
                shape="round"
                color="indigo_900"
              >
                Industries
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[250px] md:ml-[0] ml-[286px] mr-[397px] mt-5 text-center text-xl"
                shape="round"
              >
                Oil & Gas
              </Button>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[286px] mt-[27px] w-[70%] md:w-full">
                <div className="md:h-[120px] h-[61px] mb-[60px] relative w-[39%] sm:w-full">
                  <div className="absolute bg-white-A700 h-[60px] inset-[0] justify-center m-auto rounded-[20px] shadow-bs w-full"></div>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-center text-indigo-900 text-xl top-[0] w-max"
                    size="txtInterExtraBold20Indigo900"
                  >
                    Insurance
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-extrabold leading-[normal] min-w-[193px] sm:mt-0 mt-[61px] text-center text-xl"
                  shape="round"
                  color="indigo_900"
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-start md:ml-[0] ml-[266px] mt-[38px] w-[62%] md:w-full">
              <div className="bg-white-A700 flex flex-col gap-[9px] items-center justify-end p-1.5 rounded-[20px] shadow-bs w-full">
                <Text
                  className="mt-[21px] text-center text-indigo-900 text-xl"
                  size="txtInterExtraBold20Indigo900"
                >
                  Step 2
                </Text>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start w-[3%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group94.svg')" }}
                >
                  <Img
                    className="h-[15px]"
                    src="images/img_group94.svg"
                    alt="polygonThree_Two"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[87px] mt-[100px] w-[79%] md:w-full">
                <div className="bg-indigo-900 flex flex-col items-center justify-start md:mt-0 mt-[3px] p-3.5 rounded-[20px] shadow-bs">
                  <div className="h-[25px] md:h-[30px] mb-[5px] relative w-[29%]">
                    <Text
                      className="m-auto text-center text-white-A700 text-xl"
                      size="txtInterExtraBold20"
                    >
                      Threats
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xl w-max"
                      size="txtInterExtraBold20"
                    >
                      Threats
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-extrabold leading-[normal] mb-[3px] min-w-[300px] text-center text-xl"
                  shape="round"
                  color="blue_200"
                >
                  Opportunities
                </Button>
              </div>
              <div className="bg-white-A700 md:h-44 h-[257px] md:ml-[0] ml-[99px] mr-[125px] mt-[18px] p-[41px] md:px-10 sm:px-5 relative rounded-[20px] shadow-bs w-3/4 md:w-full">
                <Text
                  className="mt-[65px] mx-auto text-center text-indigo-900 text-xl"
                  size="txtInterExtraBold20Indigo900"
                >
                  Region
                </Text>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[17%] flex flex-col h-[158px] inset-x-[0] items-center justify-start mx-auto w-[85%]"
                  style={{ backgroundImage: "url('images/img_group98.svg')" }}
                >
                  <Img
                    className="h-[158px]"
                    src="images/img_group98.svg"
                    alt="groupSixtySeven"
                  />
                </div>
              </div>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[100px] md:ml-[0] ml-[655px] mr-[132px] mt-[53px] text-[15px] text-center"
                shape="round"
                color="indigo_900"
                size="sm"
              >
                Send
              </Button>
              <div className="flex md:h-24 sm:h-[162px] h-[83px] justify-end mr-[3px] mt-[13px] relative w-full">
                <div className="flex flex-col h-full items-center justify-start mb-3.5 ml-auto mr-[155px] mt-auto">
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtInterExtraBold20"
                  >
                    Next
                  </Text>
                </div>
                <div className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto p-1.5 rounded-[20px] shadow-bs w-full">
                  <Text
                    className="mb-6 sm:mt-0 mt-[21px] text-center text-indigo-900 text-xl"
                    size="txtInterExtraBold20Indigo900"
                  >
                    Step 3
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-2 sm:ml-[0] ml-[219px] sm:mt-0 mt-[37px]">
                    <Text
                      className="text-center text-white-A700 text-xl"
                      size="txtInterExtraBold20"
                    >
                      Next
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[15px] items-center justify-start sm:ml-[0] ml-[107px] mr-6 sm:mt-0 mt-14 w-[3%] sm:w-full"
                    style={{ backgroundImage: "url('images/img_group94.svg')" }}
                  >
                    <Img
                      className="h-[15px]"
                      src="images/img_group94.svg"
                      alt="polygonThree_Three"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900 md:h-[146px] h-[60px] md:ml-[0] ml-[269px] mr-[318px] mt-[87px] relative rounded-[20px] shadow-bs w-[34%]">
                <Text
                  className="mt-4 mx-auto text-center text-white-A700 text-xl"
                  size="txtInterExtraBold20"
                >
                  Select Rating Type
                </Text>
                <div className="absolute bg-indigo-900 flex flex-col h-full inset-[0] items-center justify-center m-auto p-4 rounded-[20px] shadow-bs w-full">
                  <Text
                    className="mb-0.5 text-center text-white-A700 text-xl"
                    size="txtInterExtraBold20"
                  >
                    Select Rating Type
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col gap-[17px] md:ml-[0] ml-[296px] mt-[51px] w-[29%]"
                orientation="vertical"
              >
                <div className="bg-white-A700 md:h-[58px] h-[60px] relative rounded-[20px] shadow-bs w-full">
                  <Text
                    className="mt-3.5 mx-auto text-center text-indigo-900 text-xl"
                    size="txtInterExtraBold20Indigo900"
                  >
                    Qualitative = 00s
                  </Text>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[20px] shadow-bs w-full">
                    <Text
                      className="mb-[5px] text-center text-indigo-900 text-xl"
                      size="txtInterExtraBold20Indigo900"
                    >
                      Qualitative = 00s
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 md:h-[58px] h-[60px] relative rounded-[20px] shadow-bs w-full">
                  <Text
                    className="mt-3.5 mx-auto text-center text-indigo-900 text-xl"
                    size="txtInterExtraBold20Indigo900"
                  >
                    Quantitative = 000s
                  </Text>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[20px] shadow-bs w-full">
                    <Text
                      className="mb-[5px] text-center text-indigo-900 text-xl"
                      size="txtInterExtraBold20Indigo900"
                    >
                      Quantitative = 000s
                    </Text>
                  </div>
                </div>
              </List>
              <div className="bg-white-A700 md:h-[135px] h-[83px] md:ml-[0] ml-[3px] mt-[53px] relative rounded-[20px] shadow-bs w-full">
                <Img
                  className="absolute bottom-[6%] h-[15px] right-[3%]"
                  src="images/img_group94.svg"
                  alt="polygonTwo"
                />
                <Text
                  className="m-auto text-center text-indigo-900 text-xl"
                  size="txtInterExtraBold20Indigo900"
                >
                  Step 4
                </Text>
                <div className="absolute bg-white-A700 flex flex-col gap-2.5 h-full inset-[0] items-center justify-center m-auto p-[5px] rounded-[20px] shadow-bs w-full">
                  <Text
                    className="mt-[22px] text-center text-indigo-900 text-xl"
                    size="txtInterExtraBold20Indigo900"
                  >
                    Step 4
                  </Text>
                  <Img
                    className="h-[15px]"
                    src="images/img_group94.svg"
                    alt="polygonTwo_One"
                  />
                </div>
              </div>
              <div className="bg-indigo-900 md:h-28 h-[60px] md:ml-[0] ml-[271px] mr-[316px] mt-[53px] relative rounded-[20px] shadow-bs w-[34%]">
                <Text
                  className="mt-4 mx-auto text-center text-white-A700 text-xl"
                  size="txtInterExtraBold20"
                >
                  Select Action Type
                </Text>
                <div className="absolute bg-indigo-900 flex flex-col h-full inset-[0] items-center justify-center m-auto p-4 rounded-[20px] shadow-bs w-full">
                  <Text
                    className="mb-0.5 text-center text-white-A700 text-xl"
                    size="txtInterExtraBold20"
                  >
                    Select Action Type
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col gap-[17px] md:ml-[0] ml-[296px] mt-[17px] w-[29%]"
                orientation="vertical"
              >
                <div className="bg-white-A700 md:h-[58px] h-[60px] relative rounded-[20px] shadow-bs w-full">
                  <Text
                    className="mt-3.5 mx-auto text-center text-indigo-900 text-xl"
                    size="txtInterExtraBold20Indigo900"
                  >
                    Treat
                  </Text>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[20px] shadow-bs w-full">
                    <Text
                      className="mb-[5px] text-center text-indigo-900 text-xl"
                      size="txtInterExtraBold20Indigo900"
                    >
                      Treat
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 md:h-[58px] h-[60px] relative rounded-[20px] shadow-bs w-full">
                  <Text
                    className="mt-3.5 mx-auto text-center text-indigo-900 text-xl"
                    size="txtInterExtraBold20Indigo900"
                  >
                    Tolerate
                  </Text>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[20px] shadow-bs w-full">
                    <Text
                      className="mb-[5px] text-center text-indigo-900 text-xl"
                      size="txtInterExtraBold20Indigo900"
                    >
                      Tolerate
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 md:h-[59px] h-[60px] relative rounded-[20px] shadow-bs w-full">
                  <Text
                    className="mt-3.5 mx-auto text-center text-indigo-900 text-xl"
                    size="txtInterExtraBold20Indigo900"
                  >
                    Terminate
                  </Text>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[20px] shadow-bs w-full">
                    <Text
                      className="mb-1.5 text-center text-indigo-900 text-xl"
                      size="txtInterExtraBold20Indigo900"
                    >
                      Terminate
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 md:h-[59px] h-[60px] relative rounded-[20px] shadow-bs w-full">
                  <Text
                    className="mt-3.5 mx-auto text-center text-indigo-900 text-xl"
                    size="txtInterExtraBold20Indigo900"
                  >
                    Transfer
                  </Text>
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 rounded-[20px] shadow-bs w-full">
                    <Text
                      className="mb-1.5 text-center text-indigo-900 text-xl"
                      size="txtInterExtraBold20Indigo900"
                    >
                      Transfer
                    </Text>
                  </div>
                </div>
              </List>
              <div className="bg-white-A700 md:h-[134px] h-[83px] md:ml-[0] ml-[3px] mt-[53px] relative rounded-[20px] shadow-bs w-full">
                <Img
                  className="absolute bottom-[6%] h-[15px] right-[3%]"
                  src="images/img_group94.svg"
                  alt="polygonTwo_Two"
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
                    Generate Risk Profile
                  </Text>
                  <Img
                    className="h-[15px]"
                    src="images/img_group94.svg"
                    alt="polygonTwo_Three"
                  />
                </div>
              </div>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[300px] md:ml-[0] ml-[271px] mr-[316px] mt-[53px] text-center text-xl"
                shape="round"
                color="indigo_900"
              >
                Submit
              </Button>
              <div className="flex flex-row gap-[7px] items-start justify-start md:ml-[0] ml-[336px] mt-[9px] w-[19%] md:w-full">
                <div className="bg-indigo-500 md:h-3 h-3.5 mb-[5px] p-0.5 relative shadow-bs w-[15px]">
                  <Line className="absolute bg-indigo-900 bottom-[29%] h-px left-[14%] rotate-[-34deg] w-0.5" />
                  <Line className="absolute bg-indigo-900 h-[3px] inset-x-[0] mx-auto rotate-[-130deg] top-[14%] w-1.5" />
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
        </div>
        <footer className="bg-indigo-900 flex font-lato items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center mb-[27px] mr-0.5 mt-[51px] w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <ul className="flex flex-col items-end justify-start w-[95%] md:w-full common-column-list">
                <li>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[88px] items-start justify-start mr-[121px]">
                    <Img
                      className="h-[70px] sm:h-auto object-cover w-[8%] md:w-full"
                      src="images/img_image13.png"
                      alt="imageThirteen"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start md:mt-0 mt-1.5 w-[86%] md:w-full">
                      <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[90%] md:w-full common-column-list">
                        <li>
                          <Text
                            className="md:mt-0 mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 uppercase"
                            size="txtLatoSemiBold25"
                          >
                            Legal{" "}
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mb-[3px] md:ml-[0] ml-[155px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 uppercase"
                            size="txtLatoSemiBold25"
                          >
                            About us
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mb-[3px] md:ml-[0] ml-[101px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 uppercase"
                            size="txtLatoSemiBold25"
                          >
                            COSTUMER SERVICES
                          </Text>
                        </li>
                        <li>
                          <Text
                            className="mb-[3px] ml-14 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 uppercase"
                            size="txtLatoSemiBold25"
                          >
                            SOCIAL MEDIA
                          </Text>
                        </li>
                      </ul>
                      <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-end w-full">
                        <Text
                          className="md:mt-0 mt-[5px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtInterRegular22"
                        >
                          Terms
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[167px] md:mt-0 mt-1 text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtInterRegular22"
                        >
                          Who we are
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[101px] md:mt-0 mt-[5px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtInterRegular22"
                        >
                          How It Works
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-[11px] items-start justify-center md:ml-[0] ml-[164px] pb-0.5 px-0.5 w-[29%] md:w-full">
                          <Img
                            className="h-[37px] ml-[59px]"
                            src="images/img_facebook.svg"
                            alt="facebook"
                          />
                          <Img
                            className="h-[37px]"
                            src="images/img_info.svg"
                            alt="info"
                          />
                          <Img
                            className="h-[37px]"
                            src="images/img_link.svg"
                            alt="link"
                          />
                          <Img
                            className="h-[37px] mr-[45px]"
                            src="images/img_trash.svg"
                            alt="trash"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex md:flex-col flex-row font-inter md:gap-10 gap-[188px] items-start justify-end">
                    <ul className="flex flex-col gap-[7px] items-start justify-start w-[56%] md:w-full common-column-list">
                      <li>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0]">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtInterRegular22"
                          >
                            Privacy
                          </Text>
                          <Text
                            className="mb-0.5 sm:ml-[0] ml-[151px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtInterRegular22"
                          >
                            Newsroom
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[115px] sm:mt-0 mt-0.5 text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtInterRegular22"
                          >
                            Help Centre
                          </Text>
                        </div>
                      </li>
                      <li>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtInterRegular22"
                          >
                            Cookie Policy
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[90px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtInterRegular22"
                          >
                            Our Venues
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[106px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtInterRegular22"
                          >
                            User Tips
                          </Text>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-row gap-[53px] items-center justify-start">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtInterRegular22"
                          >
                            Code of Conduct
                          </Text>
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtInterRegular22"
                          >
                            Escrow
                          </Text>
                        </div>
                      </li>
                    </ul>
                    <div className="flex flex-col gap-[5px] items-start justify-start md:mt-0 mt-[27px]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 uppercase"
                        size="txtLatoSemiBold25"
                      >
                        NEWSLETTER
                      </Text>
                      <Text
                        className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                        size="txtInterExtraLight22"
                      >
                        <span className="text-white-A700 font-inter text-left font-thin">
                          Subscribe{" "}
                        </span>
                        <span className="text-white-A700 font-inter text-left font-thin">
                          to
                        </span>
                        <span className="text-white-A700 font-inter text-left font-thin">
                          {" "}
                        </span>
                        <span className="text-white-A700 font-inter text-left font-thin">
                          our n
                        </span>
                        <span className="text-white-A700 font-inter text-left font-thin">
                          ewsletter
                        </span>
                        <span className="text-white-A700 font-inter text-left font-thin">
                          :
                        </span>
                      </Text>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row font-lato gap-[13px] items-center justify-end mt-[3px]">
                    <Input
                      name="groupNinetyOne"
                      placeholder="Enter your email"
                      className="font-semibold leading-[normal] p-0 placeholder:text-gray-500 text-left text-lg w-full"
                      wrapClassName="rounded-lg w-[57%]"
                      size="md"
                    ></Input>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[144px] rounded-lg text-center text-lg"
                      color="gray_100"
                      size="sm"
                    >
                      Subscribe
                    </Button>
                  </div>
                </li>
              </ul>
              <Line className="bg-white-A700 h-px mt-[35px] w-full" />
              <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-between mt-[27px] w-[95%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterExtraLight22"
                >
                  Home / Sign Up / Terms / Privacy Setting / Language Selection
                </Text>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterExtraLight20"
                >
                  Copyright © Hazor Group | All Rights Reserved
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WebappFivePage;
