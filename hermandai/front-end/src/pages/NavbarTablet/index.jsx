import React from "react";

import { Img } from "components";

const NavbarTabletPage = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row sm:gap-5 md:gap-5 items-center justify-start mx-auto pt-[18px] px-[18px] w-full">
        <Img
          className="h-[135px] sm:h-auto md:mt-0 mt-[62px] object-cover w-[10%] md:w-full"
          src="images/img_image20.png"
          alt="imageTwenty"
        />
        <Img
          className="h-[101px] sm:h-auto object-cover w-[24%] md:w-full"
          src="images/img_image16.png"
          alt="imageTwentyThree"
        />
        <Img
          className="h-[51px] md:ml-[0] ml-[229px] w-[50px]"
          src="images/img_megaphone.svg"
          alt="megaphone"
        />
      </div>
    </>
  );
};

export default NavbarTabletPage;
