import React, { useState } from "react";
import './login.css'


const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
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
                <h1>Login</h1>
                <input type="email" name="email" value={user.email} onChange={ handleValue } placeholder="Enter Email" required />
                <input type="password" name="password" value={user.password} onChange={ handleValue } placeholder="Enter Password" />
                <button type="submit" className="button" >Login</button>
                <span>Or</span>
                <button type="submit" className="button" >Register</button>
            </div>
        </>
    );
}

export default Login;