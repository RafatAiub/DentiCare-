import React from 'react';
import dr from '../../images/treatments/dr.jpg'

const Doctor = () => {
    return (
        <div id='doctor' className='border shadow-lg m-5 p-5 rounded'>
            <h1 className='fs-3 text-center '>About<span className='text-danger'>Doctor</span></h1>
            <div className='text-center'>
                <img src={dr} alt="" />
                <p className='fw-bold fs-4'>Prof.Dr.Md.Ruhul Amin</p>
                <p>BDS,DAND,DDS,MS</p>
                <p className='text-danger fw-bolder'>President:</p>
                <p className='text-primary fw-bolder'>Bangladesh Associate of Oral and Maxillofacial Surgery(BAMOS)</p>
                <p>Dental Oral Maxillofacial Surgery Specialist</p>
                <h4>Professor And also Head</h4>
                <h4>Personal Mobile : <span className='text-primary'>01758898742,01817541005</span></h4>
            </div>
        </div>
    );
};

export default Doctor;