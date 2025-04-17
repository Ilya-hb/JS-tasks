// https://jsonplaceholder.typicode.com/todos

// const getData = (url) =>
//   new Promise((resolve, reject) =>
//     fetch(url)
//       .then((data) => data.json())
//       .then((json) => resolve(json))
//       .catch((error) => reject(error))
//   );

// getData("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
//   console.log(data)
// );

const getData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

try {
  const data = await getData("https://jsonplace2holder.typicode.com/todos/1");
  console.log(data);
} catch (error) {
  console.log(error );
}
