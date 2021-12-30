import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';


const Register = () => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('');
    const[password1, setPassword1] = useState('');
    const[password2, setPassword2] = useState('');
    const{createUser} = useAuth();

    const handleCreateAccount = (e) =>{
        e.preventDefault();
        
        if(password1 == password2){
            createUser(email, password1)
        }
        else{
            alert("Password didn't match.")
        }

    }
    return (
        <div className='container'>
            <div className='mx-auto w-50 text-center py-5 mt-4'>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" onChange={e => setName(e.target.value)} className="form-control" id="name" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={e => setEmail(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={e => setPassword1(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                </div>
            
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" onChange={e => setPassword2(e.target.value)} className="form-control" id="exampleInputPassword2"/>
                </div>
            
                <input type="submit" onClick={handleCreateAccount} className="btn btn-primary form-control" value="Create Account"/>
                <p>Already have an account? <a href="/login">login here</a></p>
                </form>
                </div>
        </div>
    );
};

export default Register;