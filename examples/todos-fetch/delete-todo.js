fetch("http://localhost:3000/todos/20", {
  method: "DELETE",
}).then(function (response) {
  console.log(response.status, response.statusText);
});
