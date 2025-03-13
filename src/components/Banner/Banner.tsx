import { BannerProps } from "@type/index";
import classNames from "classnames";
import React, { FC } from "react";
import { Box } from "zmp-ui";

export const Banner: FC<BannerProps> = ({ src, className = "", containerClassName = "" }) => {
    return (
        <Box className={classNames("bg-white", containerClassName)}>
            <div className="flex flex-wrap justify-center gap-3">
                {src.map((image, index) => (
                    <img key={index} src={image} className={className} alt={`banner-${index}`} />
                ))}
            </div>
        </Box>
    );
};
