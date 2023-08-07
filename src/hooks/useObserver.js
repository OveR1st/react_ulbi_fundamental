import { useEffect, useRef } from 'react'

export const useObserver = (ref, canLoad, isLoading, callBack) => {
	const observer = useRef(null)

	useEffect(() => {
		if (isLoading) return
		if (observer.current) observer.current.disconnect()

		observer.current = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && canLoad) {
				callBack()
			}
		})
		observer.current.observe(ref.current)
	}, [isLoading])
}
