import React, { useContext, useState } from 'react';
import { AuthContext } from './context.js';

const Signup = () => {

    const context = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        context.signup({ username, password, email, role });
    };

    return (
        <>
            <form
            onSubmit={handleSubmit}
            className=" mr-sm-10"
            >


              <input
                className="mr-sm-5"
                placeholder='UserName'
                name='username'
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                />

                <input
                className="mr-sm-5"
                placeholder='password'
                name='password'
                type='text'
                onChange={(e) => setPassword(e.target.value)}
                />

                <input
                className="mr-sm-5"
                placeholder='email'
                name='email'
                type='text'
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                className="mr-sm-5"
                placeholder='role'
                name='role'
                type='text'
                onChange={(e) => setRole(e.target.value)}
                />

                <button type="submit" variant="dark" className="mr-sm-4" size="md">Signup</button>
                <button onClick={() => context.setSwitchToSignup(false)}>Back to Login</button>
            </form>
        </>
    );
};

export default Signup;
