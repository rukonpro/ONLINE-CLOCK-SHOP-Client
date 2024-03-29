import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardActions, CardMedia, Typography, Badge, Rating,  CardContent, Card } from '@mui/material';


const HomeProduct = ({ product }) => {
    const { title, description, img, _id, price } = product;
   
    return (


        <Card sx={{ maxWidth: 345, boxShadow: '1px 2px 10px #cee3ff', padding: 2, borderRadius: 2, height: 1 }}>
            <Badge color="secondary" badgeContent={`$${price}`}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ height: 260, objectFit: 'contain' }}
                    image={img}
                /></Badge>
            <CardContent>
                <Typography variant="body" sx={{ fontWeight: 'bold' }}>{title.slice(0, 20)}</Typography>
                <Typography variant="body2" sx={{ textAlign: 'justify' }}>{description.slice(0, 50)} ...</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to={`placeOrder/${_id}`} style={{ textDecoration: "none" }}>
                    <Button color="secondary" size='small' variant="contained">Place Order</Button>
                </Link>
                <Rating size='small' name="half-rating-read" defaultValue={product?.rating} precision={0.5} readOnly />
            </CardActions>
        </Card>


    )

};

export default HomeProduct;