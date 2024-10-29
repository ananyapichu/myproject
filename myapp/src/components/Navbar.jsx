import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar sx={{
    
 
    background: '#20002c',
background: '-webkit-linear-gradient(to right, #cbb4d4, #20002c)',
background: 'linear-gradient(to right, #cbb4d4, #20002c)'

    
      }}>

        <Toolbar>
            <Typography variant ="h6"> My_app </Typography>
            <Link to ='/pro'>
            <button variant="contained">Gridget</button>
            </Link>

            <Link to ='/p'>
            <button variant="contained">Products</button>
            </Link>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar