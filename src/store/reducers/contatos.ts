import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: []
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
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const TelefoneJaExiste = state.itens.find(
        (contato) => contato.telefone === action.payload.telefone
      )

      const EmailJaExiste = state.itens.find(
        (contato) => contato.email === action.payload.email
      )

      if (TelefoneJaExiste) {
        alert('Já existe um contato cadastrado com este número')
        return
      }

      if (EmailJaExiste) {
        alert('Já existe um contato cadastrado com este e-mail')
        return
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const NovoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(NovoContato)
        alert('Contato cadastrado com sucesso')
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
