import React, { useState } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCouner'
import PostItem from './components/PostItem'

import './styles/App.css'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript 1', body: 'Description 1' },
		{ id: 2, title: 'JavaScript 2', body: 'Description 2' },
		{ id: 3, title: 'JavaScript 3', body: 'Description 3' },
		{ id: 4, title: 'JavaScript 4', body: 'Description 4' },
	])
	const [posts2, setPosts2] = useState([
		{ id: 1, title: 'Python 1', body: 'Description 1' },
		{ id: 2, title: 'Python 2', body: 'Description 2' },
		{ id: 3, title: 'Python 3', body: 'Description 3' },
		{ id: 4, title: 'Python 4', body: 'Description 4' },
	])

	const [title, setTitle] = useState('')

	const addNewPost = () => {
		setPosts([...posts, { id: posts.length + 1, title, body: 'Новый пост' }])
	}

	console.log('posts', posts)

	return (
		<div className="App">
			<form onSubmit={event => event.preventDefault()}>
				<MyInput
					value={title}
					onChange={e => setTitle(e.target.value)}
					type={'text'}
					placeholder={'Название поста  JS'}
				/>
				<MyInput type={'text'} placeholder={'Название поста  Python'} />

				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>

			<PostList posts={posts} title={'Посты про  JS'} />
			<PostList posts={posts2} title={'Посты про Python'} />
		</div>
	)
}

export default App
