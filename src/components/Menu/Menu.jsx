import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Menu = () => {
  return (
    <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://tofuu.getjusto.com/orioneat-prod/c2b3NDGqyyToLK7Hx-PAPAS-FUNGI-EXPRESS.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Papas Fungis
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://finde.latercera.com/wp-content/uploads/2020/04/La-Burguesita-listo-.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          La clasica 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
   
  )
}

export default Menu