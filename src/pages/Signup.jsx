import '../styles/login.css';
import { Container, Button, TextField } from "@mui/material"
import { Link, redirect } from 'react-router-dom';
import { useState } from 'react';
import { signup } from '../apiClient/userApi';
import { userStore } from '../store';

const Signup = () => {
    const [userDetail, setUserDetail] = useState({
        email: '',
        name: '',
        password: ''
    });
    const signupHandle = () => {
        console.log(userDetail);
        signup(userDetail).then(res => {
            console.log(res);
            userStore.update(s => {
                s.isLoggedIn = true
                s.token = res
            })
            // redirect("/")
            window.location.href = '/'
        }).catch(err => console.log(err));
    }
    return <div className="login">
        <div className="login__container">
            <h1>Signup</h1>
            <TextField
                className="login__input"
                required
                label="Name"
                value={userDetail.name}
                onChange={(e) => setUserDetail({ ...userDetail, name: e.target.value })}
                variant="standard"
            />
            <TextField
                className="login__input"
                required
                label="Email"
                value={userDetail.email}
                onChange={(e) => setUserDetail({ ...userDetail, email: e.target.value })}
                variant="standard"
            />
            <TextField
                className="login__input"
                required
                label="Password"
                type="password"
                value={userDetail.password}
                onChange={(e) => setUserDetail({ ...userDetail, password: e.target.value })}
                autoComplete="current-password"
                variant="standard"
            />
            <p>Already have an account? <Link to="/">Login</Link></p>
            <Button variant="outlined" onClick={signupHandle}>Sign up</Button>
        </div>
    </div >
}

export default Signup