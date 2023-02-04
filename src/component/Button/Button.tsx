import React from "react";
import { Button } from "./component";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export const Buttons = ({ onClick, children }: Props) => {
  return <Button onClick={onClick}>{children}</Button>;
};

/*
A função "Buttons" tem duas propriedades "onClick" e "children", ambas são especificadas na interface "Props".
"onClick" é uma função de retorno de chamada que será invocada quando o botão for clicado.
"children" é um elemento React que será renderizado dentro do botão.
A função "Buttons" retorna o componente "Button" com suas propriedades definidas como "onClick" e o conteúdo "children".
*/
