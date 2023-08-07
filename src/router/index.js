import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Login from '../pages/Login'
import PostPage from '../pages/PostPage'
import Posts from '../pages/Posts'
import { Navbar } from '../components/UI/Navbar/Navbar'

export const publicRoutes = [
	{
		path: '/',
		element: <Navbar />,
		children: [
			{
				path: 'posts',
				element: <Posts />,
			},
			{
				path: 'posts/:id',
				element: <PostPage />,
			},
			{ path: '/about', element: <About /> },
			{ path: '*', element: <Navigate to={'/posts'} /> },
		],
	},
]
export const privateRoutes = [
	{ path: '/login', element: <Login /> },
	{ path: '*', element: <Navigate to={'/login'} /> },
]
