import { Box, type TypographyProps } from "@mui/material"
import Link from "next/link"
import { type PropsWithChildren, type FC } from "react"

interface StyledLinkProps extends TypographyProps {
  href: string
}

const StyledLink: FC<PropsWithChildren<StyledLinkProps>> = ({ children, href, sx, ...props }) => {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        display: "inline",
        ":hover": {
          color: theme => theme.palette.primary.main
        },
        transition: "all .3s",
        ...sx
      }}
    >
      {children}
    </Box>
  )
}
export default StyledLink
