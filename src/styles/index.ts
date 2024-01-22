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

body {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, #f3f0ff 0%, #b197fc 100%);
  overflow: hidden;

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

export const ContainerNovoContato = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: #5f3dc4;
  margin: 0 auto;
  height: auto;
  position: relative;
  border-radius: 15px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
`

export default EstiloGlobal
