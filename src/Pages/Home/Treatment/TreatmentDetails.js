import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TreatmentDetails = () => {
    const { name } = useParams();
    return (
        <div>
            <h2>{name}</h2>
            <Link to="/checkout">
                <button className='btn btn-primary'>Proceed CheckOUt</button>
            </Link>
        </div>
    );
};

export default TreatmentDetails;