// 1. Linear Search  Given an array arr[] of N elements, the challenge is to write a function to find a given element x in arr[] .

// Линейный поиск используется для поиска ключевого элемента среди нескольких элементов.
// Линейный поиск сегодня используется меньше, потому что он медленнее, чем бинарный поиск и хеширование.

// Алгоритм:
// Шаг 1: Обход массива
// Шаг 2: Сопоставьте ключевой элемент с элементом массива
// Шаг 3: Если ключевой элемент найден, верните позицию индекса элемента массива.
// Шаг 4: Если ключевой элемент не найден, верните -1

function linearSearch(searchElement, arr) {
  result = -1;
  arr.forEach(elementArray => {
    if (elementArray === searchElement) {
      result = array.indexOf(elementArray);
    }
  });
  return result;
}

// 2. Find the element that appears once in a sorted array
// Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.

// Простое решение состоит в обходе массива слева направо. Поскольку массив отсортирован, мы легко можем найти нужный элемент.

// Алгоритм:
// Шаг 1: Обход массива через один элемент
// Шаг 2: Если элемент отличается от первого то мы нашли не задублированный элемент
// Шаг 3: Вернем элемент или позицию в массиве
// Шаг 4: Если ключевой элемент не найден, верните -1 или что то еще :)
// Шаг 5: Исправить ошибку ArrayIndexOutOfBoundsException

function searchOneElement(arr) {
  let result = -1;
  for (let i = 1; i < arr.length - 1; i = i + 2) {
    if (arr[i] !== arr[i - 1]) {
      result = arr[i];
      return result;
    }
  }
  if (result === -1) {
    return result;
  }
}
