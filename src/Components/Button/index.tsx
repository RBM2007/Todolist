import { ButtonTasks } from "./styles"


type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...rest }: Props) {
  return (
    <ButtonTasks {...rest}>
      {children}
    </ButtonTasks>
  )
}