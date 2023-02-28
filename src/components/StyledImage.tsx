import { Box, type BoxProps } from "@mui/material"
import Image from "next/image"
import React from "react"
import { type FC } from "react"

interface StyledImageProps extends BoxProps {
  src: string
  alt: string
}

const StyledImage: FC<StyledImageProps> = ({ src, alt, sx, ...props }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        borderBottom: theme => `4px solid ${theme.palette.primary.main}`,
        ...sx
      }}
      {...props}
    >
      <Box
        component={Image}
        fill
        alt={alt}
        src={src}
        sx={{
          objectFit: "cover"
        }}
      />
    </Box>
  )
}
export default StyledImage
