import React from 'react'
import {    Container,
            Box,
            Paper,
            Grid,
            Card,
            CardMedia,
            CardContent,
            Typography,
            CardActions,
            Button 
        
        } from '@mui/material'
import { styled } from '@mui/material/styles';
import imageUrl from '../images/paella.jpg';
import imageUrl_2 from '../images/1594676454018.jpeg'
import imageUrl_3 from '../images/image.jpg'
import imageUrl_4 from '../images/image-1.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  




const Menu = () => {
  return (
    <>
    <Container maxWidth="md">
        <Box sx={{ bgcolor: '#efefef', height: '700px',margin:"50px" }} >
        <Grid container spacing={2}>
        <Grid item xs={2} md={8}>
          <Card>

          <CardMedia
                component="img"
                height="140"
                image={imageUrl_2}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                Cucumber, Melon and Farro Salad with Feta--the one that everyone at the cookout lines up for. 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Order</Button>
                
            </CardActions>

          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card>

            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Order</Button>
                
            </CardActions>

            </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card>

            <CardMedia
                component="img"
                height="140"
                image={imageUrl_3}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This brown stew chicken is delicious served over steamed rice with green peas, garnished with fresh thyme. 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Order</Button>
                
            </CardActions>

            </Card>
        </Grid>
        <Grid item xs={6} md={8}>
        <Card>

            <CardMedia
                component="img"
                height="140"
                image={imageUrl_4}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This is a great recipe that I found in my Grandma's recipe book. Judging from the weathered look of this recipe card, this was a family favorite. 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Order</Button>
                
            </CardActions>

            </Card>
        </Grid>
        
      </Grid>
      
        </Box>
      </Container>
    
    </>
  )
}

export default Menu