// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/comments/1",
// ];

// async function fetchAll() {
//   let requests = urls.map((el) => fetch(el));
//   return Promise.all(requests).then(res=>res.forEach((el)=>));
// }

// fetchAll().then(([post, comment]) => {
//   console.log("Пост:", post);
//   console.log("Комментарий:", comment);
// });

function high(x) {
  let result = 0;
  let words = x.split(" ");
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].split("").length; j++) {
      result += words[i].char
    }
  }
}

console.log(high(`man i need a taxi up to ubud`));
