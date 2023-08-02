import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'

import MyButton from './UI/button/MyButton'

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' })

	const addNewPost = () => {
		const newPostJS = { id: new Date(), title: post.title, body: 'Новый пост JS' }
		const newPostPython = { id: new Date(), title: post.body, body: 'Новый пост Python' }

		create(newPostJS, newPostPython)

		setPost({ title: '', body: '' })
	}

	return (
		<form onSubmit={event => event.preventDefault()}>
			{/*controll*/}
			<MyInput
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				type={'text'}
				placeholder={'Название поста  JS'}
			/>
			{/* NOT controll*/}
			<MyInput
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				type={'text'}
				placeholder={'Название поста  Python'}
			/>

			<MyButton onClick={addNewPost}>Создать пост</MyButton>
		</form>
	)
}

export default PostForm
