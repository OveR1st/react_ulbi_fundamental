import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'

import MyButton from './UI/button/MyButton'

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' })

	const addNewPost = () => {
		const newPost = { id: new Date(), title: post.title, body: post.body }

		create(newPost)

		setPost({ title: '', body: '' })
	}

	return (
		<form onSubmit={event => event.preventDefault()}>
			{/*controll*/}
			<MyInput
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				type={'text'}
				placeholder={'Название поста'}
			/>
			{/* NOT controll*/}
			<MyInput
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				type={'text'}
				placeholder={'Описание поста'}
			/>

			<MyButton onClick={addNewPost}>Создать пост</MyButton>
		</form>
	)
}

export default PostForm
