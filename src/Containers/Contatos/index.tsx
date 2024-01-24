import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { MainContainer } from './styles'
import CardContatos from '../../components/Contatos'

const ContatosContainer = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos.itens)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <MainContainer>
      {contatos.map((c) => (
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
