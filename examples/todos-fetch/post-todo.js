let newTodo = {
  userId: 2,
  title: "do that thing",
  completed: true,
};

let newTodoAsJSON = JSON.stringify(newTodo);

fetch("http://localhost:3000/todos", {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: newTodoAsJSON,
})
  .then(function (response) {
    console.log(response.status, response.statusText);
    return response.json();
  })
  .then(function displayData(bodyData) {
    console.log(bodyData);
  });
