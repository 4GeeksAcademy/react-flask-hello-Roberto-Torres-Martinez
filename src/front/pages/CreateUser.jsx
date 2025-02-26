import { useState } from "react"
import { newUser } from "../services/APIServices"
import { Link } from "react-router-dom"

export const CreateUser = () => {

    const [change, setChange] = useState({})

    console.log(change);
    

    const handleChange = (event) => {
        setChange({ ...change, [event.target.name]: event.target.value })
    }
    return (
        <>
            <div className="container-fluid create-user-container">
                <div className="create-user row col-md-12 w-25 d-flex justify-content-center">
                    <h1 className="create-title text-center">Create Account</h1>
                    <label className="label-email" htmlFor="email">
                        E-mail
                    </label>
                    <input className="input-email mt-2" type="email" name="email" placeholder="Put your e-mail" onChange={(e) => { handleChange(e) }}>
                    </input>
                    <label className="label-password mt-2" htmlFor="password">
                        Password
                    </label>
                    <input className="input-password mt-2" type="password" name="password" placeholder="Put your password" onChange={(e) => { handleChange(e) }}>
                    </input>
                    <button className="button-create mt-4 w-25" onClick={() => { newUser(change) }}>Create Account</button>
                </div>
            </div>
        </>
    )
}