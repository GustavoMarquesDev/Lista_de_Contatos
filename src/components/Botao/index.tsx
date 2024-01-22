import { ButtonEditar, NewButton, VoltarButton } from './styled'

type Props = {
  children: string
}

export const Botao = ({ children }: Props) => (
  <ButtonEditar>{children}</ButtonEditar>
)

export const BotaoAdicionar = () => <NewButton to="/novo">+ Novo</NewButton>

export const BotaoVoltar = () => <VoltarButton to="/">X</VoltarButton>
