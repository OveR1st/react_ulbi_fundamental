import React, { useMemo, useRef, useState } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCouner'
import PostItem from './components/PostItem'

import './styles/App.css'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'aaaa', body: 'ццц' },
		{ id: 2, title: 'бббб', body: 'уууу' },
		{ id: 3, title: 'вввв', body: 'аааа' },
		{ id: 4, title: 'гггг', body: 'мммм' },
	])
	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	function getSortedPosts() {
		console.log('CALL getSortedPosts')
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		}

		return posts
	}

	// const sortedPosts = getSortedPosts()
	const sortedPosts = useMemo(getSortedPosts, [selectedSort, posts])

	const addPostHandler = newPost => {
		setPosts([...posts, newPost])
	}

	const deletePostHandler = postId => {
		setPosts(posts.filter(post => post.id !== postId))
	}

	const selecteSortHandler = sort => {
		setSelectedSort(sort)
	}

	return (
		<div className="App">
			<PostForm create={addPostHandler} />
			<hr style={{ margin: '15px' }}></hr>
			<div>
				<MyInput
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					placeholder={'search....'}
				/>
				<MySelect
					value={selectedSort}
					onChange={selecteSortHandler}
					options={[
						{ value: 'title', name: 'По названию' },
						{ value: 'body', name: 'По описанию' },
					]}
					defaultValue={'Сортировка по: '}
				/>
			</div>

			{posts.length !== 0 ? (
				<PostList
					deletePostHandler={deletePostHandler}
					posts={sortedPosts}
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
