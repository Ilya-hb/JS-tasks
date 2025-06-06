/** ЗАДАЧА 46 - Добавление уникальных элементов в массив
 *
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * выведите в консоль "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */

const myNumbers = [123, 50, 27];

const pushIfUnique = (inputArray, newElement) => {
  inputArray.forEach((element) => {
    if (typeof element == "object")
      throw new Error("Array contains an object.");
  });

  if (inputArray.includes(newElement)) {
    console.log("Element already exists");
    return;
  }
  inputArray.push(newElement);
};

pushIfUnique(myNumbers, 50); // "50 уже в массиве"
console.log(myNumbers); // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // "80 уже в массиве"
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]
