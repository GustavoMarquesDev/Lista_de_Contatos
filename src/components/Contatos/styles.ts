import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  height: 300px;
  position: relative;

  &:hover {
    transform: translateY(-1px);
    transition: all 0.5s ease;
    box-shadow: 0px 25px 20px rgba(0, 0, 0, 0.04);
  }
`

export const Dados = styled.input`
  color: #000;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Poppins', sans-serif;
  display: block;
  padding: 5px 0;
  width: 100%;
  margin: 25px 0;
  border: none;
  border-bottom: 1px solid #dee2e6;
  background-color: transparent;
  outline: none;
`

export const UserIcon = styled.span`
  position: absolute;
  font-size: 20px;
  top: 47px;
  left: 400px;
`
export const EmailIcon = styled.span`
  position: absolute;
  font-size: 20px;
  top: 103px;
  left: 400px;
`

export const PhoneIcon = styled.span`
  position: absolute;
  font-size: 20px;
  top: 165px;
  left: 400px;
`
