function filterEven(arr) {
  // Проверяем, что все элементы — числа
  for (const element of arr) {
    if (typeof element !== "number") {
      return []; // Возвращаем пустой массив, если есть нечисловой элемент
    }
  }

  // Фильтруем четные числа
  return arr.filter((el) => el % 2 === 0);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(filterEven(arr)); // [2, 4, 6]

const invalidArr = [1, 2, "three", 4];
console.log(filterEven(invalidArr)); // []

const emptyArr = [];
console.log(filterEven(emptyArr)); // []
