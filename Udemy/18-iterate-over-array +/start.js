/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */

const myArr = ["Lorem", 11, null, undefined, NaN];

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}


myArr.forEach((el) => console.log(el));

