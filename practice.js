function User(name, age) {
  this.name = name;
  this.age = age;
}

// Добавь метод в прототип User.prototype
User.prototype.getFullName = function() {
  return `Имя: ${this.name}, Возраст: ${this.age}`;
};

const user = new User("Алексей", 25);
console.log(user.getFullName()); // "Имя: Алексей, Возраст: 25"