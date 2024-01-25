import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

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

export const ButtonAdicionar = styled.button`
  max-width: 460px;
  display: block;
  width: 100%;
  padding: 7px;
  border: 1px solid ${variaveis.roxoEscuro};
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${variaveis.roxoMaisClaro};
  color: ${variaveis.roxoClaro};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #f3f0ff;
    color: #5f3dc4;
    transition: all 0.5s ease;
  }
`
