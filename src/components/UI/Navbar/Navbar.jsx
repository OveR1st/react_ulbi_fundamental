import { Link, Outlet } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { useContext } from 'react'
import { AuthContext } from '../../../contex'

export const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)

	const logaut = () => {
		localStorage.setItem('auth', 'false')
		setIsAuth(false)
	}
	return (
		<>
			<div className="navbar_section">
				<MyButton onClick={logaut}>Выйти</MyButton>
				<div>
					<Link to="/">Home</Link>
					<Link to="/posts">Posts</Link>
					<Link to="/about">About</Link>
				</div>
			</div>

			<Outlet />
		</>
	)
}
