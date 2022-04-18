import React from 'react';
import Doctor from '../../Doctor/Doctor';
import Banner from '../Banner/Banner';
import Treatments from '../Treatments/Treatments';

const HomeView = () => {
    return (
        <div>
            <Banner></Banner>
            <Treatments></Treatments>
            <Doctor></Doctor>
        </div>
    );
};

export default HomeView;