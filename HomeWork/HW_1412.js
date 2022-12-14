// Написать реализацию динамического массива в js, которая поддерживает добавление и удаление элементов по индексу со сдвигом (все элементы, начиная с переданного индекса до конца, сдвигаются либо на 1 вниз, либо на 1 вверх)
array = [1, 5, 8, 7, 9, 8, 6];
console.log(`Первоначальный массив: ${array}`);
console.log('Введите в консоле addElement(index, element) или deleteElement(index) ');

const addElement = (index, element) => {
  console.log(`Добавляем элемент ${element} в индекс ${index}}`);
  array.splice(index, 0, element);
  console.log(`Массив на выходе: ${array}`);
};
const deleteElement = index => {
  console.log(`Удаляем элемент с индексом ${index} - ${array[index]}`);
  array.splice(index, 1);
  console.log(`Массив на выходе: ${array}`);
};

// addElement(10, 5);
// deleteElement(4);
