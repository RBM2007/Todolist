import { EmptyContainer, EmptyContainerP } from './styles'
import ClipBoard from '../../assets/clipboard.png'

export function Empty() {
  return (
    <EmptyContainer>
      <img src={ClipBoard} alt="ícone de prancheta" />
      <EmptyContainerP>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </EmptyContainerP>
    </EmptyContainer>
  )
}