/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Создайте функцию "sumPositiveNegative" здесь

function sumPositiveNegative(nums) {
  let positive = 0;
  let negative = 0;

  nums.forEach((el) => {
    if (el < 0) negative += el;
    else positive += el;
  });

  return { positive, negative };
}

const result = sumPositiveNegative(nums);

console.log(result);
// { positive: 74, negative: -54 }
