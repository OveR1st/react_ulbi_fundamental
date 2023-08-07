import { Link, Outlet } from 'react-router-dom'

export const Navbar = () => {
	return (
		<>
			<div className="navbar_section">
				<Link to="/">Home</Link>
				<Link to="/posts">Posts</Link>
				<Link to="/about">About</Link>
			</div>
			<Outlet />
		</>
	)
}
