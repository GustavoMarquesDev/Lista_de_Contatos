import { BotaoVoltar } from '../../components/Botao'
import { ButtonAdicionar } from './styles'
import { FormUsuario } from './styles'

const Form = () => {
  return (
    <>
      <FormUsuario>
        <label htmlFor="nome">Nome do novo contato</label>
        <input
          placeholder="Nome para cadastrar"
          type="text"
          name="nome"
          id="nome"
        />

        <label htmlFor="email">E-mail do novo contato</label>
        <input
          placeholder="E-mail para cadastrar"
          type="text"
          name="email"
          id="email"
        />

        <label htmlFor="tel">Telefone do novo contato</label>
        <input
          placeholder="Telefone para cadastrar"
          type="number"
          name="telefone"
          id="tel"
        />

        <ButtonAdicionar type="submit">Adicionar</ButtonAdicionar>
      </FormUsuario>
      <BotaoVoltar />
    </>
  )
}

export default Form
