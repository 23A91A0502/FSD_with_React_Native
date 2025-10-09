import React, { useState } from "react";
import "./ToDoApp.css";
import todoimg from "./assets/to-do-img.png";

const ToDoApp = () => {
    const [UserEnteredTask, setUserEnteredTask] = useState("");
    const [Tasks, setTasks] = useState([]);

    const addTask = () => {
        if (UserEnteredTask.trim() === "") return;
        setTasks((prev) => [...prev, UserEnteredTask]);
        setUserEnteredTask("");
    };

    return (
        <div className="grand-parent">
            <div className="parent">
                <div className="heading">
                    <h2>To-Do List</h2>
                    <img src={todoimg} className="to-do-img" alt="todo" />
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        value={UserEnteredTask}
                        onChange={(e) => setUserEnteredTask(e.target.value)}
                        placeholder="Add your task"
                    />
                    <button onClick={addTask}>ADD</button>
                </div>

                {/* scrollable area */}
                <div className="task-list">
                    {Tasks.map((ele, index) => {
                        return (
                            <div className="task-item" key={index}>
                                <input type="checkbox" />
                                <span className="task-text">{ele}</span>
                                <span className="delete-btn">✕</span>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    );
};

export default ToDoApp;
