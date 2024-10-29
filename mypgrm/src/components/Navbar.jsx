import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <AppBar sx={{
    
 
    background: '#20002c',
background: '-webkit-linear-gradient(to right, #cbb4d4, #20002c)',
background: 'linear-gradient(to right, #cbb4d4, #20002c)',

    
      }}>

        <Toolbar>
            <Typography variant ="h6"> My_app </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar