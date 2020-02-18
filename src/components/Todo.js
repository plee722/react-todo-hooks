import React, { useState, useEffect } from 'react'
import './Todo.css'
import Task from './Task'
import CreateTask from './CreateTask'


function Todo() {
  const [tasksRemaining, setTasksRemaining] = useState(0)
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

  useEffect(() => {
    setTasksRemaining(tasks.filter(task => !task.completed).length)
  })

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
      <div className="header">Pending tasks ({tasksRemaining})</div>
      <div className="header">ToDo Items</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} completeTask={completeTask} removeTask={removeTask} key={index} />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  )
}

export default Todo
