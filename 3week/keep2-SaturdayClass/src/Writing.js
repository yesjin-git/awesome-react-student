import React,{Component} from 'react'

class Writing extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInputTitle: "test",
			userInputContent: "test content",
			isWritingTitleFocused: false,
		}
	}

	handleSubmit = (e) => {
		console.log('submitted')
		this.props.save(this.state)
		this.setState({
			userInputTitle: '',
			userInputContent: ''
		})
		e.preventDefault();
	}

	handleChange = (event) => {
		console.log('userInput is ' + this.state.userInput)
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleFocus = (event) => {
		if(!this.state.isWritingTitleFocused) {
			this.setState({
				isWritingTitleClicked: true
			})
		}
	}

	render() {
		const writingTitle = (
			<div className="input-field">
				<input
					type='text'
					name='userInputTitle'
					value={this.state.userInputTitle}
					onChange={this.handleChange}
					onFocus={this.handleFocus}
				/>
			</div>
		)

		const writingContent = (
			<input
				type='text'
				name='userInputContent'
				value={this.state.userInputContent}
				onChange={this.handleChange}
			/>
		)

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					{writingTitle}
					{this.state.isWritingTitleFoucused ? writingContent : ""}
					<input
						type='submit'
						value='Submit'
					/>
				</form>
			</div >
		)
	}
}

export default Writing