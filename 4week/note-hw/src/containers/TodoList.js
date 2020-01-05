import React, {Component} from 'react'
import Todo from "../components/Todo"
import {connect} from "react-redux"
import {delTodo} from "../modules/actions"

class TodoList extends Component {

    handleDeleteTodo = (e) => {
        this.props.delTodo(e.target.value)
        e.preventDefault()
    }

    render() {
        const {todos} = this.props
        return (
            <ul>
                {
                    todos.map((todo, index) => (
                        // 컴포넌트마다 unique key를 할당해주면 component를 찾을 때 사용할 수 있다.
                        // warn도 발생하지 않도록 막을 수 있다.
                        <Todo key={index} todo={todo} no={index} del={this.handleDeleteTodo} />
                    ))
                }
            </ul>
        )
    }
}

// action을 dispatch로 감싼 형태의 함수를 만들어 준다.
// dispatch를 실재로 호출하는 곳에 map(props name:dispatch(action))객체를 반환한다.
const mapDispatchToProps = dispatch => {
    return {
        delTodo: no => {
            dispatch(delTodo(no))
        }
    }
}

// store에서 데이터를 가져와서 filtering해서 props로 전달한다. (나는 필요한 데이터만 받을 것이다.)
const mapStateToProps = state => {
    return {todos: state.todos}
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)