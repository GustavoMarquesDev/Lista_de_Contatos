import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { ButtonEditar, ButtonRemove } from '../Botao/styled'
import { Card, Dados } from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

type Props = Contato

const CardContatos = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeDescricao, setNomeDescricao] = useState('')
  const [emailDescricao, setEmailDescricao] = useState('')
  const [telefoneDescricao, setTelefoneDescricao] = useState('')

  const valorOriginal = () => {
    return (
      setEstaEditando(false),
      setNomeDescricao(nomeDescricao),
      setEmailDescricao(emailDescricao),
      setTelefoneDescricao(telefoneDescricao)
    )
  }

  return (
    <Card>
      <Dados
        placeholder="Digite um nome"
        value={nomeDescricao}
        onChange={(e) => setNomeDescricao(e.target.value)}
        disabled={!estaEditando}
      ></Dados>
      <Dados
        placeholder="Digite um e-mail"
        disabled={!estaEditando}
        value={emailDescricao}
        onChange={(e) => setEmailDescricao(e.target.value)}
      ></Dados>
      <Dados
        placeholder="Digite um celular"
        disabled={!estaEditando}
        value={telefoneDescricao}
        onChange={(e) => setTelefoneDescricao(e.target.value)}
      ></Dados>
      {estaEditando ? (
        <>
          <ButtonEditar
            onClick={() => {
              dispatch(
                editar({
                  id,
                  nome,
                  email,
                  telefone
                })
              )
              setEstaEditando(false)
            }}
          >
            Salvar
          </ButtonEditar>
          <ButtonRemove onClick={valorOriginal}>Cancelar</ButtonRemove>
        </>
      ) : (
        <>
          <ButtonEditar onClick={() => setEstaEditando(true)}>
            Editar
          </ButtonEditar>
          <ButtonRemove onClick={() => dispatch(remover(id))}>
            Excluir
          </ButtonRemove>
        </>
      )}
    </Card>
  )
}

export default CardContatos
