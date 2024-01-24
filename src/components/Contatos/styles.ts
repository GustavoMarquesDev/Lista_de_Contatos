import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  height: 300px;

  &:hover {
    transform: translateY(-1px);
    transition: all 0.5s ease;
    box-shadow: 0px 25px 20px rgba(0, 0, 0, 0.04);
  }
`

export const Dados = styled.textarea`
  color: #000;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  border-bottom: 1px solid #dee2e6;
  background-color: transparent;
  outline: none;
`
