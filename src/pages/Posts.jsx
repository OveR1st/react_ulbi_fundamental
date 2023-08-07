import React, { useEffect, useRef, useState } from 'react'
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
import { useObserver } from '../hooks/useObserver'
import MySelect from '../components/UI/select/MySelect'

function Posts() {
	const [posts, setPosts] = useState([])

	const [filter, setFilter] = useState({ sort: '', query: '' })

	const [modal, setModal] = useState(false)

	const [totalPages, setTotalPages] = useState(0)

	const [limit, setLimit] = useState(8)
	const [page, setPage] = useState(1)

	const lastItemRef = useRef(null)

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		const totalPages = getPageCount(response.headers['x-total-count'], limit)

		setPosts([...posts, ...response.data])

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
	}, [page, limit])

	useObserver(lastItemRef, page < totalPages, isPostsLoading, () => setPage(page + 1))

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

			<MySelect
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue={'Current elements in page'}
				options={[
					{ value: 5, name: '5' },
					{ value: 10, name: '10' },
					{ value: 15, name: '15' },
					{ value: -1, name: 'Show all' },
				]}
			/>

			{postError && <h1>ERROR</h1>}

			{isPostsLoading && (
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
					<Loader />
				</div>
			)}

			<PostList
				deletePostHandler={deletePostHandler}
				posts={sortedAndSearchPosts}
				title={'Посты про JS'}
			/>
			<div ref={lastItemRef} style={{ height: '20px', backgroundColor: 'red' }}></div>

			<Pagination pagesArray={pagesArray} page={page} setPage={setPage} />
		</>
	)
}

export default Posts
