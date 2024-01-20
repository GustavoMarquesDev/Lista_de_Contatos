import { ButtonEditar, ButtonRemove } from '../Botao/styled'
import { Card, Dados, Titulo } from './styles'
import Contato from '../../models/Contato'

const CardContatos = () => {
  const contatosAdicinados: Contato[] = [
    {
      nome: 'Gustavo',
      email: 'gustavo-markes@hotmail.com',
      telefone: 997135321
    },
    {
      nome: 'Pedro',
      email: 'pedro-markes@hotmail.com',
      telefone: 997135333
    },
    {
      nome: 'Lucas',
      email: 'lucas-markes@hotmail.com',
      telefone: 997135222
    },
    {
      nome: 'Paulo',
      email: 'paulo-markes@hotmail.com',
      telefone: 997135111
    }
  ]

  return (
    <div>
      <Titulo>Contatos</Titulo>
      {contatosAdicinados.map((contato: Contato) => (
        <Card key={contato.telefone}>
          <ul>
            <Dados>{contato.nome}</Dados>
            <Dados>{contato.email}</Dados>
            <Dados>{contato.telefone}</Dados>
          </ul>

          <ButtonEditar>Editar</ButtonEditar>
          <ButtonRemove>Excluir</ButtonRemove>
        </Card>
      ))}
    </div>
  )
}

export default CardContatos
