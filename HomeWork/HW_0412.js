//  Исходный массив

const array = [
  3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9,
  6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 0,
];

//  Переменные для замера скорости выполнения сортировок
let startQuickSort;
let finishQuickSort;
let startBubbleSort;
let finishBubbleSort;

//! Быстрая сортировка
console.log('*** Быстрая сортировка ***');

let countQuickSort = 0;

function quickSort(array) {
  startQuickSort = Date.now();

  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    countQuickSort += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  finishQuickSort = Date.now();

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(`Отсортированный массив:  ${quickSort(array)}`);
console.log(`Шагов БЫСТРОЙ сортировки: ${countQuickSort}`);
console.log(finishQuickSort - startQuickSort);

//! Пузырьковая сортировка
console.log('*** Пузырьковая сортировка ***');

let countBubbleSort = 0;

function bubbleSort(array) {
  startBubbleSort = Date.now();

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      countBubbleSort += 1;
    }
  }

  finishBubbleSort = Date.now();

  return array;
}

console.log(`Отсортированный массив:  ${bubbleSort(array)}`);
console.log(`Шагов ПУЗЫРЬКОВОЙ сортировки: ${countBubbleSort}`);
console.log(finishBubbleSort - startBubbleSort);
