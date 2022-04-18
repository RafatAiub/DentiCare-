import React, { useEffect, useState } from 'react';
import Treatment from '../Treatment/Treatment';
import './Treatments.css';
import img1 from '../../../images/treatments/1.png';
import img2 from '../../../images/treatments/2.png';
import img3 from '../../../images/treatments/3.png';
import img4 from '../../../images/treatments/4.png';
import img5 from '../../../images/treatments/5.png';
import img6 from '../../../images/treatments/6.png';

const Treatments = () => {
    const [treatments, setTreatments] = useState([]);

    let images = [img1, img2, img3, img4, img5, img6];

    useEffect(() => {
        fetch('treatments.json')
            .then(res => res.json())
            .then(data => setTreatments(data));
    }, [])

    return (
        <div id='treatment' className='container'>
            <div className="row">
                <h1 className='text-center p-5 fw-bold'>Provided<span className='text-danger'>Treatments</span></h1>
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