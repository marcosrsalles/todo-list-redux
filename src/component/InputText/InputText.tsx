import { Container, Icon } from "./component";
interface Props {
  type?: string;
  value: string;
  placheholder?: string;
  icon?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  onChange,
  value,
  type = "text",
  placheholder,
  onBlur,
  onKeyDown,
  icon,
}: Props) => {
  return (
    <Container>
      <input
        onChange={onChange}
        value={value}
        type={type}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        placeholder={placheholder}
      />
      <Icon>{icon}</Icon>
    </Container>
  );
};

/*
O componente "InputText" tem 7 propriedades, todas são especificadas na interface "Props".
"onChange" é uma função de retorno de chamada que será invocada quando o valor do campo de entrada for alterado.
"value" é uma string que representa o valor do campo de entrada.
"type" é uma string que representa o tipo do campo de entrada, o valor padrão é "text".
"placheholder" é uma string que representa o texto de ajuda do campo de entrada.
"onBlur" é uma função de retorno de chamada que será invocada quando o campo de entrada perder o foco.
"onKeyDown" é uma função de retorno de chamada que será invocada quando uma tecla for pressionada.
"icon" é um elemento React que será renderizado dentro do ícone.
O componente "InputText" retorna um componente "Container" com seus filhos sendo um campo de entrada e um ícone.
*/
