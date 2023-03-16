// Маленькая шпаргалка -
// https://colab.research.google.com/drive/1bYuuwqYqbiJaKuMIiUgc1_SDvnH8ugVe?usp=sharing

// Дан код:
//  let arr;
//  let size;

// function createArray(arrayLength) {
//    arr = Array(arrayLength);
//    size = 0;
//  }

// function resizeArray() {
//    let len = arr.length;
//    if (len === 0) len = 1;
//    else len *= 2;
//    let temp = Array(len);
//    for (let i = 0; i < len; i++) {
//      temp[i] = arr[i];
//    }
//    arr = temp;
//  }

//  function append(item) {
//    if (arr.length <= size) {
//      resizeArray()
//    }
//    arr[size] = item;
//    size++;
// }

//  function printArray() {
//    let output = "";
//    for (let i = 0; i < size; i++) {
//      output += ${arr[i]};
//    }
//    document.write(output + "");
//  }

//  createArray(0);
//  for (let i = 0; i < 2; i++) {
//    append(1);
// }

//  printArray();
//  document.write(`size = ${size}  arr.length = ${arr.length}`);
// script>

// Реализуйте методы:
// remove() - удаляет последний
// removeAt(index) - удаляет по индексу
// growSize() - увеличивает размер
// set(index, data) - изменяет элемент
// clean() - удаляет все элементы
// contains(data) - проверяет существует ли элемент
// isEmpty() - вернет false, если в структуре есть элемент

function remove() {
  if (size > 0) {
    size--;
  }
}

function removeAt(index) {
  if (index < 0 || index >= size) {
    return;
  }
  for (let i = index; i < size - 1; i++) {
    arr[i] = arr[i + 1];
  }
  size--;
}

function growSize() {
  resizeArray();
}

function set(index, data) {
  if (index < 0 || index >= size) {
    return;
  }
  arr[index] = data;
}

function clean() {
  size = 0;
  arr = [];
}

function contains(data) {
  for (let i = 0; i < size; i++) {
    if (arr[i] === data) {
      return true;
    }
  }
  return false;
}

function isEmpty() {
  return size === 0 ? true : false;
}
