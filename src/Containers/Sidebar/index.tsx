import { useState } from 'react'
import { Aside, Form, Input } from './styles'
import { ButtonBuscar, ButtonNovo } from '../../components/Botao/styled'

const Sidebar = () => {
  const [filtro, setFiltro] = useState('')

  return (
    <Aside>
      <Form>
        <Input
          id="search"
          value={filtro}
          type="text"
          placeholder="Digite o contato para buscar"
          onChange={(e) => setFiltro(e.target.value)}
        />
        <ButtonBuscar type="submit">Buscar</ButtonBuscar>
      </Form>
      <ButtonNovo>+ novo</ButtonNovo>
    </Aside>
  )
}

export default Sidebar
