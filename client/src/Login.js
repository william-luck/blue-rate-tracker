import { useState } from "react";
import { addUser } from "./usersSlice";
import { useDispatch } from "react-redux";


function Login({ setUser }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    function handleChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addUser(formData))
        

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