import React, { useState } from 'react'

const Counter = () => {
	const [likes, setLikes] = useState(0)
	const [value, setValue] = useState('текст в инпуте')

	function increment() {
		setLikes(likes + 1)
	}
	function decIncrement() {
		setLikes(likes - 1)
	}
	return (
		<div>
			<h1>{likes}</h1>
			<h1>{value}</h1>
			<input type="text" value={value} onChange={e => setValue(e.target.value)} />

			<button onClick={increment}>Increment</button>
			<button onClick={decIncrement}> Decrement</button>
		</div>
	)
}

export default Counter
