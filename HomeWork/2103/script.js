// ДЗ Подумать и постараться написать код показывающий(выводящий на печать) всю родословную, описанную моделью
// class People {
//   constructor(name) {
//     this.mother = null;
//     this.father = null;
//     this.name = name;
//   }
// }

// Пример описания дочери и её родителей
// let daughter = new People('Маша');
// let v = new People('Василий');;
// let t = new People('Таня');
// daughter.father = v;
// daughter.mother = t;

// у родителей есть свои родители.

class People {
  constructor(name) {
    this.mother = null;
    this.father = null;
    this.name = name;
  }
}

let daughter = new People("Маша");
let v = new People("Василий");
let t = new People("Таня");
daughter.father = v;
daughter.mother = t;

function printFamilyTree(person, level = 0) {
  // Выводим информацию о текущем человеке
  console.log(`${" ".repeat(level * 2)}- ${person.name}`);

  // Рекурсивно вызываем эту же функцию для родителей текущего человека
  if (person.father) {
    console.log(`${" ".repeat((level + 1) * 2)}+ Отец:`);
    printFamilyTree(person.father, level + 2);
  }
  if (person.mother) {
    console.log(`${" ".repeat((level + 1) * 2)}+ Мать:`);
    printFamilyTree(person.mother, level + 2);
  }
}

// Выводим всю родословную, начиная с дочери
console.log("Родословная:");
printFamilyTree(daughter);

// Результат выполнения этого кода будет выглядеть так:

// Родословная:
// - Маша
//   + Отец:
//     - Василий
//   + Мать:
//     - Таня
// Здесь каждый уровень родословной отмечен соответствующим отступом (два пробела на каждый уровень). Родители каждого человека выведены под ним, также с отступом.
