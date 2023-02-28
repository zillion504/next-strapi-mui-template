import { Box, Grid, Hidden, type GridProps } from "@mui/material"
import React, { type FC, type PropsWithChildren } from "react"
import StyledImage from "./StyledImage"

interface HeroPageProps extends GridProps {
  image: string
  alt: string
  reverse?: boolean
  form?: boolean
  imageHiddenMobile?: boolean
}

const HeroPage: FC<PropsWithChildren<HeroPageProps>> = ({ image, alt, reverse = false, form = false, imageHiddenMobile = false, children, ...props }) => {
  const heroPageImage = <StyledImage
    sx={{
      aspectRatio: "2 / 1"
    }}
    src={image}
    alt={alt}
  />

  const content = <Box
    sx={{
      px: {
        xs: form ? 0 : 2,
        md: form ? 2 : 8
      },
      py: {
        xs: form ? 2 : 4,
        md: form ? 0 : 8
      }
    }}
  >
    {children}
  </Box>

  if (!reverse) {
    return (<Box>
      <Grid container {...props}>
        <Hidden mdDown={imageHiddenMobile}>
          <Grid item xs={12} md={6}>
            {heroPageImage}
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          {content}
        </Grid>
      </Grid>
    </Box>)
  } else {
    return (<Box>
      <Grid container {...props}>
        <Grid item xs={12} md={6}>
          {content}
        </Grid>
        <Hidden mdDown={imageHiddenMobile}>
          <Grid item xs={12} md={6}>
            {heroPageImage}
          </Grid>
        </Hidden>
      </Grid>
    </Box>)
  }
}
export default HeroPage
