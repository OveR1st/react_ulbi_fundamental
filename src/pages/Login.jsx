import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../contex'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const navigate = useNavigate()

	const submit = e => {
		e.preventDefault()
		setIsAuth(true)
		navigate('/posts')
	}
	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={submit}>
				<MyInput type="text" placeholder="Login..." />
				<MyInput type="password" placeholder="Password..." />
				<MyButton>Enter</MyButton>
			</form>
		</div>
	)
}

export default Login
