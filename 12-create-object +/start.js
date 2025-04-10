/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const ob = {
  name: "<name>",
  surname: "<surname>",
  favoriteNumber: 5,
  info() {
    console.log(
      `My name is ${this.name} ${this.surname} and my favorite number is ${this.favoriteNumber}`
    );
  },
};

ob.info();
