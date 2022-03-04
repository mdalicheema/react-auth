import React, { useState } from "react";
import './register.css'


const Register = () => {

    const [user, setUser] = useState({
        fname: '',
        email: '',
        password: '',
        reEnterPassword: ''
    })

    const handleValue = (e) => {
        const {name, value} = e.target;
        console.log(name, value );
        setUser({
            ...user,
            [name] : value
        })
    }

    return (
        <>
           <div className="register">
                <h1>Register</h1>
                <input type="text" name="fname" value={user.fname} onChange={ handleValue } placeholder="Your Name" />
                <input type="email" name="email" value={user.email} onChange={ handleValue } placeholder="Enter Email" required />
                <input type="password" name="password" value={user.password} onChange={ handleValue } placeholder="Enter Password" />
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={ handleValue } placeholder="re-Enter Password" />
                <button type="submit" className="button" >Register</button>
                <span>Or</span>
                <button type="submit" className="button" >Login</button>
            </div>
        </>
    );
}

export default Register;