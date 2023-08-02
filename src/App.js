import React, { useRef, useState } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCouner'
import PostItem from './components/PostItem'

import './styles/App.css'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

import PostForm from './components/PostForm'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript 1', body: 'Description 1' },
		{ id: 2, title: 'JavaScript 2', body: 'Description 2' },
		{ id: 3, title: 'JavaScript 3', body: 'Description 3' },
		{ id: 4, title: 'JavaScript 4', body: 'Description 4' },
	])

	const addPostHandler = newPost => {
		setPosts([...posts, newPost])
	}

	const deletePostHandler = postId => {
		setPosts(posts.filter(post => post.id !== postId))
	}

	return (
		<div className="App">
			<PostForm create={addPostHandler} />
			<PostList deletePostHandler={deletePostHandler} posts={posts} title={'Посты про JS'} />
		</div>
	)
}

export default App
