import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { ButtonEditar, ButtonRemove } from '../Botao/styled'
import { Card, Dados, EmailIcon, PhoneIcon, UserIcon } from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { FaPhoneSquare } from 'react-icons/fa'

type Props = Contato

const CardContatos = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeDescricao, setNomeDescricao] = useState(nome)
  const [emailDescricao, setEmailDescricao] = useState(email)
  const [telefoneDescricao, setTelefoneDescricao] = useState(telefone)

  const valorOriginal = () => {
    return (
      setEstaEditando(false),
      setNomeDescricao(nome),
      setEmailDescricao(email),
      setTelefoneDescricao(telefone)
    )
  }

  return (
    <Card>
      <Dados
        placeholder="Digite um nome"
        disabled={!estaEditando}
        value={nomeDescricao}
        onChange={(e) => setNomeDescricao(e.target.value)}
      ></Dados>
      <UserIcon>
        <FaUser />
      </UserIcon>

      <Dados
        placeholder="Digite um e-mail"
        disabled={!estaEditando}
        value={emailDescricao}
        onChange={(e) => setEmailDescricao(e.target.value)}
      ></Dados>
      <EmailIcon>
        <MdOutlineMailOutline />
      </EmailIcon>

      <Dados
        placeholder="Digite um celular"
        type="number"
        disabled={!estaEditando}
        value={telefoneDescricao}
        onChange={(e) => setTelefoneDescricao(+e.target.value)}
      ></Dados>
      <PhoneIcon>
        <FaPhoneSquare />
      </PhoneIcon>

      {estaEditando ? (
        <>
          <ButtonEditar
            onClick={() => {
              dispatch(
                editar({
                  id,
                  nome: nomeDescricao,
                  email: emailDescricao,
                  telefone: telefoneDescricao
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
