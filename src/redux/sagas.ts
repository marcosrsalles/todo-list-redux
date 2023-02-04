import { all, takeEvery, put } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { addTodo, removeTodo, Todo, updateTodo } from "./store";

function* saveTodosToLocalStorage(action: PayloadAction<Todo>) {
  const todos = JSON.stringify(action.payload);
  localStorage.setItem("todos", todos);
}

function* loadTodosFromLocalStorage() {
  const todos = JSON.parse(localStorage.getItem("todos") || "[]");
  yield put(addTodo(todos));
}

function* watchAddTodo() {
  yield takeEvery(addTodo.type, saveTodosToLocalStorage);
}

function* watchRemoveTodo() {
  yield takeEvery(removeTodo.type, saveTodosToLocalStorage);
}

function* watchUpdateTodo() {
  yield takeEvery(updateTodo.type, saveTodosToLocalStorage);
}

export function* rootSaga() {
  yield all([
    watchAddTodo(),
    watchRemoveTodo(),
    watchUpdateTodo(),
    loadTodosFromLocalStorage(),
  ]);
}

/*
Este código é um saga do Redux, que é uma biblioteca para gerenciamento de estado em aplicações React. O código define funções geradoras (funções que utilizam a sintaxe de generator do JavaScript) que são responsáveis por lidar com as ações do estado.

A função saveTodosToLocalStorage salva os dados de uma ação na memória local do navegador, usando o método localStorage.setItem.

A função loadTodosFromLocalStorage carrega os dados armazenados na memória local do navegador usando o método localStorage.getItem e, em seguida, utiliza a ação put do Redux Saga para adicionar os dados carregados ao estado da aplicação.

As funções watchAddTodo, watchRemoveTodo e watchUpdateTodo usam o método takeEvery para ficar de olho nas ações do estado e, sempre que uma ação correspondente é executada, a função saveTodosToLocalStorage é chamada para salvar os dados na memória local.

A função rootSaga é a função principal que combina todas as outras funções geradoras, permitindo que sejam todas executadas juntas quando o saga for iniciado.

*/
