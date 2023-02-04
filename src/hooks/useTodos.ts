import { useSelector } from "react-redux";
import { TodosState } from "../redux/store";

export const useTodos = () => {
  return useSelector((state: { todos: TodosState }) => state.todos.items);
};

/*
Este é um hook personalizado chamado useTodos que utiliza o hook useSelector do Redux. Este hook retorna o estado dos items dos Todos armazenados no estado geral da aplicação. O estado geral é passado como argumento para o useSelector e selecionamos a propriedade todos.items para retornar a lista de Todos.
*/
