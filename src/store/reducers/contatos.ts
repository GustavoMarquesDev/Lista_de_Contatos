import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    new Contato(1, 'Gustavo', 'gustavo-markes@hotmail.com', 997135321),
    new Contato(2, 'Pedro', 'pedro-markes@hotmail.com', 997135322)
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,

  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ContatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (ContatoJaExiste) {
        alert('Já existe um contato com este nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const NovoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(NovoContato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
