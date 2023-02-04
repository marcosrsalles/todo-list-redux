import { useTodos } from "../../hooks/useTodos";
import TodoItem from "../TodoItem/TodoItem";
import TodoInput from "../TodoInput/TodoInput";
import { EmptyList } from "./component";

const TodoList = () => {
  const todos = useTodos();

  return (
    <div>
      <TodoInput />

      {todos.length === 0 && (
        <EmptyList> Nenhuma tarefa encontrada 😞 </EmptyList>
      )}

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;

/*
O componente TodoList é uma lista de tarefas. Ele usa um hook personalizado "useTodos" para obter uma lista de tarefas. Ele renderiza um componente "TodoInput" para adicionar novas tarefas e um componente "TodoItem" para cada tarefa na lista. Se a lista de tarefas estiver vazia, ele renderiza uma mensagem "Nenhuma tarefa encontrada".*/
