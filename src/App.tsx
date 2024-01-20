import ContatosContainer from './Containers/Contatos'
import Sidebar from './Containers/Sidebar'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <ContatosContainer />
      </Container>
    </>
  )
}

export default App
