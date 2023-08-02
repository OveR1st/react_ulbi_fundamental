import React, { useMemo, useState } from 'react'

import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'

import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'aaaa', body: 'ццц' },
		{ id: 2, title: 'бббб', body: 'уууу' },
		{ id: 3, title: 'вввв', body: 'аааа' },
		{ id: 4, title: 'гггг', body: 'мммм' },
	])

	const [filter, setFilter] = useState({ sort: '', query: '' })

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}

		return posts
	}, [filter.sort, posts])

	const sortedAndSearchPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(filter.query.toLowerCase())
		)
	}, [filter.query, sortedPosts])

	const addPostHandler = newPost => {
		setPosts([...posts, newPost])
	}

	const deletePostHandler = postId => {
		setPosts(posts.filter(post => post.id !== postId))
	}

	return (
		<div className="App">
			<PostForm create={addPostHandler} />
			<hr style={{ margin: '15px' }}></hr>

			<PostFilter filter={filter} setFilter={setFilter} />

			{sortedAndSearchPosts.length !== 0 ? (
				<PostList
					deletePostHandler={deletePostHandler}
					posts={sortedAndSearchPosts}
					title={'Посты про JS'}
				/>
			) : (
				<div style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold' }}>
					Посты не найдены!
				</div>
			)}
		</div>
	)
}

export default App
