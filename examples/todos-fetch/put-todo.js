let newTodo = {
  userId: 2,
  title: "do that thing",
  completed: true,
};

let newTodoAsJSON = JSON.stringify(newTodo);

fetch("http://localhost:3000/todos/10", {
  method: "PUT",
  headers: { "Content-type": "application/json" },
  body: newTodoAsJSON,
})
  .then(function parseJSONToJS(response) {
    console.log(response.status, response.statusText);
    return response.json();
  })
  .then(function displayData(bodyData) {
    console.log(bodyData);
  });
