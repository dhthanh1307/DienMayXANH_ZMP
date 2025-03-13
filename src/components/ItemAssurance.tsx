import { AssuranceType } from "@type/index";
import React, { FC } from "react";

export const ItemAssurance: FC<AssuranceType> = ({ imgSrc, children }) => {
  return (
    <div className={"flex h-70 items-center"}>
      <img className="me-2.5 size-8" src={imgSrc} />
      <span>{children}</span>
    </div>
  );
};
