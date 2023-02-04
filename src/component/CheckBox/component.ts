import styled from "styled-components";

interface CommonProps {
  disabled?: boolean;
}

export const CheckboxContainer = styled.div<CommonProps>`
  position: relative;

  opacity: ${(props) => {
    if (props.disabled) return "0.5";
    return "1";
  }};
  pointer-events: ${(props) => {
    if (props.disabled) return "none";
    return "all";
  }};
`;

export const CheckboxInput = styled.input.attrs(() => ({
  type: "checkbox",
}))``;
