import { ButtonEditar, ButtonRemove } from '../Botao/styled'
import { Card, Dados } from './styles'
import { useState } from 'react'

type Props = {
  nome: string
  email: string
  telefone: number
}

const CardContatos = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <Card>
      <Dados value={nome}></Dados>
      <Dados value={email}></Dados>
      <Dados value={telefone}></Dados>
      {estaEditando ? (
        <>
          <ButtonEditar>Salvar</ButtonEditar>
          <ButtonRemove onClick={() => setEstaEditando(false)}>
            Cancelar
          </ButtonRemove>
        </>
      ) : (
        <>
          <ButtonEditar onClick={() => setEstaEditando(true)}>
            Editar
          </ButtonEditar>
          <ButtonRemove>Excluir</ButtonRemove>
        </>
      )}
    </Card>
  )
}

export default CardContatos
