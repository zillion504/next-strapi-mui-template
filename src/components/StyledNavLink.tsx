import { Typography, type TypographyProps } from "@mui/material"
import Link from "next/link"
import { type PropsWithChildren, type FC } from "react"

interface StyledNavLinkProps extends TypographyProps {
  href: string
}

const StyledNavLink: FC<PropsWithChildren<StyledNavLinkProps>> = ({ children, href, sx, ...props }) => {
  return (
    <Link href={href}>
      <Typography
        variant="body1"
        sx={{
          ":hover": {
            color: theme => theme.palette.primary.main
          },
          transition: "all .3s",
          ...sx
        }}
        {...props}
      >
        {children}
      </Typography>
    </Link>
  )
}
export default StyledNavLink
