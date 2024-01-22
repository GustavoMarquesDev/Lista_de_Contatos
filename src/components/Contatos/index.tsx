import { ButtonEditar, ButtonRemove } from '../Botao/styled'
import { Card, Dados } from './styles'
import Contato from '../../models/Contato'

const CardContatos = () => {
  const contatosAdicinados: Contato[] = [
    new Contato('Gustavo', 'gustavo-markes@hotmail.com', 997135321),
    new Contato('Pedro', 'pedro-markes@hotmail.com', 997135322),
    new Contato('Lucas', 'lucas-markes@hotmail.com', 997135323),
    new Contato('Paulo', 'paulo-markes@hotmail.com', 997135324)
  ]

  return (
    <>
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
    </>
  )
}

export default CardContatos
