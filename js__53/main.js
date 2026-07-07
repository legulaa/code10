// Задание 1.
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

// Задание 2.
const getAverageAge = (users) => {
  if (users.length === 0) return 0;

  let totalAge = 0;

  users.forEach((user) => (totalAge += user.age));

  return totalAge / users.length;
};
console.log(getAverageAge(users));

// Задание 3.
const getAllAdmins = (users) => {
  if (users.length === 0) return [];

  let allAdmins = [];

  users.forEach((user) => {
    if (user.isAdmin) {
      allAdmins.push(user);
    }
  });

  return allAdmins;
};
console.log(getAllAdmins(users));

// Задание 4.
const array = [10, 20, 30, 40, 50];
const first = (arr, n) => {
  if (n === 0) return [];
  if (n === undefined) return [arr[0]];

  return arr.slice(0, n);
};
console.log(first(array, 0)); // Выведет: []
console.log(first(array)); // Выведет: [10] (массив с первым элементом)
console.log(first(array, 3)); // Выведет: [10, 20, 30] (первые 3 элемента)
