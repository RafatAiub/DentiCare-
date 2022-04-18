import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-warning text bolder text-center fs-5'>{error.message}</p>
    }

    const navigateRegister = () => {
        navigate('/register')
    }

    const resetPass = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email Address');
        }

    }
    return (
        <div className='container w-50 mx-auto border p-5 bg-secondary'>
            <h1 className='fw-bold text-center'>Please <span className='text-danger'>Login</span></h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="btn btn-outline-warning w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center fw-bold'>New to Genius car system ??<Button className='fs-5 bolder btn btn-link bg-secondary border-0 text-warning text-decoration-none ' onClick={navigateRegister}><span >Please Register Now </span></Button></p>
            <p className='text-center fw-bold'>Forget your password ??<Button className='fs-5 bolder btn btn-link  border-0 bg-secondary text-warning text-decoration-none ' onClick={resetPass}><span >Please Reset Now</span></Button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
            {errorElement}
        </div>
    );
};

export default Login;