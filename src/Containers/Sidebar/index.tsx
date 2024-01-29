import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Aside, ContatosTotal, Form, Input } from './styles'

import { BotaoAdicionar } from '../../components/Botao'
import { alterarTermo } from '../../store/reducers/filtro'
import { useState } from 'react'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const [estaPesquisando, setEstapesquisando] = useState(false)

  const Pesquisando = function (termo: string) {
    dispatch(alterarTermo(termo))
    if (termo === '') {
      setEstapesquisando(false)
    }
    setEstapesquisando(!!termo)
  }

  const filtraContatos = () => {
    return itens.filter(
      (contato) =>
        contato.nome.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
    )
  }

  const contadorDeContatos = () => {
    return estaPesquisando === true && filtraContatos().length > 0
  }
  {
    return (
      <Aside>
        <Form>
          <Input
            id="search"
            value={termo}
            type="text"
            placeholder="Digite o nome do contato para buscar"
            onChange={(e) => Pesquisando(e.target.value)}
          />
        </Form>
        <BotaoAdicionar />
        {contadorDeContatos() ? (
          <ContatosTotal>
            {filtraContatos().length} contato(s) encontrados
          </ContatosTotal>
        ) : (
          ''
        )}

        {estaPesquisando === true && filtraContatos().length === 0 ? (
          <ContatosTotal>nenhum contato encontrado</ContatosTotal>
        ) : (
          <ContatosTotal>{itens.length} contato(s) no total</ContatosTotal>
        )}
      </Aside>
    )
  }
}
export default Sidebar
