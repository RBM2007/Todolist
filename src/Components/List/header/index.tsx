import { AsideContainer, HeaderContainer, SpanContainer } from './styles'

interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function ListHeader({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <HeaderContainer>
      <AsideContainer variant="blue">
        <p>Tarefas criadas</p>
        <SpanContainer>{tasksCounter}</SpanContainer>
      </AsideContainer>

      <AsideContainer variant="purple">
        <p>Concluídas</p>
        <SpanContainer>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </SpanContainer>
      </AsideContainer>
    </HeaderContainer>
  )
}
