import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder={'search....'}
			/>
			<MySelect
				value={filter.sort}
				onChange={option => {
					setFilter({ ...filter, sort: option })
				}}
				options={[
					{ value: 'title', name: 'По названию' },
					{ value: 'body', name: 'По описанию' },
				]}
				defaultValue={'Сортировка по: '}
			/>
		</div>
	)
}

export default PostFilter
