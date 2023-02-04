import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const ContainerItem = styled.div(
  ({ done }: ContainerProps) =>
    `
      display: flex;
      background-color: #20212C;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 10px;
      align-items: center;
      width: 100%;
      max-height: 50px;
      align-items: center;
  
      input {
          width: 25px;
          height: 25px;
          margin-right: 5px;
      }
  
      label {
        color: #b6b8c3;

          text-decoration: ${done ? "line-through" : "initial"};
          padding-left: 10px;
      }
  `
);

export const ContainerActions = styled.div`
  margin-left: auto;
  display: flex;
`;
