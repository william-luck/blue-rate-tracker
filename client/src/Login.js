import { useState } from "react";


function Login({ setUser }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // Fetch login route with POST, redux? 

        setUser(formData)

        setFormData({
            email: '',
            password: ''
        })
    }


    return (
        <>
        <form>
            Email:
            <input type='email' value={formData.email} onChange={handleChange} name='email'></input>
            {' '}
            Password: 
            <input type='password' value={formData.password} name='password' onChange={handleChange}></input>
            <button onClick={handleSubmit}>Login</button>
        </form>
        </>
    )
}

export default Login;