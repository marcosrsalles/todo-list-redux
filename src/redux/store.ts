import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodosState {
  items: Todo[];
}

const initialState: TodosState = {
  items: [] as Todo[],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.items.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.items[index].text = action.payload.text;
      state.items[index].done = action.payload.done;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

/*


Este é o arquivo que contém o estado geral da aplicação. O estado geral é composto por um objeto chamado todos que contém a lista de todos os itens. O estado geral é criado utilizando o método configureStore do Redux Toolkit. Este método recebe como argumento um objeto que contém o reducer da aplicação. O reducer é criado utilizando o método createSlice do Redux Toolkit. Este método recebe como argumento o nome do slice, o estado inicial e um objeto que contém os reducers da aplicação. O estado geral é exportado como store e o tipo do estado geral é exportado como RootState.

saga middleware é criado utilizando o método createSagaMiddleware do Redux Saga. Este middleware é passado como argumento para o método configureStore do Redux Toolkit. O método run do middleware é chamado passando como argumento a função rootSaga que é responsável por executar os sagas da aplicação.

O objeto de loja é configurado com o método 'configureStore' do Redux Toolkit e especifica o slice 'todosSlice' como o único reducer da aplicação e o middleware Saga como uma camada intermediária. O middleware Saga é executado com o método 'run' e passa a função rootSaga como argumento.
*/
