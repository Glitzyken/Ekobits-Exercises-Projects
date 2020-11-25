import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <div className="header-1">
          <h3>Today</h3> <span>☂</span>
        </div>

        <div className="header-2">
          <p>
            <strong>Today</strong> <span>November 24</span>
          </p>
        </div>

        <div>
          <Todo />
          <Todo />
        </div>
      </div>
    );
  }
}
