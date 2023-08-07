import About from '../pages/About'
import PostPage from '../pages/PostPage'
import Posts from '../pages/Posts'

export const routsArr = [
	{ path: 'posts', element: <Posts /> },
	{
		path: 'posts/:id',
		element: <PostPage />,
	},
	{ path: '/about', element: <About /> },
]
