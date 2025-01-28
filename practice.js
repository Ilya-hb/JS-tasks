const User = {
  name: "Ilya",
  age: 15,
  gender: "male",
};

const { name, age } = User;
// console.log(name, age);

const foo = ({ name, age }) => {
  console.log(name, age);
};

foo(User);
