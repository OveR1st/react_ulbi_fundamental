import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, title, deletePostHandler, isPython }) => {
	if (!posts.length) {
		return (
			<div style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold' }}>
				Посты не найдены!
			</div>
		)
	}

	return (
		<div>
			{' '}
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			{posts.map((post, index) => (
				<PostItem
					deletePostHandler={deletePostHandler}
					number={index}
					key={post.id}
					post={post}
				/>
			))}
		</div>
	)
}

export default PostList
