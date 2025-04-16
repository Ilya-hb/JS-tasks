const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );

console.log(
  getData("https://jsonplaceholder.typicode.com/todos")
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
);

// switch to async/await
