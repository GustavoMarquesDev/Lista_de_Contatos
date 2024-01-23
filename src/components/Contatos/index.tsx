import { ButtonEditar, ButtonRemove } from '../Botao/styled'
import { Card, Dados } from './styles'
import Contato from '../../models/Contato'
import { useState } from 'react'

const CardContatos = () => {
  const [estaEditando, setEstaEditando] = useState(false)

  const contatosAdicinados: Contato[] = [
    new Contato('Gustavo', 'gustavo-markes@hotmail.com', 997135321),
    new Contato('Pedro', 'pedro-markes@hotmail.com', 997135322),
    new Contato('Lucas', 'lucas-markes@hotmail.com', 997135323),
    new Contato('Paulo', 'paulo-markes@hotmail.com', 997135324),
    new Contato('Paulo', 'paulo-markes@hotmail.com', 997135325),
    new Contato('Paulo', 'paulo-markes@hotmail.com', 997135326),
    new Contato('Paulo', 'paulo-markes@hotmail.com', 997135327)
  ]

  return (
    <>
      {contatosAdicinados.map((contato: Contato) => (
        <Card key={contato.telefone}>
          <ul>
            <Dados>{contato.nome}</Dados>
            <Dados>{contato.email}</Dados>
            <Dados>{contato.telefone}</Dados>
            {estaEditando ? (
              <>
                <ButtonEditar>Salvar</ButtonEditar>
                <ButtonRemove onClick={() => setEstaEditando(false)}>
                  Cancelar
                </ButtonRemove>
              </>
            ) : (
              <>
                <ButtonEditar onClick={() => setEstaEditando(true)}>
                  Editar
                </ButtonEditar>
                <ButtonRemove>Excluir</ButtonRemove>
              </>
            )}
          </ul>
        </Card>
      ))}
    </>
  )
}

export default CardContatos
