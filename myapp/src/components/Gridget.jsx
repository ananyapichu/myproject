import { Grid } from '@mui/material'
import React from 'react'

const Gridget = () => {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <h1>welcome to grid one</h1>
                <img src="https://pbs.twimg.com/profile_images/1069610137885696001/YXIvz_AN_400x400.jpg" height="150" width="150" />
            </Grid>
<Grid item xs={4}>
    <h1>welcome to grid two</h1>
    <img src="https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" height="150" width="150" />
</Grid>
<Grid item xs={4} >
    <h1>welcome to grid three</h1>
    <img src="https://up.quizlet.com/1m4eqi-6Tuzx-256s.jpg" height="150" width="150" />
</Grid> 
</Grid>   
    </div>
  )
}

export default Gridget