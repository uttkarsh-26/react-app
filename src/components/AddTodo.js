import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="title"
          value={this.state.title}
          className="form-control"
          placeholder="Enter a Todo task"
          onChange={this.onChange}
        ></input>
        <input className="btn-success my-2" type="submit" value="Add"></input>
      </form>
    );
  }
}
