import React, { useState } from 'react'
import './Todo.css'
import Task from './Task'


function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some pizza",
      completed: true
    },
    {
      title: "Do your workout",
      completed: true
    },
    {
      title: "Hangout with friends",
      completed: false
    }
  ])

  return (
    <div className="todo-container">
      <div className="header">ToDo Items</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Todo
