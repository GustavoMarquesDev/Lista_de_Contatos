import styled from 'styled-components'

export const Aside = styled.aside`
  height: 100vh;
  background-color: #e5dbff;
  padding-top: 10px;

  @media (max-width: 1000px) {
    padding: 0px 10px;
  }
`
export const Titulo = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  color: #000;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const Input = styled.input`
  padding: 7px;
  border-radius: 5px;
  max-width: 380px;
  width: 100%;
  font-size: 16px;
  margin: 10px 0;
  border: 1px solid #5f3dc4;
  outline: none;
`
export const ContatosTotal = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  padding-left: 10px;
`
