// Quick sort пишем еще раз “с чистого листа”
// Выбираем опорный элемент из массива. Как правило, это средний элемент.
// Делим массив на 2 подмассива. Элементы, которые меньше опорного, и элементы, которые больше   опорного.
// Рекурсивно применяем сортировку к обоим подмассивам.
// В результате массивы будут делиться до тех пор, пока не останется один элемент, который потом отсортируется.

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = Math.floor(arr.length / 2);
  // выбираем опорный элемент - средний в массиве
  const leftArr = [],
    rightArr = [],
    equalArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    } else {
      equalArr.push(arr[i]);
    }
  }

  return quickSort(leftArr).concat(equalArr, quickSort(rightArr));
  // рекурсивно вызываем функцию сортировки для обоих подмассивов
}

const arr = [5, 2, 7, 3, 9, 1, 8, 6, 4];
console.log(quickSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
