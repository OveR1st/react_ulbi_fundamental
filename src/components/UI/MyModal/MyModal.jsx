import React from 'react'
import cl from './MyModal.module.css'
const MyModal = ({ children, visible, setModal }) => {
	const rootClasses = [cl.myModal]

	if (visible) {
		rootClasses.push(cl.active)
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
			<div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default MyModal
