import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = ({ post, number }) => {
	return (
		<div className="post">
			<div className="post__content">
				<strong>
					{number}. {post.title}
				</strong>
				<div>{post.body}</div>
			</div>

			<div className="post__btns">
				<MyButton>Удалить</MyButton>
			</div>
		</div>
	)
}

export default PostItem
