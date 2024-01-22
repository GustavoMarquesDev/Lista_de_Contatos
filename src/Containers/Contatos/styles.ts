import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 40px 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f3f0ff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3%;
  row-gap: 10%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    display: block;
  }
`
