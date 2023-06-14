// fetch("http://localhost:3000/users/", { method: "GET" })
//   .then(function doSomethingWithResponse(response) {
//     console.log(response.status, response.statusText);
//     return response.json();
//   })
//   .then(function doSomethingWithTheBody(body) {
//     console.log(body);
//   });

fetch("http://localhost:3000/users/")
  .then((response) => response.json())
  .then(function (body) {
    console.log(body);
  });
