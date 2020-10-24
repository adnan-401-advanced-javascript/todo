import React, { useContext, useState } from 'react';
import { AuthContext } from './context.js';

const Login = () => {

    const context = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        context.login(username, password);
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

                <button type="submit" variant="dark" className="mr-sm-4" size="md">Login</button>
                <button onClick={() => context.setSwitchToSignup(true)}>Signup</button>
            </form>
        </>
    );
};

export default Login;
