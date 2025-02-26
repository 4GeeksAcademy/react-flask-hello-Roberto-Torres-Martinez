import { Link } from "react-router-dom";
import { loginUser } from "../services/APIServices"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate()

    const [change, setChange] = useState({})

    const handleClick = () => {
        loginUser(change, navigate);
    };

    const handleLogin = (event) => {
        setChange({ ...change, [event.target.name]: event.target.value })
    };

    return (
        <>
            <div className="container-fluid login-user-container">
                <div className="login-user row col-md-12 w-25 d-flex justify-content-center">
                    <h1 className="login-title text-center">Login</h1>
                    <label className="label-email" htmlFor="email">
                        E-mail
                    </label>
                    <input className="input-email mt-2" type="email" name="email" placeholder="Put your e-mail" onChange={(e) => { handleLogin(e) }}>
                    </input>
                    <label className="mt-2 label-password" htmlFor="password">
                        Password
                    </label>
                    <input className="input-password mt-2" type="password" name="password" placeholder="Put your password" onChange={(e) => { handleLogin(e) }}>
                    </input>
                    <button className="button-login mt-4 w-25" onClick={handleClick}>Login</button>
                </div>
            </div>
        </>
    )
}