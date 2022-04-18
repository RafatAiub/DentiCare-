import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import './Register.css'
import SocialLogin from './SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    if (updating || loading) {
        return <Loading></Loading>
    }
    if (user) {
        // navigate('/login');
        console.log(user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        // console.log(event?.target?.email?.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // alert('Updated profile');

        navigate('/home');

    }

    // const handleLogin = () => {
    //     navigate('/login')
    // }

    return (
        <div className='register-form border p-5 bg-secondary'>
            <h2 className='text-center' >Please <span className='text-danger fw-bold'>Register</span></h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-info' : 'text-warning'}`} htmlFor="terms">Accept terms and conditions</label>

                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-outline-info mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p className='text-info fs-5'>Already Have an Account? <Link className='pe-auto text-decoration-none fs-5 text-warning' to='/login'>Please Login</Link></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;