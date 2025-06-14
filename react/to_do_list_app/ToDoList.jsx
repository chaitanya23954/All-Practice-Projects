import { useState } from 'react'

function ToDoList() {
  const [tasks, setTasks] = useState([
    'Brush Your Teeth',
    'Eat Breakfast',
    'Take a Shower',
  ])
  const [newTask, setNewTask] = useState('')

  function inputChangeHandler(event) {
    setNewTask(event.target.value)
  }

  function addNewTask() {
    if (newTask.trim() !== '') {
      setTasks((t) => [...t, newTask])
      setNewTask('')
    }
  }

  function RemoveTaskHandler(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks]

      ;[updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ]
      setTasks(updatedTasks)
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTask = [...tasks]

      ;[updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ]
      setTasks(updateTask)
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a Task"
          value={newTask}
          onChange={inputChangeHandler}
        />

        <button className="add-button" onClick={addNewTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((t, index) => (
          <li key={index}>
            <span className="text">{t}</span>
            <button
              className="delete-button"
              onClick={() => RemoveTaskHandler(index)}
            >
              Delete
            </button>

            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>

            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ToDoList
