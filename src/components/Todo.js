import React, { useState } from 'react'
import './Todo.css'
import Task from './Task'
import CreateTask from './CreateTask'


function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Study algorithms",
      completed: true
    },
    {
      title: "Go workout",
      completed: true
    },
    {
      title: "Create a project",
      completed: false
    }
  ])

  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }]
    setTasks(newTasks)
  }

  const completeTask = index => {
    const newTasks = [...tasks]
    newTasks[index].completed = true
    setTasks(newTasks)
  }

  const removeTask = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className="todo-container">
      <div className="header">ToDo Items</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} completeTask={completeTask} removeTask={removeTask} />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  )
}

export default Todo
