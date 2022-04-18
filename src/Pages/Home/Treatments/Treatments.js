import React, { useEffect, useState } from 'react';
import Treatment from '../Treatment/Treatment';
import './Treatments.css'

const Treatments = () => {
    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        fetch('treatments.json')
            .then(res => res.json())
            .then(data => setTreatments(data));
    }, [])

    return (
        <div id='treatments' className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our treatments</h1>
                <div className="treatments-container">
                    {
                        treatments.map(treatment => <Treatment
                            key={treatment.id}
                            treatment={treatment}
                        >
                        </Treatment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Treatments;