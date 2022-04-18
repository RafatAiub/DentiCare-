import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Treatment.css';


const Treatment = ({ treatment }) => {
    const { name, description, price, img } = treatment;
    const navigate = useNavigate();
    const navigateToServiceDetail = name => {
        navigate(`/treatments/${name}`);

    }
    return (
        <div>
            <div className='treatment shadow-lg'>
                <img width='420px' src={img} alt="" />
                <h2>{name}</h2>
                <p>Price: <span className='fw-bolder'>{price}</span> Tk</p>
                <p className='fs-2 container-fluid'><small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail(name)} className='btn rounded fw-bolder btn-outline-info fs-5'>Book for {name}</button>
            </div>
        </div>
    );
};

export default Treatment;