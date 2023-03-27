import { useState } from "react";
import { addSession } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";


function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const errors = useSelector(state => state.users.errors)

    function handleChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addSession(formData))
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

        {errors?.map(error => <li>{error}</li>)}


        </>
    )
}

export default Login;