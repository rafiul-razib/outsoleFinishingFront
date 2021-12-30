import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.from || '/home'

    const{googleSignIn, emailSignIn, setIsLoading} = useAuth()

    // const handleGoogleSignIn = (e) =>{
    //     googleSignIn()
    //     .then(result =>{
    //         history.push(redirect_uri)
    //     })
    //     // .then(error =>{
    //     //     console.log(error.message)
    //     // })
    //     .finally(setIsLoading(false))
        
    //     e.preventDefault()
    // }

    const handleEmailSignIn = e =>{
        emailSignIn(email, password)
        .then(result =>{
            history.push(redirect_uri)
        })
        .finally(setIsLoading(false))
        
        e.preventDefault()
    }
    return (
        <div>
            <div className="container">
                <div className='mx-auto w-50 text-center py-5 mt-4'>
                    <h2>Have an Account?</h2>
                <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={e =>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
            
                <input type="submit" onClick={handleEmailSignIn} className="btn btn-primary form-control" value="Login"/>
                {/* <p>Need an account? <a href="/register">Register here</a></p> */}
                </form>
                </div>
			</div>
            <div className='d-flex justify-content-center align-items-center flex-column mb-4'>
                {/* <h5>Or</h5>
                <button onClick={handleGoogleSignIn} className='btn btn-success'>Sign in with Google</button> */}
            </div>
        </div>
    );
};

export default Login;