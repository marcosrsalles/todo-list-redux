import { CheckboxContainer, CheckboxInput } from "./component";

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  disableFocus?: boolean;
  onClick?: () => void;
}

export function CheckBox({
  checked,
  onChange,
  disabled,
  disableFocus,
  onClick,
}: CheckboxProps) {
  return (
    <CheckboxContainer disabled={disabled}>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={(evt: { currentTarget: { checked: boolean } }) =>
          onChange && onChange(evt.currentTarget.checked)
        }
        onClick={onClick}
        disabled={disabled}
        tabIndex={disableFocus ? -1 : undefined}
      />
    </CheckboxContainer>
  );
}

/*
A função "CheckBox" tem cinco propriedades "checked", "onChange", "disabled", "disableFocus" e "onClick", todas são especificadas na interface "CheckboxProps".
"checked" é um valor booleano que determina se a caixa de seleção está marcada ou não.
"onChange" é uma função de retorno de chamada que será invocada quando o estado da caixa de seleção for alterado.
"disabled" é um valor booleano que determina se a caixa de seleção está desativada ou não.
"disableFocus" é um valor booleano que determina se a caixa de seleção pode ser focada ou não.
"onClick" é uma função de retorno de chamada que será invocada quando a caixa de seleção for clicada.
A função "CheckBox" retorna o componente "CheckboxContainer" com suas propriedades definidas como "disabled".
O componente "CheckboxContainer" retorna o componente "CheckboxInput" com suas propriedades definidas como "type", "checked", "onChange", "onClick", "disabled" e "tabIndex".
*/
