import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
			<TransitionGroup>
				{posts.map((post, index) => (
					<CSSTransition key={post.id} timeout={500} classNames={'post'}>
						<PostItem
							deletePostHandler={deletePostHandler}
							number={index}
							post={post}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	)
}

export default PostList
