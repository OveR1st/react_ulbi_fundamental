import React, { useRef, useState } from 'react'
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

	const addPostHandler = newPost => {
		setPosts([...posts, newPost])
	}

	const deletePostHandler = postId => {
		setPosts(posts.filter(post => post.id !== postId))
	}

	const [selecteSort, setSelectedSort] = useState('')
	const selecteSortHandler = sort => {
		setSelectedSort(sort)
		console.log('selected sort', sort)
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
	}

	return (
		<div className="App">
			<PostForm create={addPostHandler} />
			<hr style={{ margin: '15px' }}></hr>
			<div>
				<MySelect
					value={selecteSort}
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
					posts={posts}
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
