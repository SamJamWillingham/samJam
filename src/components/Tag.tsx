import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: string;
}

export const Tag: FC<Props> = ({ children, type }) => {
  let classNames = "";
  const uxClassNames =
    "bg-[#FEA82F] rounded-lg md:border md:border-[#FEA82F] text-[#FEA82F] bg-opacity-20 p-1 md:px-2 md:py-1 m-2 ml-0 text-sm lg:text-base`}";
  const frontEndClassNames =
    "bg-[#FF6701] rounded-lg md:border md:border-[#FF6701] text-[#FF6701] bg-opacity-20 p-1 md:px-2 md:py-1 m-2 ml-0 text-sm lg:text-base`}";
  const poClassNames =
    "bg-[#FFC288] rounded-lg md:border md:border-[#FFC288] text-[#FFC288] bg-opacity-20 p-1 md:px-2 md:py-1 m-2 ml-0 text-sm lg:text-base`}";

  switch (type) {
    case "ux":
      classNames = uxClassNames;
      break;
    case "front-end":
      classNames = frontEndClassNames;
      break;
    case "product-owner":
      classNames = poClassNames;
      break;
    default:
      break;
  }

  return <p className={classNames}>{children}</p>;
};
