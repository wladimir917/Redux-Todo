import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    handleChange = (e) => {
        this.setState({task: e.target.value});
    }

    newTask = () => {
        this.props.addTodo(this.state.todo);
        this.setState({todo:''});
    }

    render() { 
        return (
            <div className="new-todo">
                <form onSubmit={this.newTodo}>
                    <input name="todo" type="text" placeholder="new todo" value={this.state.todo}
                        onChange={this.handleChange}/>
                    <button className="submit-btn">Add Todo</button>
                </form>
            </div>
        )
    }
}
 
export default connect(null, {addTodo})(NewTodo);