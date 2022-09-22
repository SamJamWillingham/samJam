import React, { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
  isAboutCardVisible: boolean;
}
export const AboutCard: FC<Props> = ({ children, isAboutCardVisible }) => {
  return (
    <div
      className={`${
        isAboutCardVisible ? "" : "opacity-0 translate-y-full"
      } block text-left p-10 duration-700 ease-out transition-all min-w-[400px] border border-[#FCECDD] border-opacity-50 shadow-orangey rounded-md`}
    >
      {children}
    </div>
  );
};
