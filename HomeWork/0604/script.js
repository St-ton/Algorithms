// Проверьте, равны ли два массива или нет
// Два массива называются равными, если:оба они содержат один и тот же набор элементов, расположение(или перестановки) элементов может / не может быть одинаковым.
// Если есть повторения, то количество повторяющихся элементов также должно быть одинаковым, чтобы два массива были равны.
//   Ввод: arr1[] = { 1, 2, 5, 4, 0}, arr2[] = { 2, 4, 5, 0, 1}
// Вывод: Да

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

const arr1 = [1, 2, 5, 4, 0];
const arr2 = [2, 4, 5, 0, 1];

if (areArraysEqual(arr1, arr2)) {
  console.log("Да");
} else {
  console.log("Нет");
}
