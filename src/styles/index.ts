import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "Montserrat", sans-serif;
}

`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px auto;

  @media (max-width: 1000px) {
    grid-template-columns: 250px auto;
  }

  @media (max-width: 650px) {
    grid-template-columns: 200px auto;
  }
`

export default EstiloGlobal
