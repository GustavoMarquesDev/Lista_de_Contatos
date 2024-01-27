import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ButtonEditar = styled.button`
  background-color: ${variaveis.verdeEscuro};
  color: #fff;
  padding: 5px;
  font-size: 13px;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  cursor: pointer;
  text-align: center;
  width: 120px;
  @media (max-width: 1070px) {
    display: block;

    margin-bottom: 10px;
    margin-left: 0;
  }

  &:hover {
    background-color: ${variaveis.verdeClaro};
    transition: all 0.5s ease;
  }
`

export const ButtonRemove = styled(ButtonEditar)`
  background-color: ${variaveis.vermelhoEscuro};
  margin-left: 10px;

  &:hover {
    background-color: ${variaveis.vermelhoClaro};
  }

  @media (max-width: 1070px) {
    display: block;

    margin-left: 0;
  }
`

export const NewButton = styled(Link)`
  background-color: ${variaveis.roxoEscuro};
  color: ${variaveis.roxoMaisClaro};
  display: flex;
  max-width: 380px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  border: 1px solid ${variaveis.roxoEscuro};
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  padding: 7px;
  font-weight: bold;

  &:hover {
    background-color: ${variaveis.roxoClaro};
    transition: all 0.5s ease;
  }

  @media (max-width: 1000px) {
    width: 230px;
  }
  @media (max-width: 655px) {
    width: 180px;
  }
`

export const VoltarButton = styled(Link)`
  background-color: transparent;
  height: 50px;
  width: 50px;
  color: #fff;
  position: absolute;
  font-size: 25px;
  top: 7px;
  right: -20px;
`
