import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {

  var [name,setname]=useState("Pichu")
  var [pichu,setval]=useState()
  const handleInput =(e)=>{
    console.log(e.target.vale)
    setname(e.target.value)

  }

  const submit =(e)=>{
   setval(name)
  }

  return (
    <div>
        <Typography variant='h6'>
      welcome {pichu}
        </Typography>
        <TextField varient='outlined'onChange={handleInput } label='Entername'/>
        <br></br><br></br>
         <Button variant='contained' color='secondary' onClick={submit}>
          Button
          </Button>
    </div>
  )
}

export default State









