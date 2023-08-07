import React from 'react'
import MyButton from './UI/button/MyButton'

import { useNavigate } from 'react-router-dom'

const PostItem = ({ post, number, deletePostHandler }) => {
	let navigate = useNavigate()

	return (
		<div className="post">
			<div className="post__content">
				<strong>
					{post.id}. {post.title}
				</strong>
				<div>{post.body}</div>
			</div>

			<div className="post__btns">
				<MyButton onClick={() => navigate(`/posts/${post.id}`, { state: { ...post } })}>
					Открыть
				</MyButton>
				<MyButton onClick={() => deletePostHandler(post.id)}>Удалить</MyButton>
			</div>
		</div>
	)
}

export default PostItem
