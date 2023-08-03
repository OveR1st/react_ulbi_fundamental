import React from 'react'

import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import Posts from './pages/Posts'
import About from './pages/About'

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

const router = createBrowserRouter([
	{
		element: <Navbar />,
		children: [
			{
				path: '/',
				element: <div>MAIN PAGE</div>,
			},
			{
				path: '/posts',
				element: <Posts />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
])

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}

export default App
