import React, { Component } from "react";
export default class AddTodo extends Component {

    state = {
        id: "",
        task: "",
        status: "Pending"
    };

    handleIdChange = (event) => {
        this.setState({
            id: event.target.value
        });
    };
    handleTaskChange = (event) => {
        this.setState({
            task: event.target.value
        });
    }
    handleStatusChange = (event) => {
        this.setState({
            status: event.target.value
        });
    };

    handleToDoSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            id: this.state.id,
            task: this.state.task,
            Status: this.state.status
        });
        this.setState({
            id: "",
            task: "",
            status: "Pending"
        });
    };

    render() {
        return (
            <div>
                <h3>
                    Add ToDo
                </h3>
                <form onSubmit={this.handleToDoSubmit} >
                    <div className="form-group" >
                        <input value={this.state.id} onChange={this.handleIdChange} className="form-control" placeholder="Enter Id" />
                    </div>
                    <div className="form-group" >
                        <input value={this.state.task} onChange={this.handleTitleChange} className="form-control" placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <select value={this.state.status} onChange={this.handleStatusChange} className="form-control" >
                            <option value="Done" >Done</option>
                            <option value="Pending" >Pending</option>
                        </select>
                    </div>
                    <button type="submit" className="form-control btn btn-primary" >Add Todo</button>
                </form>
            </div>
        );
    }
}