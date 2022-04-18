import React from 'react';
import rafat from '../../images/me/Rafat_passport_photo.jpg'
const About = () => {
    return (
        <div className='text-center mx-auto m-5 p-5 shadow-lg'>
            <h1>About <span className='text-danger'>ME</span></h1>

            <div  >
                <img width='333px' src={rafat} alt="" />
                <p className='text-secondary fw-bolder'>Tanvir Mahtab Rafat</p>
                <p className='fs-3'>Though it seems a easy question to talk about my goal but when bunches of opportunity apers day by day. it's so confusing to a certain goal. I decided to get into the rising software industry. That's why I think to take better preparation I must gain a sound knowledge of all the topics of my bachelors on the same time competitive coding is quiet important and at the same time different types of projects are also essential to rich my goals. </p>
            </div>
        </div>
    );
};

export default About;