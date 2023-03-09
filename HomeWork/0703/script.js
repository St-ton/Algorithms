// Написать самостоятельно сортировку слиянием.
// Стереть все то, что написали во время классной работы и заново написать merge sort, опираясь на текстовое описание.

// Практическое задание (Напишите код):
// Счетчик инверсии для массива указывает, насколько далек (или близок) массив от сортировки. Если массив уже отсортирован, то счетчик инверсии равен 0, а если массив отсортирован в обратном порядке, то счетчик инверсии будет максимальным.

// Пример:
// Ввод: arr[] = {8, 4, 2, 1}
// Вывод: 6
// Объяснение: Данный массив имеет шесть инверсий:
// (8, 4), (4, 2), (8, 2), (8, 1), (4, 1), (2, 1).

// Ввод: arr[] = {3, 1, 2}
// Вывод: 2
// Объяснение: Данный массив имеет две инверсии:
// (3, 1), (3, 2)

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
      inversionCount += leftArr.length - leftIndex;
    }
  }

  return mergedArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

let inversionCount = 0;
const arr1 = [8, 4, 2, 1];
console.log(`Inversion count for ${arr1}: ${getInversionCount(arr1)}`);

const arr2 = [3, 1, 2];
console.log(`Inversion count for ${arr2}: ${getInversionCount(arr2)}`);

// Используется функция merge() для слияния двух отсортированных массивов вместе и функция mergeSort(), которая рекурсивно разбивает входной массив пополам до тех пор, пока он не станет пустым или будет содержать только один элемент, а затем используется merge() для объединения двух половин. Переменная inversionCount увеличивается всякий раз, когда элемент в правом массиве меньше, чем элемент в левом массиве.

// Чтобы получить количество инверсий для массива, вызваем функцию getInversionCount() с массивом в качестве аргумента:

function getInversionCount(arr) {
  inversionCount = 0;
  mergeSort(arr);
  return inversionCount;
}
