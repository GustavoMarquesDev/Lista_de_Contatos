import ContatosContainer from '../../Containers/Contatos'
import Sidebar from '../../Containers/Sidebar'
import { Container } from '../../styles'

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <ContatosContainer />
    </Container>
  )
}

export default Home
