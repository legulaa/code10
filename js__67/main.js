const todoKeys = {
  id: "id",
  is_completed: "is_completed",
  text: "text",
};

const todos = [];
const getNewTodoId = (todos) => {
  return (
    todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1
  );
};

const createTodoList = (todos, text) => {
  const newTodo = {
    id: getNewTodoId(todos),
    is_completed: false,
    text: text,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todoIndex = todos.find((todo) => todo[todoKeys.id] === todoId);

  if (!todoIndex) {
    console.error("No task found with this ID");
    return null;
  }

  todoIndex[todoKeys.is_completed] = !todoIndex[todoKeys.is_completed];
  return todos;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);

  if (todoIndex === -1) {
    console.error("No task found with this ID");
    return null;
  }

  todos.splice(todoIndex, 1);

  return todos;
};
