import React, { FC } from "react";

interface Assurance {
  imgSrc: string;
  children: React.ReactNode;
}

export const AssuranceItem: FC<Assurance> = ({ imgSrc, children}) => {
  return (
    <div className={`flex h-70 items-center`}>
      <img className="me-2.5 size-8" src={imgSrc} />
      <span>{children}</span>
    </div>
  );
};
