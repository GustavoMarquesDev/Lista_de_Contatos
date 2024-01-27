import styled from 'styled-components'

export const MainContainer = styled.main`
  height: 70vh;
  width: 100%;
  background-image: url('https://static.vecteezy.com/system/resources/previews/006/852/804/non_2x/abstract-blue-background-simple-design-for-your-website-free-vector.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  padding: 40px 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f3f0ff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3%;
  row-gap: 1%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    display: block;
  }
`
