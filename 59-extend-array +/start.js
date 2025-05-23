/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((acc, el) => acc + el, 0);
  }

  onlyNumbers() {
    return this.filter((el) => typeof el === "number");
  }
}

const r1 = new ExtendedArray(1, 2, 3, 4);
console.log(r1.sum());
console.log(r1.onlyNumbers());

const r2 = new ExtendedArray(1, null, 2, "3");
console.log(r2.onlyNumbers())
