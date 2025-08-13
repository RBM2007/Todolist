import { Trash, Check } from 'phosphor-react'
import type { TaskProps } from '../../App'
import { TaskContainer, CheckBoxContainer, ParaContainer, TaskContainerLabel, CheckButton } from './styles'


interface Props {
  data: TaskProps
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  function handleRemove() {
    removeTask(data.id)
  }

  return (
    <TaskContainer>
      <div>
        <TaskContainerLabel htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <CheckBoxContainer checked={data.isChecked}>
            {data.isChecked && <Check size={12} />}
          </CheckBoxContainer>
          <ParaContainer checked={data.isChecked}>
            {data.text}
          </ParaContainer>
        </TaskContainerLabel>
      </div>

      <CheckButton onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </CheckButton>
    </TaskContainer>
  )
}
