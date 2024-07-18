import React from "react";

import { Button, Img, Line, List, Switch, Text } from "components";

const Webapp4TOPagePage = () => {
  return (
    <>
      <div className="bg-indigo-900 flex flex-col font-inter items-center justify-start mx-auto pb-[116px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[704px] items-center justify-start py-2.5 w-full"
            style={{ backgroundImage: "url('images/img_group28.svg')" }}
          >
            <div className="flex flex-col justify-start mb-[127px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pb-[22px] sm:px-5 px-[22px] w-full">
                <div className="flex mb-[60px] md:px-5 relative w-[30%] md:w-full">
                  <div className="md:h-[108px] h-[98px] my-auto w-[85%]">
                    <Img
                      className="absolute h-[41px] left-[0] object-cover top-[20%] w-[17%]"
                      src="images/img_image13.png"
                      alt="imageEighteen"
                    />
                    <Img
                      className="absolute h-[108px] object-cover right-[0] top-[0] w-[89%]"
                      src="images/img_image11.png"
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
              <div className="h-[84px] md:h-[85px] md:ml-[0] ml-[371px] mt-8 p-[11px] md:px-5 relative w-[47%] md:w-full">
                <div className="bg-white-A700 border-2 border-indigo-500 border-solid h-[53px] mx-auto rounded-[20px] w-[93%]"></div>
                <div className="absolute flex flex-row sm:gap-10 items-center justify-between right-[4%] top-[18%] w-[88%]">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-100"
                    size="txtInterExtraLight30"
                  >
                    search
                  </Text>
                  <Img
                    className="h-[35px] w-[35px]"
                    src="images/img_rewind.svg"
                    alt="rewind"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[173px] mt-[55px] md:px-5 w-[72%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[74%] md:w-full">
                    <Text
                      className="mb-0.5 sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                      size="txtInterExtraBold35"
                    >
                      Threats
                    </Text>
                    <Text
                      className="sm:mt-0 mt-0.5 sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                      size="txtInterExtraBold35"
                    >
                      Opportunities
                    </Text>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[26px] w-[73%] md:w-full">
                    <Text
                      className="mb-1 sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                      size="txtInterExtraBold35"
                    >
                      Global
                    </Text>
                    <Text
                      className="mt-1 sm:text-[31px] md:text-[33px] text-[35px] text-indigo-900"
                      size="txtInterExtraBold35"
                    >
                      Select Region
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[43px] w-full">
                    <List
                      className="sm:flex-col flex-row gap-[13px] grid grid-cols-2"
                      orientation="horizontal"
                    >
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[42px] items-center justify-start sm:ml-[0] p-[7px] rounded-[20px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group37.svg')",
                        }}
                      >
                        <Text
                          className="mb-0.5 text-indigo-900 text-xl"
                          size="txtInterExtraBold20Indigo900"
                        >
                          Sector 1
                        </Text>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[42px] items-end justify-start sm:ml-[0] p-[7px] rounded-[20px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group38.svg')",
                        }}
                      >
                        <Text
                          className="mb-0.5 mr-[15px] text-indigo-900 text-xl"
                          size="txtInterExtraBold20Indigo900"
                        >
                          Sector 2
                        </Text>
                      </div>
                    </List>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[42px] items-end justify-start p-[7px] rounded-[20px]"
                      style={{
                        backgroundImage: "url('images/img_group39.svg')",
                      }}
                    >
                      <Text
                        className="mb-0.5 mr-3.5 text-indigo-900 text-xl"
                        size="txtInterExtraBold20Indigo900"
                      >
                        Sector 3
                      </Text>
                    </div>
                    <div className="h-[42px] relative w-[14%] md:w-full">
                      <Text
                        className="ml-[5px] mt-[7px] text-black-900 text-xl"
                        size="txtInterRegular20"
                      >
                        Sector 2
                      </Text>
                      <Button
                        className="absolute cursor-pointer font-extrabold h-full inset-[0] justify-center leading-[normal] m-auto min-w-[140px] text-center text-xl"
                        shape="round"
                        size="sm"
                      >
                        Sector 4
                      </Button>
                    </div>
                    <Button
                      className="cursor-pointer font-extrabold leading-[normal] min-w-[140px] text-center text-xl"
                      shape="round"
                      size="sm"
                    >
                      Sector 5
                    </Button>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[42px] items-center justify-start p-[7px] rounded-[20px]"
                      style={{
                        backgroundImage: "url('images/img_group38.svg')",
                      }}
                    >
                      <Text
                        className="mb-0.5 text-center text-indigo-900 text-xl"
                        size="txtInterExtraBold20Indigo900"
                      >
                        Sector 6
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-extrabold leading-[normal] min-w-[140px] text-center text-xl"
                      shape="round"
                      size="sm"
                    >
                      All Sector{" "}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1400px] sm:h-[2811px] md:h-[3571px] md:px-5 relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[626px] relative w-full">
                  <div className="h-[626px] m-auto w-full">
                    <div className="h-[626px] m-auto w-full">
                      <Img
                        className="h-[626px] m-auto object-cover w-full"
                        src="images/img_imagelondonopenstreetmap.png"
                        alt="imagelondonopen"
                      />
                      <div className="absolute bg-white-A700 bottom-[12%] flex flex-col items-end justify-start p-[9px] right-[3%] rounded-[17px] w-[3%]">
                        <Line className="bg-black-900 h-3 mr-[3px] rotate-[90deg] w-0.5" />
                        <div className="flex flex-col gap-[23px] items-center justify-start mb-1.5 w-[71%] md:w-full">
                          <Line className="bg-black-900 h-0.5 w-full" />
                          <Line className="bg-black-900 h-0.5 w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[5%] flex flex-col gap-11 justify-start right-[1%] w-[15%]">
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[92px] w-[57%] md:w-full">
                        <div className="flex flex-col justify-start w-full">
                          <Text
                            className="md:ml-[0] ml-[5px] text-[10px] text-white-A700"
                            size="txtInterRegular10"
                          >
                            Total Users risk
                          </Text>
                          <div className="bg-white-A700 border border-indigo-900 border-solid md:h-[43px] h-[46px] relative w-full">
                            <div className="absolute bg-indigo-900 h-3.5 inset-x-[0] mx-auto top-[0] w-[98%]"></div>
                            <div className="absolute flex flex-col items-end justify-start left-[2%] top-[0]">
                              <Text
                                className="text-[10px] text-white-A700"
                                size="txtInterRegular10"
                              >
                                Total Users risk
                              </Text>
                              <Text
                                className="mt-[3px] text-indigo-900 text-xl"
                                size="txtInterRegular20Indigo900"
                              >
                                435
                              </Text>
                            </div>
                            <div className="absolute bg-white-A700 border border-indigo-900 border-solid flex flex-col h-full inset-[0] justify-center m-auto w-full">
                              <div className="h-3.5 relative w-[98%]">
                                <div className="absolute bg-indigo-900 h-3.5 inset-[0] justify-center m-auto w-full"></div>
                                <Text
                                  className="absolute left-[0] text-[10px] text-white-A700 top-[0]"
                                  size="txtInterRegular10"
                                >
                                  Total Users risk
                                </Text>
                              </div>
                              <Text
                                className="ml-8 md:ml-[0] my-0.5 text-indigo-900 text-xl"
                                size="txtInterRegular20Indigo900"
                              >
                                435
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 border border-indigo-900 border-solid h-[46px] md:h-[59px] mt-4 relative w-full">
                          <div className="absolute bg-indigo-900 h-3.5 inset-x-[0] mx-auto top-[0] w-[98%]"></div>
                          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0]">
                            <Text
                              className="text-[10px] text-white-A700"
                              size="txtInterRegular10"
                            >
                              Total Users Comments
                            </Text>
                            <Text
                              className="mt-[3px] text-indigo-900 text-xl"
                              size="txtInterRegular20Indigo900"
                            >
                              435
                            </Text>
                          </div>
                          <div className="absolute bg-white-A700 border border-indigo-900 border-solid flex flex-col h-full inset-[0] justify-center m-auto w-full">
                            <div className="h-3.5 relative w-[98%]">
                              <div className="absolute bg-indigo-900 h-3.5 inset-[0] justify-center m-auto w-full"></div>
                              <Text
                                className="absolute inset-x-[0] mx-auto text-[10px] text-white-A700 top-[0] w-max"
                                size="txtInterRegular10"
                              >
                                Total Users Comments
                              </Text>
                            </div>
                            <Text
                              className="ml-8 md:ml-[0] my-0.5 text-indigo-900 text-xl"
                              size="txtInterRegular20Indigo900"
                            >
                              435
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 border border-indigo-900 border-solid flex flex-col justify-start mt-4 w-full">
                          <div className="bg-indigo-900 h-3.5 w-[98%]"></div>
                          <div className="h-[25px] md:h-[29px] md:ml-[0] ml-[33px] my-0.5 relative w-[32%]">
                            <Text
                              className="m-auto text-indigo-900 text-xl"
                              size="txtInterRegular20Indigo900"
                            >
                              435
                            </Text>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-indigo-900 text-xl w-max"
                              size="txtInterRegular20Indigo900"
                            >
                              435
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col h-[37px] items-center justify-start md:ml-[0] ml-[50px] mt-[200px] p-[7px] rounded-[18px] w-[37px]">
                          <Switch
                            onColor="#ffffff"
                            offColor="#ffffff"
                            onHandleColor="#000000"
                            offHandleColor="#000000"
                            value={false}
                            className="border-2 border-black-900 border-solid w-[22px]"
                          />
                        </div>
                        <Line className="bg-black-900 h-px md:ml-[0] ml-[51px] mt-[42px] w-[29%]" />
                      </div>
                      <div className="bg-white-A700 h-7 mr-[109px] rounded-[14px] w-[49%]"></div>
                    </div>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[9%] w-[96%]">
                    <div className="h-[406px] relative w-[23%] sm:w-full">
                      <div className="absolute flex flex-col gap-[33px] h-full inset-[0] items-center justify-center m-auto w-full">
                        <div className="bg-white-A700 border-2 border-indigo-900 border-solid flex flex-col gap-[9px] items-center justify-start p-0.5 w-full">
                          <div className="bg-indigo-900 h-[66px] w-full"></div>
                          <Text
                            className="mb-[27px] md:text-5xl text-[150px] text-black-900 text-shadow-ts"
                            size="txtInterBold150"
                          >
                            999
                          </Text>
                        </div>
                        <Text
                          className="bg-white-A700 border-2 border-indigo-900 border-solid h-[85px] justify-center pb-[11px] pt-5 sm:px-5 px-[35px] rounded-[20px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 w-[317px]"
                          size="txtInterBold45Black900"
                        >
                          All
                        </Text>
                      </div>
                      <Text
                        className="absolute inset-x-[0] mx-auto sm:text-[41px] md:text-[47px] text-[55px] text-white-A700 top-[0] w-max"
                        size="txtInterBold55"
                      >
                        Total Risks
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[53px] justify-start sm:mt-0 mt-[137px] w-[9%] sm:w-full">
                      <div className="h-[13px] md:ml-[0] ml-[13px] relative w-[65%]">
                        <Text
                          className="m-auto text-[10px] text-white-A700"
                          size="txtInterRegular10"
                        >
                          Total User Likes
                        </Text>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-[10px] text-white-A700 w-max"
                          size="txtInterRegular10"
                        >
                          Total User Likes
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-indigo-900 border-solid flex flex-col justify-start w-full">
                        <div className="bg-indigo-900 flex flex-col items-center justify-start px-[13px] w-[98%] md:w-full">
                          <div className="h-[13px] relative w-[99%]">
                            <Text
                              className="m-auto text-[10px] text-white-A700"
                              size="txtInterRegular10"
                            >
                              Total User Dislikes
                            </Text>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-[10px] text-white-A700 w-max"
                              size="txtInterRegular10"
                            >
                              Total User Dislikes
                            </Text>
                          </div>
                        </div>
                        <div className="h-[25px] md:h-[29px] md:ml-[0] ml-[33px] my-0.5 relative w-[32%]">
                          <Text
                            className="m-auto text-indigo-900 text-xl"
                            size="txtInterRegular20Indigo900"
                          >
                            435
                          </Text>
                          <Text
                            className="absolute h-full inset-[0] justify-center m-auto text-indigo-900 text-xl w-max"
                            size="txtInterRegular20Indigo900"
                          >
                            435
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-2 border-black-900 border-solid md:h-[2945px] h-[773px] relative w-[93%] md:w-full">
                  <div className="flex flex-col h-full items-start justify-start ml-12 mt-[117px] w-[21%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterRegular20WhiteA700"
                      >
                        1
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterExtraBold20"
                      >
                        Risk Title 1
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[161px] mt-1.5 text-[17px] text-white-A700"
                      size="txtInterRegular17"
                    >
                      Risk Title 1
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[55px] text-white-A700 text-xl"
                      size="txtInterRegular20WhiteA700"
                    >
                      2
                    </Text>
                  </div>
                  <div className="absolute md:h-[2945px] h-[773px] inset-[0] justify-center m-auto w-full">
                    <div className="h-[773px] m-auto w-full">
                      <div className="absolute h-[773px] inset-[0] justify-center m-auto w-full">
                        <div className="h-[773px] m-auto w-full">
                          <div className="absolute md:h-[151px] h-[152px] inset-x-[0] mx-auto top-[36%] w-full">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                              <div className="flex flex-col gap-2 items-center justify-start w-full">
                                <div className="bg-white-A700 flex flex-col items-start justify-start p-[23px] sm:px-5">
                                  <Text
                                    className="md:ml-[0] ml-[25px] text-white-A700 text-xl"
                                    size="txtInterRegular20WhiteA700"
                                  >
                                    3
                                  </Text>
                                </div>
                                <div className="bg-white-A700 h-[72px] w-[99%]"></div>
                              </div>
                            </div>
                            <div className="absolute bg-white-A700 bottom-[5%] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[23px] sm:px-5">
                              <Text
                                className="md:ml-[0] ml-[25px] text-blue-200 text-xl"
                                size="txtInterRegular20Blue200"
                              >
                                4
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bg-gray-300 border-2 border-black-900 border-solid h-[773px] inset-y-[0] my-auto right-[0] w-[3%]"></div>
                        </div>
                        <div className="absolute bg-blue-200 border-2 border-black-900 border-solid h-[121px] right-[0] top-[0] w-[3%]"></div>
                      </div>
                      <div className="absolute bg-blue-200 border-2 border-black-900 border-solid h-24 right-[0] top-[3%] w-[3%]"></div>
                      <div className="absolute bg-indigo-900 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto p-3 top-[0] w-[98%]">
                        <Text
                          className="md:ml-[0] ml-[11px] text-lg text-white-A700"
                          size="txtInterBold18"
                        >
                          Rank
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[190px] text-lg text-white-A700"
                          size="txtInterBold18"
                        >
                          Risk Title & Description
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[438px] text-lg text-white-A700"
                          size="txtInterBold18"
                        >
                          <>
                            Risk
                            <br />
                            Rating{" "}
                          </>
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[86px] md:mt-0 mt-0.5 text-lg text-white-A700"
                          size="txtInterBold18"
                        >
                          <>
                            Total UP
                            <br />
                            Votes
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-start justify-between m-auto w-[96%]">
                      <div className="flex flex-col gap-[47px] items-center justify-start md:mt-0 mt-[432px]">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtInterRegular20WhiteA700"
                        >
                          5
                        </Text>
                        <Text
                          className="text-blue-200 text-xl"
                          size="txtInterRegular20Blue200"
                        >
                          6
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] justify-start w-[90%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[1003px] text-lg text-white-A700"
                          size="txtInterBold18"
                        >
                          <span className="text-white-A700 font-inter text-left font-bold">
                            Total{" "}
                          </span>
                          <span className="text-white-A700 font-inter text-left text-[17px] font-bold">
                            <>
                              Down
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-inter text-left font-bold">
                            Down
                          </span>
                        </Text>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mr-[125px] w-[89%] md:w-full">
                          <Line className="bg-black-900 md:h-0.5 h-[671px] mb-0.5 w-0.5 md:w-full" />
                          <Line className="bg-black-900 md:h-[5px] h-[673px] md:ml-[0] ml-[719px] w-[5px] md:w-full" />
                          <Line className="bg-black-900 md:h-[5px] h-[673px] md:ml-[0] ml-[134px] w-[5px] md:w-full" />
                          <Line className="bg-black-900 md:h-[5px] h-[673px] md:ml-[0] ml-[133px] w-[5px] md:w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[90%]">
              <div className="sm:h-[1200px] h-[488px] md:h-[547px] relative w-full">
                <div className="sm:h-[1200px] md:h-[465px] h-[488px] m-auto w-full">
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="bg-indigo-900 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-0.5 shadow-bs w-full">
                            <Text
                              className="text-center text-white-A700 text-xl"
                              size="txtInterExtraBold20"
                            >
                              Rank
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[181px] text-center text-white-A700 text-xl"
                              size="txtInterExtraBold20"
                            >
                              Risk Title and Description
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[228px] text-center text-white-A700 text-xl"
                              size="txtInterExtraBold20"
                            >
                              Risk Rating
                            </Text>
                            <Text
                              className="sm:flex-1 mb-[23px] sm:ml-[0] ml-[79px] sm:mt-0 mt-4 text-center text-white-A700 text-xl w-[9%] sm:w-full"
                              size="txtInterExtraBold20"
                            >
                              Total up Votes
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[46px] text-center text-white-A700 text-xl"
                              size="txtInterExtraBold20"
                            >
                              Total down Votes
                            </Text>
                          </div>
                          <div className="bg-white-A700 border border-black-900 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-end p-3 w-full">
                            <Text
                              className="sm:mt-0 mt-[26px] text-black-900 text-center text-xl"
                              size="txtInterExtraBold20Black900"
                            >
                              1
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[65px] sm:mt-0 mt-[25px] text-black-900 text-center text-xl"
                              size="txtInterExtraBold20Black900"
                            >
                              Risk Title 1
                            </Text>
                            <Img
                              className="h-[30px] sm:ml-[0] ml-[399px] sm:mt-0 mt-[25px]"
                              src="images/img_group94.svg"
                              alt="polygonFour"
                            />
                            <Button
                              className="cursor-pointer leading-[normal] mb-8 min-w-[183px] sm:ml-[0] ml-[43px] text-center text-xl"
                              shape="square"
                              color="gray_900"
                              size="lg"
                            >
                              99%{" "}
                            </Button>
                            <Text
                              className="sm:ml-[0] ml-[71px] sm:mt-0 mt-[26px] text-black-900 text-center text-xl"
                              size="txtInterExtraBold20Black900"
                            >
                              9999
                            </Text>
                            <Text
                              className="ml-36 sm:ml-[0] mr-[60px] sm:mt-0 mt-[26px] text-black-900 text-center text-xl"
                              size="txtInterExtraBold20Black900"
                            >
                              32
                            </Text>
                          </div>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="bg-white-A700 border border-black-900 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end my-0 p-[13px] w-full">
                          <Text
                            className="sm:mt-0 mt-7 text-black-900 text-center text-xl"
                            size="txtInterExtraBold20Black900"
                          >
                            2
                          </Text>
                          <Img
                            className="h-[30px] sm:ml-[0] ml-[564px] sm:mt-0 mt-[19px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                          <Button
                            className="cursor-pointer leading-[normal] mb-0.5 min-w-[183px] sm:ml-[0] ml-[43px] text-center text-xl"
                            shape="square"
                            color="deep_orange_A700"
                            size="lg"
                          >
                            88%{" "}
                          </Button>
                          <Text
                            className="sm:ml-[0] ml-[71px] sm:mt-0 mt-[23px] text-black-900 text-center text-xl"
                            size="txtInterExtraBold20Black900"
                          >
                            8888
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[143px] mr-[58px] sm:mt-0 mt-6 text-black-900 text-center text-xl"
                            size="txtInterExtraBold20Black900"
                          >
                            45
                          </Text>
                        </div>
                        <div className="bg-white-A700 border border-black-900 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end my-0 p-2 w-full">
                          <Text
                            className="sm:mt-0 mt-[30px] text-black-900 text-center text-xl"
                            size="txtInterExtraBold20Black900"
                          >
                            3
                          </Text>
                          <Img
                            className="h-[30px] sm:ml-[0] ml-[567px] sm:mt-0 mt-7"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[183px] sm:ml-[0] ml-[41px] sm:mt-0 mt-0.5 text-center text-xl"
                            shape="square"
                            color="lime_800"
                            size="lg"
                          >
                            77%{" "}
                          </Button>
                          <Text
                            className="sm:ml-[0] ml-[73px] sm:mt-0 mt-7 text-black-900 text-center text-xl"
                            size="txtInterExtraBold20Black900"
                          >
                            7777
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[147px] mr-[63px] sm:mt-0 mt-[26px] text-black-900 text-center text-xl"
                            size="txtInterExtraBold20Black900"
                          >
                            55
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="absolute h-[465px] left-[12%] top-[0] w-[38%] sm:w-full">
                    <Text
                      className="m-auto text-[15px] text-center text-indigo-900 w-full"
                      size="txtInterRegular15"
                    >
                      Risk Title Description appear with drop down menu click
                      again to hide
                    </Text>
                    <div className="absolute bottom-[4%] flex flex-col md:gap-10 gap-[71px] items-end justify-start left-[0] w-[93%]">
                      <div className="flex flex-col md:gap-10 gap-[89px] items-center justify-start w-[71%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[132px] text-[15px] text-center"
                            shape="square"
                            color="lime_600"
                            size="sm"
                          >
                            Total Comments
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[132px] text-[15px] text-center"
                            shape="square"
                            color="light_green_A700"
                            size="sm"
                          >
                            Click to Engage
                          </Button>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[132px] text-[15px] text-center"
                            shape="square"
                            color="lime_600"
                            size="sm"
                          >
                            Total Comments
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[132px] text-[15px] text-center"
                            shape="square"
                            color="light_green_A700"
                            size="sm"
                          >
                            Click to Engage
                          </Button>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                        <Text
                          className="sm:mt-0 mt-[15px] text-black-900 text-center text-xl"
                          size="txtInterExtraBold20Black900"
                        >
                          Risk Title 3
                        </Text>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[132px] sm:ml-[0] ml-[21px] text-[15px] text-center"
                          shape="square"
                          color="lime_600"
                          size="sm"
                        >
                          Total Comments
                        </Button>
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[132px] sm:ml-[0] ml-[52px] text-[15px] text-center"
                          shape="square"
                          color="light_green_A700"
                          size="sm"
                        >
                          Click to Engage
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[167px] inset-x-[0] justify-start mx-auto top-[8%] w-[76%]">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Line className="bg-white-A700 h-[103px] md:h-px md:mt-0 mt-[5px] md:w-full w-px" />
                    <Line className="bg-white-A700 h-[103px] md:h-px mb-[5px] md:ml-[0] ml-[594px] md:w-full w-px" />
                    <Line className="bg-white-A700 h-[103px] md:h-px md:ml-[0] ml-[193px] md:mt-0 mt-1 md:w-full w-px" />
                    <Line className="bg-white-A700 h-[103px] md:h-px mb-[5px] md:ml-[0] ml-[186px] md:w-full w-px" />
                  </div>
                  <Text
                    className="ml-3.5 md:ml-[0] text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    Risk Title 2
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col gap-px items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end my-0 p-[13px] w-full">
                  <Text
                    className="sm:mt-0 mt-9 text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    4
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[63px] sm:mt-0 mt-[19px] text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    Risk Title 4
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] mb-10 min-w-[132px] sm:ml-[0] ml-[21px] text-[15px] text-center"
                    shape="square"
                    color="lime_600"
                    size="sm"
                  >
                    Total Comments
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-10 min-w-[132px] sm:ml-[0] ml-[49px] text-[15px] text-center"
                    shape="square"
                    color="light_green_A700"
                    size="sm"
                  >
                    Click to Engage
                  </Button>
                  <Img
                    className="h-[30px] sm:ml-[0] ml-[58px] sm:mt-0 mt-[19px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <Button
                    className="!text-white-A700 cursor-pointer leading-[normal] min-w-[183px] sm:ml-[0] ml-[41px] text-center text-xl"
                    shape="square"
                    color="lime_600"
                    size="lg"
                  >
                    66%{" "}
                  </Button>
                  <Text
                    className="sm:ml-[0] ml-[73px] sm:mt-0 mt-[27px] text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    6666
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[142px] mr-[58px] sm:mt-0 mt-[27px] text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    35
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end my-0 p-[9px] w-full">
                  <Text
                    className="sm:mt-0 mt-10 text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    5
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[63px] sm:mt-0 mt-4 text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    Risk Title 5
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] mb-[50px] min-w-[132px] sm:ml-[0] ml-[21px] text-[15px] text-center"
                    shape="square"
                    color="lime_600"
                    size="sm"
                  >
                    Total Comments
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-[50px] min-w-[132px] sm:ml-[0] ml-[49px] text-[15px] text-center"
                    shape="square"
                    color="light_green_A700"
                    size="sm"
                  >
                    Click to Engage
                  </Button>
                  <Img
                    className="h-[30px] sm:ml-[0] ml-[61px] sm:mt-0 mt-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[183px] ml-10 sm:ml-[0] sm:mt-0 my-1 text-center text-xl"
                    shape="square"
                    color="lime_A200"
                    size="lg"
                  >
                    55%{" "}
                  </Button>
                  <Text
                    className="sm:ml-[0] ml-[75px] sm:mt-0 mt-[31px] text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    5555
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[142px] mr-[63px] sm:mt-0 mt-[29px] text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    86
                  </Text>
                </div>
                <div className="bg-white-A700 border border-black-900 border-solid flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end my-0 p-3 w-full">
                  <Text
                    className="sm:mt-0 mt-[39px] text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    6
                  </Text>
                  <Text
                    className="ml-16 sm:ml-[0] sm:mt-0 mt-[22px] text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    Risk Title 6
                  </Text>
                  <Button
                    className="cursor-pointer leading-[normal] mb-[38px] min-w-[132px] sm:ml-[0] ml-[21px] sm:mt-0 mt-[5px] text-[15px] text-center"
                    shape="square"
                    color="lime_600_01"
                    size="sm"
                  >
                    Total Comments
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] mb-[38px] min-w-[132px] sm:ml-[0] ml-[49px] sm:mt-0 mt-[5px] text-[15px] text-center"
                    shape="square"
                    color="light_green_A700"
                    size="sm"
                  >
                    Click to Engage
                  </Button>
                  <Img
                    className="h-[30px] sm:ml-[0] ml-[55px] sm:mt-0 mt-[15px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[183px] ml-11 sm:ml-[0] sm:mt-0 mt-0.5 text-center text-xl"
                    shape="square"
                    color="light_green_A700_01"
                    size="lg"
                  >
                    44%{" "}
                  </Button>
                  <Text
                    className="sm:ml-[0] ml-[78px] sm:mt-0 mt-7 text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    4441
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[149px] mr-[62px] sm:mt-0 mt-7 text-black-900 text-center text-xl"
                    size="txtInterExtraBold20Black900"
                  >
                    2
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <Text
            className="mt-[26px] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
            size="txtInterBold45"
          >
            Action Buttons
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[69px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[928px] mt-[29px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[70px] items-center justify-end p-[21px] sm:px-5 rounded-[20px] w-full"
              style={{ backgroundImage: "url('images/img_group38.svg')" }}
            >
              <Text
                className="text-center text-indigo-900 text-xl"
                size="txtInterExtraBold20Indigo900"
              >
                Home
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[70px] items-center justify-start p-[21px] sm:px-5 rounded-[20px] w-full"
              style={{ backgroundImage: "url('images/img_group38.svg')" }}
            >
              <Text
                className="text-center text-indigo-900 text-xl"
                size="txtInterExtraBold20Indigo900"
              >
                Generate Risk Profile
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[70px] items-center justify-end p-[21px] sm:px-5 rounded-[20px] w-full"
              style={{ backgroundImage: "url('images/img_group38.svg')" }}
            >
              <Text
                className="mt-0.5 text-center text-indigo-900 text-xl"
                size="txtInterExtraBold20Indigo900"
              >
                {" "}
                Report Risk
              </Text>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default Webapp4TOPagePage;
