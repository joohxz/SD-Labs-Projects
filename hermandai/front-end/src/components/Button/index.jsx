import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[20px]" };
const variants = {
  fill: {
    gray_100: "bg-gray-100 shadow-bs text-black-900",
    gray_900: "bg-gray-900 text-white-A700",
    deep_orange_A700: "bg-deep_orange-A700 text-white-A700",
    lime_800: "bg-lime-800 text-white-A700",
    lime_A200: "bg-lime-A200 text-white-A700",
    lime_600_01: "bg-lime-600_01 text-black-900",
    light_green_A700_01: "bg-light_green-A700_01 text-white-A700",
    blue_200: "bg-blue-200 shadow-bs text-white-A700",
    white_A700: "bg-white-A700 shadow-bs text-indigo-900",
    lime_600: "bg-lime-600 text-black-900",
    light_green_A700: "bg-light_green-A700 text-black-900",
    indigo_900: "bg-indigo-900 shadow-bs text-white-A700",
  },
};
const sizes = { xs: "p-1", sm: "p-2", md: "p-[17px]", lg: "p-[27px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "gray_100",
    "gray_900",
    "deep_orange_A700",
    "lime_800",
    "lime_A200",
    "lime_600_01",
    "light_green_A700_01",
    "blue_200",
    "white_A700",
    "lime_600",
    "light_green_A700",
    "indigo_900",
  ]),
};

export { Button };
