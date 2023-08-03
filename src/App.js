import React, { useMemo, useState } from 'react'

import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'

import './styles/App.css'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'aaaa', body: 'ццц' },
		{ id: 2, title: 'бббб', body: 'уууу' },
		{ id: 3, title: 'вввв', body: 'аааа' },
		{ id: 4, title: 'гггг', body: 'мммм' },
	])

	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)

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
		setModal(false)
	}

	const deletePostHandler = postId => {
		setPosts(posts.filter(post => post.id !== postId))
	}

	return (
		<div className="App">
			<MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
				Создать пользователя
			</MyButton>
			<MyModal visible={modal} setModal={setModal}>
				<PostForm create={addPostHandler} />
			</MyModal>
			<hr style={{ margin: '15px' }}></hr>

			<PostFilter filter={filter} setFilter={setFilter} />

			<PostList
				deletePostHandler={deletePostHandler}
				posts={sortedAndSearchPosts}
				title={'Посты про JS'}
			/>
		</div>
	)
}

export default App
