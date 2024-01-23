import { MainContainer } from './styles'
import CardContatos from '../../components/Contatos'
import Contato from '../../models/Contato'

const ContatosContainer = () => {
  const contatosAdicinados: Contato[] = [
    new Contato('Gustavo', 'gustavo-markes@hotmail.com', 997135321),
    new Contato('Pedro', 'pedro-markes@hotmail.com', 997135322),
    new Contato('Lucas', 'lucas-markes@hotmail.com', 997135323),
    new Contato('Paulo', 'paulo-markes@hotmail.com', 997135324),
    new Contato('Paulo', 'paulo-markes@hotmail.com', 997135325),
    new Contato('Paulo', 'paulo-markes@hotmail.com', 997135326),
    new Contato('Paulo', 'paulo-markes@hotmail.com', 997135327)
  ]

  return (
    <MainContainer>
      <CardContatos />
    </MainContainer>
  )
}

export default ContatosContainer
