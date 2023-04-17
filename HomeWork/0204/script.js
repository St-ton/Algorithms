// написать функцию поиска максимального и минимального элемента
//getMaxValue() {
// ….
//  }
//  getMinValue() {
// ….
//}

//
// Для массивов
//
function getMaxValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  return Math.max(...arr);
}

function getMinValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  return Math.min(...arr);
}

const arr = [1, 2, 3, 4, 5];
console.log(getMaxValue(arr)); // 5
console.log(getMinValue(arr)); // 1

//
// Для объектов
//

function getMaxValue(obj) {
  if (typeof obj !== "object" || obj === null) {
    return undefined;
  }

  const values = Object.values(obj);

  if (values.length === 0) {
    return undefined;
  }

  return Math.max(...values);
}

function getMinValue(obj) {
  if (typeof obj !== "object" || obj === null) {
    return undefined;
  }

  const values = Object.values(obj);

  if (values.length === 0) {
    return undefined;
  }

  return Math.min(...values);
}

const obj = { a: 1, b: 2, c: 3 };
console.log(getMaxValue(obj)); // 3
console.log(getMinValue(obj)); // 1
