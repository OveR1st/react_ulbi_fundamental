import React, { useEffect, useMemo, useState } from 'react'

import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'

import './styles/App.css'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts, useSortedPosts } from './hooks/usePosts'
import axios from 'axios'
import PostService from './API/PostService'

function App() {
	const [posts, setPosts] = useState([])

	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [isPostsLoading, setIsPostsLoading] = useState(false)

	const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

	const addPostHandler = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const deletePostHandler = postId => {
		setPosts(posts.filter(post => post.id !== postId))
	}

	async function fetchPosts() {
		setIsPostsLoading(true)

		setTimeout(async () => {
			const posts = await PostService.getAll()

			setPosts(posts)
			setIsPostsLoading(false)
		}, 1000)
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	console.log('isPostsLoading', isPostsLoading)
	return (
		<div className="App">
			<MyButton style={{ marginTop: '30px' }} onClick={fetchPosts}>
				GET POSTS
			</MyButton>
			<MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
				Создать пользователя
			</MyButton>
			<MyModal visible={modal} setModal={setModal}>
				<PostForm create={addPostHandler} />
			</MyModal>
			<hr style={{ margin: '15px' }}></hr>

			<PostFilter filter={filter} setFilter={setFilter} />

			{isPostsLoading ? (
				<h1>Загрузка </h1>
			) : (
				<PostList
					deletePostHandler={deletePostHandler}
					posts={sortedAndSearchPosts}
					title={'Посты про JS'}
				/>
			)}
		</div>
	)
}

export default App
