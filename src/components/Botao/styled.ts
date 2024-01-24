import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ButtonBuscar = styled.button`
  max-width: 380px;
  width: 100%;
  padding: 7px;
  border: 1px solid ${variaveis.roxoEscuro};
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${variaveis.roxoEscuro};
  color: ${variaveis.roxoMaisClaro};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${variaveis.roxoClaro};
    transition: all 0.5s ease;
  }
`

export const ButtonEditar = styled.button`
  background-color: ${variaveis.verdeEscuro};
  color: #fff;
  padding: 5px;
  font-size: 13px;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  cursor: pointer;

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
`

export const NewButton = styled(Link)`
  background-color: ${variaveis.roxoEscuro};
  color: ${variaveis.roxoMaisClaro};
  display: flex;
  max-width: 380px;
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 40px;
  left: 10px;
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
  font-size: 20px;
  top: 7px;
  right: -25px;
`
