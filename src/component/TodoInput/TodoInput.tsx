import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/store";
import { InputText } from "../InputText/InputText";

const TodoInput = () => {
  const [text, setText] = useState<string>(String);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!text) return;
    dispatch(addTodo({ id: Date.now(), text, done: false }));
    setText("");
  };

  const hadleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(addTodo({ id: Date.now(), text, done: false }));
      setText("");
    }
  };

  return (
    <InputText
      type="text"
      placheholder="Digite uma tarefa..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={hadleKeyPress}
      icon={<span onClick={handleAddTodo}>➕</span>}
    />
  );
};

export default TodoInput;

/*
Esta função  define um componente React "TodoInput". Ele usa o hook "useState" do React para gerenciar o estado de uma string que representa o texto da tarefa a ser adicionada. Também usa o hook "useDispatch" do React Redux para obter a função "dispatch", que é usada para enviar ações ao store do Redux.

A função "handleAddTodo" é invocada quando o usuário clica no ícone "➕" ou pressiona a tecla "Enter" no campo de entrada. Se o texto não estiver vazio, a função "addTodo" é invocada com um objeto de tarefa contendo uma ID gerada com "Date.now()", o texto da tarefa, e um indicador "done" false. Em seguida, o estado da string "text" é redefinido como vazio.

A função "hadleKeyPress" é invocada quando uma tecla é pressionada no campo de entrada. Se a tecla for "Enter", a função "handleAddTodo" é chamada.

O componente "InputText" é renderizado com as propriedades "type", "value", "onChange", "onKeyDown" e "icon". O valor da propriedade "value" é definido com o estado da string "text". A função "onChange" é definida para atualizar o estado da string "text" com o valor digitado no campo de entrada. A propriedade "onKeyDown" é definida com a função "hadleKeyPress". E a propriedade "icon" é definida com uma tag "span" que invoca a função "handleAddTodo" quando clicada.
*/
