const isEmpty = object => {
  for (const key in object) {
    return false;
  }
  return true;
};

const task = {
  title: "Купить продукты",
  description: "Купить молоко, хлеб и яйца",
  isCompleted: false,
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

const newTask = cloneAndModify(task, {
  isCompleted: true,
  priority: "Высокий",
});

const callAllMethods = obj => {
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
};

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};
