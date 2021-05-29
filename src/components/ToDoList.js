import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddTodo from './AddToDo';

class ToDoList extends Component {
    state = {
        todos: [
            { id: 1, task: 'To complete the ecommerce project', status: 'Pending' },
            { id: 2, task: 'To complete the React native project', status: 'Done' }
        ]
    };

    deleteToDo = (todo) => {
        const filteredItems = this.state.todos.filter(x => x.id !== todo.id);

        this.setState({
            todos: filteredItems
        });
    }

    editToDo = (x) => {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.Id === x.Id) {
                    return {
                        ...todo,
                        status: todo.status === "Done" ? "Done" : "Done"
                    };
                } else {
                    return todo;
                }
            })
        }));
    };

    addToDo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    };

    render() {
        return (
            <div>
                <AddTodo onAdd={this.addToDo}></AddTodo>
                <h1 style={{ alignItems: 'center', justifyContent: 'center' }}>ToDoList</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map(x => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.task}</td>
                                    <td style={{ color: x.status === 'Done' ? "green" : "red" }}>{x.status}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => this.deleteToDo(x)}>
                                            <span>
                                                <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                        <button className="btn btn-primary" onClick={() => this.editToDo(x)}>
                                            <span>
                                                <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ToDoList;
