import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputText } from "../InputText/InputText";
import { Todo, removeTodo, updateTodo } from "../../redux/store";
import { ContainerItem, ContainerActions } from "./component";
import { Buttons } from "../Button/Button";
import { CheckBox } from "../CheckBox/CheckBox";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const [inputValue, setInputValue] = useState(todo.text);
  const [edit, setEdit] = useState(false);
  const [isDone, setIsDone] = useState(todo.done);

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleUpdateTodo = (id: number, newText: string) => {
    if (newText === "") return;
    dispatch(updateTodo({ id, text: newText, done: false }));
  };

  return (
    <ContainerItem done={todo.done}>
      {!edit && (
        <CheckBox
          checked={edit ? false : todo.done}
          onChange={() => setIsDone((prevState) => !prevState)}
          onClick={() =>
            dispatch(
              updateTodo({ id: todo.id, text: inputValue, done: !isDone })
            )
          }
        />
      )}{" "}
      {edit ? (
        <InputText
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => {
            setEdit(false);
            handleUpdateTodo(todo.id, inputValue);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setEdit(false);
              handleUpdateTodo(todo.id, inputValue);
            }
          }}
        />
      ) : (
        <label>{todo.text}</label>
      )}
      <ContainerActions>
        {!edit && <Buttons onClick={handleRemoveTodo}>🗑️</Buttons>}
        {edit && (
          <Buttons
            onClick={() => {
              setEdit(false);
              setInputValue(todo.text);
            }}
          >
            💾
          </Buttons>
        )}
        <Buttons
          onClick={() => {
            setEdit(true);
            setInputValue(todo.text);
            handleUpdateTodo(todo.id, inputValue);
          }}
        >
          {!edit && "✏️"}
        </Buttons>
      </ContainerActions>
    </ContainerItem>
  );
};

export default TodoItem;

/*
A função TodoItem é um componente React que representa um item de uma lista de tarefas (todo). Ele recebe uma propriedade todo que é um objeto com informações sobre a tarefa.

A função usa o gerenciador de estado do React useState para controlar o valor do input de texto (quando a tarefa está sendo editada), o estado de edição e o estado de conclusão da tarefa.

A função também usa o useDispatch para dispachar ações ao armazenar do Redux (removeTodo e updateTodo) quando o usuário exclui ou atualiza uma tarefa.

A lógica para mostrar o texto da tarefa como label ou input de texto, bem como para excluir, atualizar e editar a tarefa, é implementada na função TodoItem.
*/
