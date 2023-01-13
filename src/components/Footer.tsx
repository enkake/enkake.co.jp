import { Typography } from "@mui/material"
import { Link } from "gatsby"
import React from "react"
import { FC } from "react"

const Footer: FC = () => {
  return (
    <footer>
      <Typography variant="body2" sx={{ textAlign: 'center', py: 4 }}>
        &copy;{' '}
        {new Date().getFullYear()}
        {' '}
        <Link to="/">
          enkake Inc.
        </Link>
      </Typography>
    </footer>
  )
}

export default Footer