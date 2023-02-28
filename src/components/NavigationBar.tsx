import React, { useState } from "react"
import { type FC } from "react"
import { Box, Container, Drawer, Hidden, IconButton, Stack, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Link from "next/link"
import StyledNavLink from "./StyledNavLink"

const appName = "App Name"
const navLinks = {
  Home: "/#",
  Services: "/#",
  Work: "/#",
  Pricing: "/#",
  About: "/#",
  Contact: "/#"
}
const logoPath = "/favicon.svg"

const NavigationBarMobile: FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (<>
    <Box
      sx={{
        backgroundColor: theme => theme.palette.background.default,
        position: "sticky",
        top: -36,
        zIndex: 100
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: 2,
          minHeight: "100px",
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/#">
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <Box
                sx={{
                  width: "64px",
                  height: "64px",
                  backgroundImage: `url("${logoPath}")`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              />
              <Typography
                sx={{
                  fontSize: "24px"
                }}
                variant="h1"
              >
                {appName}
              </Typography>
            </Stack>
          </Link>
          <IconButton
            onClick={() => { setOpen(true) }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>

    <Drawer
      onClick={() => { setOpen(false) }}
      onClose={() => { setOpen(false) }}
      anchor="top"
      open={open}
    >
      <Stack
        spacing={3}
        p={2}
        sx={{
          backgroundColor: theme => theme.palette.background.default
        }}
      >
        {
          Object.entries(navLinks).map(([text, link]) => (
            <StyledNavLink key={text} href={link}>{text}</StyledNavLink>
          ))
        }
      </Stack>
    </Drawer>
  </>)
}

const NavigationBarDesktop: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme => theme.palette.background.default,
        position: "sticky",
        top: -36,
        zIndex: 100
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: 2,
          minHeight: "100px",
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/#">
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <Box
                sx={{
                  width: "64px",
                  height: "64px",
                  backgroundImage: `url("${logoPath}")`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "24px",
                    lg: "36px"
                  }
                }}
              >
                {appName}
              </Typography>
            </Stack>
          </Link>
          <Stack
            direction="row"
            spacing={3}
            alignItems="baseline"
          >
            {
              Object.entries(navLinks).map(([text, link]) => (
                <StyledNavLink key={text} href={link}>{text}</StyledNavLink>
              ))
            }
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

const NavigationBar: FC = () => {
  return <>
    <Hidden mdDown>
      <NavigationBarDesktop />
    </Hidden>
    <Hidden mdUp>
      <NavigationBarMobile />
    </Hidden>
  </>
}

export default NavigationBar
