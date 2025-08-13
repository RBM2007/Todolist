import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Components/styles/themes/default'
import { GlobalStyle } from './Components/styles/themes/global'
import { HeaderTodo } from './Components/Header'
import { Input } from './Components/Input'
import { PlusCircle } from 'phosphor-react'

import {
  ContentInfo,
  TaskInfoContainer,
  TaskListContainer,
  TaskButton,
} from './styles'
import { useState } from 'react'
import { Item } from './Components/Item'
import { ListHeader } from './Components/List/header'
import { Empty } from './Components/Empty'




export interface TaskProps {
  text: string
  id: number
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    return currentTask.isChecked ? prevValue + 1 : prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) return

    const newTask: TaskProps = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    if (!confirm('Deseja apagar esta tarefa?')) return
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  function handleToggleTask({
    id,
    value,
  }: {
    id: number
    value: boolean
  }) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: value } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <main>
        <HeaderTodo />

        <ContentInfo>
          <TaskInfoContainer>
            <Input
              placeholder="Adicione uma nova tarefa"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <TaskButton onClick={handleAddTask}>
              Criar Nova Tarefa
              <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </TaskButton>
          </TaskInfoContainer>
        </ContentInfo>

        <TaskListContainer>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div className="tasksList">
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </TaskListContainer>
      </main>
    </ThemeProvider>
  )
}
