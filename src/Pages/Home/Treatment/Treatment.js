import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Treatment.css';

const Treatment = ({ treatment }) => {
    const { name, img, description, price } = treatment;
    const navigate = useNavigate();
    const navigateToServiceDetail = name => {
        navigate(`/treatments/${name}`);

    }
    return (
        <div>
            <div className='treatment'>
                <img width='500px' src={img} alt="" />
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p><small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail(name)} className='btn btn-primary'>Book for {name}</button>
            </div>
        </div>
    );
};

export default Treatment;