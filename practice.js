// у каждого свой метод (drive, refuel, chargeBattery).
// То же самое сделай через функции-конструкторы + prototype — почувствуешь разницу.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  haveBirthday() {
    this.age = this.age + 1;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
  greet() {
    console.log(`Hi, i am ${this.name} and my grade is ${this.grade}`);
  }
}

const s = new Student("Anna", 18, 11);
s.greet(); // Hi, I'm Anna, grade: 11
s.study(); // Anna is studying

class BankAccount {
  #balance = 0;
  static bankName = "MyBank";

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this.#balance) console.log("Not enough money on your balance");
    this.#balance -= amount;
  }
  getBalance() {
    return this.#balance;
  }
}
const acc = new BankAccount("Ilya", 1000);
acc.deposit(500);
acc.withdraw(200);
console.log(acc.getBalance()); // 1300
console.log(BankAccount.bankName); // MyBank

class Shape {
  area() {
    return 0;
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const shapes = [new Rectangle(5, 10), new Circle(3)];
shapes.forEach((s) => console.log(s.area())); // 50, 28.27...

class User {
  static count = 0;
  constructor(name = null) {
    this.name = name;
    User.count++;
  }
}
new User();
new User();
console.log(User.count); // 2
