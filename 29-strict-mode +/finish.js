/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 * use strict вводит ряд ограничений, которые помогают избежать ошибок в коде, например, запрещает использование необъявленных переменных.
 */

function myFunction() {
  a = 2;
  return a;
}

myFunction();
