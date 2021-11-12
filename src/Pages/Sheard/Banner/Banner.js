import React from 'react';
import './Banner.css'
import { Button } from '@mui/material'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <Carousel className="">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block "
                    src="https://i.ibb.co/p00bzKJ/wp7491739.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='bg-gray-900'>
                    <h3 className=" text-pink-600 text-4xl fw-bold"> Clock Online Shop</h3>
                    <p> Clock Online Shop</p>
                    <Link to="/products"> <Button color="secondary" size="small" variant="contained">Explore </Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block"
                    src="https://i.ibb.co/p00bzKJ/wp7491739.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className='bg-gray-900'>
                    <h3> Clock Online Shop</h3>
                    <p> Clock Online Shop.</p>
                    <Link to="/products"> <Button color="secondary" size="small" variant="contained">Explore </Button></Link>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block "
                    src="https://i.ibb.co/p00bzKJ/wp7491739.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className='bg-gray-900'>
                    <h3> Clock Online Shop</h3>
                    <p>Unique Porcelain Collection</p>
                    <Link to="/products"> <Button color="secondary" size="small" variant="contained">Explore </Button></Link>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;

// Premier Pottery Retailer
// Unique Porcelain Collection