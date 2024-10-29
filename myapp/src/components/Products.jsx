import { Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Products = () => {
  return (
    <div>
        
            <Grid container spacing={2}>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://stat.overdrive.in/wp-content/odgallery/2018/11/48161_Royal_Enfield_ContinentalGT_6502018_021.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BIKES
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Royal Enfield Continental GT 650 is a 647cc cafe racer bike with price starting from Rs. 3.19 lakh.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                </Grid>
                    <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/originals/35/e0/98/35e098f48966250643dad4c17ce344e7.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CARS
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        BMW, which stands for Bayerische Motoren Werke, is a German automaker123.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                </Grid>
                <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://wallpapercave.com/wp/wp6885079.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BTS
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        ungkook is a member of BTS, a popular K-pop boy band. He was born on September 1, 1997, in Busan, South Korea
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                </Grid>
                <Grid>
                

                </Grid>
        </Grid>
    </div>
  )
}

export default Products