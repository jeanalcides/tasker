import { useState } from 'react'
import './App.css'
import { FaPlusCircle } from 'react-icons/fa'
import { TaskItem } from './Components/TaskItem/TaskItem'

function App() {

  return (
    <div className="App">
      <div className="header-box">
        <h2 className="title-app">Tasker <span>Task Management</span></h2>
        {/* <button className="addTaskButton primaryButton"><FaPlusCircle/>Nova Tarefa</button>         */}
      </div>
      <div className="content-box">
        <div className="tasks-box">
          <h1 className="title-header-tasks">Minhas Tarefas</h1>
          <div className="box-add-tasks box-general-tasks">
            <div className="box-add-tasks-left">
              <div className="box-input-name-task">
                <p className="title-input-name-task">Nome</p>
                <input type="text" className="input-name-task input-tasks"/>
              </div>
              <div className="box-input-desc-task">
                <p className="title-input-desc-task">Descrição</p>
                <input type="text" className="input-desc-task input-tasks"/>
              </div>
            </div>
            <div className="box-add-tasks-right">
              <button className="add-task-button">Adicionar</button>
            </div>
          </div>
          <div className="box-show-tasks box-general-tasks">
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
