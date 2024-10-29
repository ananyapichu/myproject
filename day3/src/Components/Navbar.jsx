import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <AppBar color='secondary'>
        <Toolbar>        
            <Typography variant='h6'>Myapp</Typography><br></br><br></br>
            &nbsp;
            <Link to='/s'>
            <Button variant='contained'>state</Button>

            </Link>
            <Link to='/c'>
            <Button variant='contained'>counter</Button>
            </Link>

            <Link to='/n'>
            <Button variant='contained'>name</Button>
            </Link>
        </Toolbar>
      </AppBar>
      <br></br><br></br><br></br>
    </div>
  )
}

export default Navbar