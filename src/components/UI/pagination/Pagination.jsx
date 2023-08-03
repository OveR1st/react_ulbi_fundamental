import React from 'react'
import MyButton from '../button/MyButton'

const Pagination = ({ pagesArray, page, setPage }) => {
	return (
		<div className={'page__wrapper'}>
			{pagesArray.map(p => {
				return (
					<MyButton
						className={page === p ? 'page page__current' : 'page'}
						key={p}
						onClick={() => setPage(p)}
					>
						{p}
					</MyButton>
				)
			})}
		</div>
	)
}

export default Pagination
