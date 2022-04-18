import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TreatmentDetails = () => {
    const { name } = useParams();
    return (
        <div className='text-center'>
            <h2>{name}</h2>
            <p > If you want to set the appointment please press this button. </p>
            <Link to="/checkout">
                <button className='btn btn-primary'>Proceed CheckOUt</button>
            </Link>
        </div>
    );
};

export default TreatmentDetails;