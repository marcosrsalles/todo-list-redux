import TodoList from "./component/TodoList/TodoList";
import { Area, Container, Header } from "./app.styles";
import { useTodos } from "./hooks/useTodos";

function App() {
  const todos = useTodos();

  const todoNotDone = todos.filter((todo) => !todo.done);
  const todoDone = todos.filter((todo) => todo.done);
  const todoAll = todos;

  return (
    <Container>
      <Area>
        <Header> Lista de tarefas </Header>
        {todoNotDone.length === 0 && (
          <h3> Parabéns, você não tem tarefas para fazer 😎 </h3>
        )}
        {todoNotDone.length > 0 && (
          <h3>
            Você tem {todoNotDone.length}
            {`${todoNotDone.length > 1 ? " tarefas" : " tarefa"}`} para fazer
          </h3>
        )}

        {todoDone.length > 0 && (
          <h3>
            Você tem {todoDone.length}
            {`${todoDone.length > 1 ? " tarefas" : " tarefa"}`}
            {`${todoDone.length > 1 ? " concluídas" : " concluída"}`}
          </h3>
        )}

        {todoAll.length > 0 && (
          <h3>
            Você tem {todoAll.length}
            {`${todoAll.length > 1 ? " tarefas" : " tarefa"}`} no total
          </h3>
        )}

        <TodoList />
      </Area>
    </Container>
  );
}

export default App;
