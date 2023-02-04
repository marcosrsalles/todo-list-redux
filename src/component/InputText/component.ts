import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  color: #797a81;

  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  width: 100%;

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    color: #797a81;

    flex: 1;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
