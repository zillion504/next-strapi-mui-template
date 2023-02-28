import { Box, Hidden, Paper, Typography, type PaperProps } from "@mui/material"
import React, { type ReactNode, type FC } from "react"
import StyledImage from "./StyledImage"

interface StyledCardProps extends PaperProps {
  src: string
  alt: string
  title: string
  text: string | ReactNode
  button?: {
    text: string
    link: string
  }
}

const StyledCard: FC<StyledCardProps> = ({ src, alt, title, text, button, sx, ...props }) => {
  return (
    <Paper
      sx={{
        height: "100%",
        ...sx
      }}
      {...props}
    >
      <Box>
        <Hidden mdDown>
          <StyledImage
            src={src}
            alt={alt}
            sx={{
              width: "100%",
              aspectRatio: "16 / 9"
            }}
          />
        </Hidden>
        <Box
          sx={{
            textAlign: "center",
            p: 5
          }}
        >
          <Typography
            variant="h3"
            mb={2}
          >
            {title}
          </Typography>
          {(typeof text === "string") && <Typography
            variant="body1"
          >
            {text}
          </Typography>}
          {(typeof text !== "string") && text}
        </Box>
      </Box>
    </Paper>
  )
}
export default StyledCard
