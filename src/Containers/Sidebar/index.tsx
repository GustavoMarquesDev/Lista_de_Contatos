import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Aside, Form, Input } from './styles'

import { BotaoAdicionar } from '../../components/Botao'
import { alterarTermo } from '../../store/reducers/filtro'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Aside>
      <Form>
        <Input
          id="search"
          value={termo}
          type="text"
          placeholder="Digite o nome do contato para buscar"
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
      </Form>
      <BotaoAdicionar />
    </Aside>
  )
}

export default Sidebar
