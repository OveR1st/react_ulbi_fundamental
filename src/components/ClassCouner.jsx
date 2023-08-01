import React from 'react'

class ClassCounter extends React.Component {
	state = {
		likes: 0,
		value: 'текст в инпуте',
	}

	increment() {
		this.setState({ likes: this.state.likes + 1 })
	}
	decIncrement() {
		this.setState({ likes: this.state.likes - 1 })
	}

	render() {
		const { likes, value } = this.state
		return (
			<div>
				<h1>{likes}</h1>
				<h1>{value}</h1>
				<input
					type="text"
					value={value}
					onChange={e => this.setState({ value: e.target.value })}
				/>

				<button onClick={this.increment.bind(this)}>Increment</button>
				<button onClick={this.decIncrement.bind(this)}> Decrement</button>
			</div>
		)
	}
}

export default ClassCounter
