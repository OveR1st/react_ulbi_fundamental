import React, { useEffect, useState } from 'react'
import PostService from '../API/PostService'

import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'

import MyModal from '../components/UI/MyModal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/Loader/Loader'

import '../styles/App.css'

import { usePosts } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'
import { usePagination } from '../hooks/usePagination'

import { getPageCount } from '../utils/pages'
import Pagination from '../components/UI/pagination/Pagination'

function Posts() {
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

	return (
		<>
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

			<Pagination pagesArray={pagesArray} page={page} setPage={setPage} />
		</>
	)
}

export default Posts
