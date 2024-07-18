import React from "react";

const sizeClasses = {
  txtLatoSemiBold25: "font-lato font-semibold",
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular20WhiteA700: "font-inter font-normal",
  txtInterSemiBold45: "font-inter font-semibold",
  txtInterBold45: "font-bold font-inter",
  txtInterMedium25: "font-inter font-medium",
  txtInterBold68: "font-bold font-inter",
  txtInterSemiBold50: "font-inter font-semibold",
  txtInterBold40: "font-bold font-inter",
  txtInterExtraBold15: "font-extrabold font-inter",
  txtInterRegular50WhiteA700: "font-inter font-normal",
  txtInterSemiBold20WhiteA700: "font-inter font-semibold",
  txtInterExtraLight30: "font-inter font-thin",
  txtInterExtraBold35: "font-extrabold font-inter",
  txtInterRegular22: "font-inter font-normal",
  txtInterRegular25: "font-inter font-normal",
  txtInterBold150: "font-bold font-inter",
  txtInterRegular50: "font-inter font-normal",
  txtInterRegular20Blue200: "font-inter font-normal",
  txtInterBold18: "font-bold font-inter",
  txtInterRegular30: "font-inter font-normal",
  txtInterSemiBold20Indigo900: "font-inter font-semibold",
  txtInterRegular10: "font-inter font-normal",
  txtInterExtraLight22: "font-inter font-thin",
  txtInterExtraLight20: "font-inter font-thin",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterBold55: "font-bold font-inter",
  txtInterExtraBold20Black900: "font-extrabold font-inter",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterBold50: "font-bold font-inter italic",
  txtInterRegular25Black900: "font-inter font-normal",
  txtInterExtraBold20Indigo900: "font-extrabold font-inter",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular20Indigo900: "font-inter font-normal",
  txtInterMedium40: "font-inter font-medium",
  txtInterExtraBold20: "font-extrabold font-inter",
  txtInterBold45Black900: "font-bold font-inter italic",
  txtInterSemiBold20Indigo90001: "font-inter font-semibold",
  txtInterExtraBold60: "font-extrabold font-inter",
  txtInterRegular15: "font-inter font-normal",
  txtInterRegular17: "font-inter font-normal",
  txtLohitBengali40: "font-lohitbengali font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
