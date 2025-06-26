// 1. 
const myProfile = {
  name: "Алексей",
  age: 30,
};
  // 2. 
    function checkMyProfile(name) {
    return `Hello "${name}"`;
};

console.log(checkMyProfile("Иван")); 

// 3. 
const users = [
  {
    name: "Мария",
    age: 25,
    isAdmin: false
  },
  {
    name: "Петр",
    age: 32,
    isAdmin: true
  },
  {
    name: "Анна",
    age: 21,
    isAdmin: false
  },
  {
    name: "Дмитрий",
    age: 28,
    isAdmin: false
  },
  {
    name: "Елена",
    age: 35,
    isAdmin: true
  }
];


let regularUsersCount = 0;


for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    regularUsersCount++;
  }
}


console.log(`Количество простых пользователей: ${regularUsersCount}`);