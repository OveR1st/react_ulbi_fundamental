import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import PostItem from '../components/PostItem'

const PostPage = props => {
	const { id } = useParams()
	const [post, setPosts] = useState(null)
	const [postComment, setPostComment] = useState(null)

	const [fetchPostById, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getById(id)

		setPosts(response.data)
	})
	const [fetchPostCommentById, isPostsCommentLoading, postCommentError] = useFetching(
		async () => {
			const response = await PostService.getCommentsByPostId(id)

			setPostComment(response.data)
		}
	)

	useEffect(() => {
		fetchPostById()
		fetchPostCommentById()
	}, [])

	return (
		<div>
			<h1>Page post = {id}</h1>
			{isPostsLoading ? (
				<Loader />
			) : (
				<div>
					{post?.id} {post?.title}
				</div>
			)}

			<h1>Comment</h1>
			{isPostsCommentLoading ? (
				<Loader />
			) : (
				<div>
					{postComment?.map((comment, index) => (
						<div key={comment.id} style={{ marginTop: '15px' }}>
							<h5>{comment.email}</h5>
							<h5>{comment.body}</h5>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default PostPage
