import React, {Component} from 'react'
import {connect} from "react-redux"
import {addTodo} from "../modules/actions"

class AddTodo extends Component {
    state = {
        text: ""
    }

    handleSubmit = e => {
        const text = this.state.text
        if(text !== "") {
            this.props.addTodo(text)
        } else {
            alert("텍스트를 입력하세요!!!")
        }
        e.preventDefault()
    }

    handleChange = e => {
        this.setState({text:e.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    <button>add</button>
                </form>
            </div>
        )
    }
}

// action을 dispatch로 감싼 형태의 함수를 만들어 준다.
// dispatch를 실재로 호출하는 곳에 map(props name:dispatch(action))객체를 반환한다.
const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => {
            dispatch(addTodo(todo))
        }
    }
}

// store에서 데이터를 가져와서 filtering해서 props로 전달한다. (나는 필요한 데이터만 받을 것이다.)
const mapStateToProps = state => {
    return {todos: state.todos}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)