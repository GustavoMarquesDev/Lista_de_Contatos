import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { MainContainer } from './styles'
import CardContatos from '../../components/Contatos'

const ContatosContainer = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos.itens)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  // função de filtragem de contatos
  const filtraContatos = () => {
    return contatos.filter(
      (contato) =>
        contato.nome.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }

  return (
    <MainContainer>
      {filtraContatos().map((c) => (
        <li key={c.id}>
          <CardContatos
            id={c.id}
            nome={c.nome}
            email={c.email}
            telefone={c.telefone}
          />
        </li>
      ))}
    </MainContainer>
  )
}

export default ContatosContainer
