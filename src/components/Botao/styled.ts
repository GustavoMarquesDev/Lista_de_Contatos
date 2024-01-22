import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonBuscar = styled.button`
  max-width: 380px;
  width: 100%;
  padding: 7px;
  border: 1px solid #5f3dc4;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  background-color: #5f3dc4;
  color: #e5dbff;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #7048e8;
    transition: all 0.5s ease;
  }
`

export const ButtonEditar = styled.button`
  background-color: #2b8a3e;
  color: #fff;
  padding: 5px;
  font-size: 13px;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    background-color: #2f9e44;
    transition: all 0.5s ease;
  }
`

export const ButtonRemove = styled(ButtonEditar)`
  background-color: #c92a2a;
  margin-left: 10px;

  &:hover {
    background-color: #e03131;
  }
`

export const NewButton = styled(Link)`
  background-color: #5f3dc4;
  color: #e5dbff;
  position: fixed;
  bottom: 40px;
  left: 10px;
  border: 1px solid #5f3dc4;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  padding: 7px;
  font-weight: bold;

  &:hover {
    background-color: #7048e8;
    transition: all 0.5s ease;
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
