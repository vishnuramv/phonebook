import { Box, Button, TextField } from "@mui/material"
import "../styles/login.css"
const Login = () => {
    return <div className="login">
        <Box>
            <h1>Login</h1>
            <div>
                <TextField
                    required
                    label="Email"
                    defaultValue="Hello World"
                    variant="standard"
                />
                <TextField
                    required
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <Button variant="outlined">Outlined</Button>
            </div>
        </Box>
    </div>
}

export default Login