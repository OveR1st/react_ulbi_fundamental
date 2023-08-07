import React, { useEffect, useState } from 'react'

import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'

import { publicRoutes, privateRoutes } from './router'
import { AuthContext } from './contex'

function App() {
	const [isAuth, setIsAuth] = useState(false)

	const router = createBrowserRouter(isAuth ? publicRoutes : privateRoutes)

	useEffect(() => {
		if (localStorage.getItem('auth') === 'true') {
			setIsAuth(true)
		}
	}, [])

	return (
		<div className="App">
			<AuthContext.Provider value={{ isAuth, setIsAuth }}>
				<RouterProvider router={router} />
			</AuthContext.Provider>
		</div>
	)
}

export default App
