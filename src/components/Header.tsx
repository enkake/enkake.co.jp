import { Toolbar, Typography, Button } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import React from "react"
import { FC } from "react"
import Logo from "../graphics/Logo"
import Link from "./Link"

const Header: FC = () => {
  return (<AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        <Link to="/">
          <Logo />
        </Link>
      </Typography>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          to="/"
          sx={{ my: 1, mx: 1.5 }}
        >
          Home
        </Link>
        <Link
          variant="button"
          color="text.primary"
          to="/manner"
          sx={{ my: 1, mx: 1.5 }}
        >
          温泉マナー10ヶ条
        </Link>
        {/* <Link
          variant="button"
          color="text.primary"
          to="/services/"
          sx={{ my: 1, mx: 1.5 }}
        >
          Services
        </Link> */}
        <Link
          variant="button"
          color="text.primary"
          to="/about/"
          sx={{ my: 1, mx: 1.5 }}
        >
          About
        </Link>
      </nav>
    </Toolbar>
  </AppBar>)
}

export default Header;