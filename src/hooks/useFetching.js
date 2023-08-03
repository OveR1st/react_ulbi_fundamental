import { useState } from 'react'

export const useFetching = callback => {
	const [isPostLoading, setIsPostLoading] = useState(false)
	const [postError, setPostError] = useState('')

	async function fetching() {
		try {
			setIsPostLoading(true)
			await callback()
		} catch (error) {
			setPostError(error)
		} finally {
			setIsPostLoading(false)
		}
	}

	return [fetching, isPostLoading, postError]
}
