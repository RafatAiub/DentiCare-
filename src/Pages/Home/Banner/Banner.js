import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-50 container-fluid"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='text-danger'>
                    <h3>We Know better</h3>
                    <p className='fs-5'>Take the best treatment from DentiCare </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img

                    className="d-block w-75 container-fluid"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-info'>
                    <h3>We Know better</h3>
                    <p className='fs-5'>Take the best treatment from DentiCare </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img

                    className="d-block w-75 container-fluid"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption >
                    <h3>We Know better</h3>
                    <p className='fs-5'>Take the best treatment from DentiCare </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;