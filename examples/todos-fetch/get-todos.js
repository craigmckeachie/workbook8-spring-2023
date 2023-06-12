fetch("http://localhost:3000/todos")
  .then(function (response) {
    console.log(response.status, response.statusText);
    return response.json();
  })
  .then(function displayData(bodyData) {
    console.log(bodyData);
  });
