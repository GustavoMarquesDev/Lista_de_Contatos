import styled from 'styled-components'
import { ButtonBuscar } from '../../components/Botao/styled'

export const FormUsuario = styled.form`
  padding: 20px;
  margin-top: 80px;
  color: #fff;

  input {
    padding: 8px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
    width: 100%;
    outline: none;
    max-width: 500px;
    margin-bottom: 40px;
    margin-top: 5px;
  }

  label {
    display: block;
    margin-top: 25px;
  }
`

export const ButtonAdicionar = styled(ButtonBuscar)`
  background-color: #b197fc;
  display: block;
  max-width: 460px;
  width: 100%;

  &:hover {
    background-color: #f3f0ff;
    color: #5f3dc4;
    transition: all 0.5s ease;
  }
`
