import React, { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const AboutCard: FC<Props> = ({ children }) => {
  return (
      <div
      className="block lg:text-left p-10 lg:duration-700 lg:ease-out lg:transition-all xl:min-w-[400px] lg:border lg:border-[#FCECDD] border-opacity-50 lg:shadow-orangey lg:rounded-md">
      {children}
    </div>
  );
};
