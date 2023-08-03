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
import Loader from './components/UI/Loader/Loader'
import { useFetching } from './hooks/useFetching'
import { getPageCount } from './utils/pages'
import { usePagination } from './hooks/usePagination'

function App() {
	const [posts, setPosts] = useState([])

	const [filter, setFilter] = useState({ sort: '', query: '' })

	const [modal, setModal] = useState(false)

	const [totalPages, setTotalPages] = useState(0)

	const [limit, setLimit] = useState(8)
	const [page, setPage] = useState(1)

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		const totalPages = getPageCount(response.headers['x-total-count'], limit)

		setPosts(response.data)

		setTotalPages(totalPages)
	})

	const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

	const [pagesArray] = usePagination(totalPages)

	const addPostHandler = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const deletePostHandler = postId => {
		setPosts(posts.filter(post => post.id !== postId))
	}

	useEffect(() => {
		fetchPosts()
	}, [page])
	console.log('page', page)
	console.log('pagesArray', pagesArray)
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
			{postError && <h1>ERROR</h1>}
			{isPostsLoading ? (
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
					<Loader />
				</div>
			) : (
				<PostList
					deletePostHandler={deletePostHandler}
					posts={sortedAndSearchPosts}
					title={'Посты про JS'}
				/>
			)}

			<div className={'page__wrapper'}>
				{pagesArray.map(p => {
					return (
						<MyButton
							className={page === p ? 'page page__current' : 'page'}
							key={p}
							onClick={() => setPage(p)}
						>
							{p}
						</MyButton>
					)
				})}
			</div>
		</div>
	)
}

export default App
