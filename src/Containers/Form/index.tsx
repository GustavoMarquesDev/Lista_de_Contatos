import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BotaoVoltar } from '../../components/Botao'
import { ButtonAdicionar } from './styles'
import { FormUsuario } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'

const Form = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  console.log(itens)

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    const contatoParaAdicionar = new Contato(
      9,
      nome,
      email,
      parseInt(telefone, 10)
    )
    console.log(itens)

    dispatch(cadastrar(contatoParaAdicionar))
  }

  return (
    <>
      <FormUsuario onSubmit={cadastrarContato}>
        <label htmlFor="nome">Nome do novo contato</label>
        <input
          placeholder="Nome para cadastrar"
          type="text"
          name="nome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="email">E-mail do novo contato</label>
        <input
          placeholder="E-mail para cadastrar"
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="tel">Telefone do novo contato</label>
        <input
          placeholder="Telefone para cadastrar"
          type="number"
          name="telefone"
          id="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <ButtonAdicionar type="submit">Adicionar</ButtonAdicionar>
      </FormUsuario>
      <BotaoVoltar />
    </>
  )
}

export default Form
