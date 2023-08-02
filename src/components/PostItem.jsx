import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = ({ post, number, deletePostHandler, isPython }) => {
	return (
		<div className="post">
			<div className="post__content">
				<strong>
					{number}. {post.title}
				</strong>
				<div>{post.body}</div>
			</div>

			<div className="post__btns">
				<MyButton onClick={() => deletePostHandler(post.id, isPython)}>Удалить</MyButton>
			</div>
		</div>
	)
}

export default PostItem
