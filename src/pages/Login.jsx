import { Container, Button, TextField } from "@mui/material"
import { useState } from "react";
import { Link, redirect } from "react-router-dom"
import { login } from "../apiClient/userApi";
import { userStore } from "../store";
import "../styles/login.css"
const Login = () => {
    const [userDetail, setUserDetail] = useState({
        email: '',
        password: ''
    });
    const loginHandle = () => {
        console.log(userDetail);
        login(userDetail).then(res => {
            console.log(res);
            userStore.update(s => {
                s.isLoggedIn = true
                s.token = res
            })
            window.location.href = "/"
        }).catch(err => console.log(err));
    }
    return <div className="login">
        <div className="login__container">
            <h1>Login</h1>
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
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            <Button variant="outlined" onClick={loginHandle}>Login</Button>
        </div>
    </div >
}

export default Login