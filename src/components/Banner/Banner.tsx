import React, { FC } from "react";
import { Box } from "zmp-ui";

export const Banner: FC<BannerProps> = ({ src, className = "", containerClassName = "" }) => {
    return (
        <Box className={`bg-white ${containerClassName}`}>
            <div className="flex justify-center">
                <img src={src} className={className} />
            </div>
        </Box>
    );
};
