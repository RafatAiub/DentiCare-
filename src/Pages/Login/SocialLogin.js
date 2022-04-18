import React from 'react';
import google from '../../images/icon/google.png'
import facebook from '../../images/icon/facebook.png'
import github from '../../images/icon/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';


const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = <p className='text-warning text bolder text-center fs-5'>Error: {error?.message}{error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home');
    }

    return (
        <div className='fs-5'>

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>
                <p className='mt-2 px-2 text-danger fw-bolder'>or</p>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-outline-warning border mx-auto d-block w-50 my-2'>
                <img src={google} alt="" />
                <span className='px-2'>Google SignIN</span>
            </button>

            <button className='btn btn-outline-primary border mx-auto d-block w-50 my-2'>
                <img src={facebook} alt="" />
                <span className='px-2'>FaceBook</span>

            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-outline-danger border mx-auto d-block w-50 my-2'>
                <img src={github} alt="" />
                <span className='px-2'>GitHub</span>

            </button>
        </div>
    );
};

export default SocialLogin;