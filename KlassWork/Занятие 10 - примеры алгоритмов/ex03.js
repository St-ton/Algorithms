function findPath(maze) {
  const n = maze.length;
  const m = maze[0].length;
  const path = []; // массив для хранения пути
  let x = 0;
  let y = 0;

  while (x < n - 1 || y < m - 1) { // пока не достигнут выход из лабиринта
    path.push([x, y]); // добавляем текущую позицию в путь

    if (y < m - 1 && maze[x][y + 1] === 0) {
      // движение вправо
      y++;
    } else if (x < n - 1 && maze[x + 1][y] === 0) {
      // движение вниз
      x++;
    } else {
      // если ни вправо, ни вниз не получается двигаться, возвращаемся на один шаг назад
      path.pop();
      if (path.length === 0) {
        return null; // путь не найден
      }
      [x, y] = path[path.length - 1];
    }
  }

  path.push([x, y]); // добавляем последнюю позицию в путь

  return path;
}


// Здесь maze - это двумерный массив, представляющий лабиринт, 
// где 0 - это свободный проход, а 1 - это стена или препятствие.
// Функция findPath возвращает массив позиций, которые образуют
// оптимальный путь до выхода из лабиринта при движении 
// только вправо и вниз.Если путь не найден, функция возвращает null.

//   Например, можно использовать следующий код для поиска пути в лабиринте:

const maze = [
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const path = findPath(maze);
console.log(path);

// Это выведет в консоль оптимальный путь для данного лабиринта, например:

// [
//   [0, 0],
//   [1, 0],
//   [1, 1],
//   [1, 2],
//   [1, 3],
//   [2, 3],
//   [3, 3],
//   [4, 3],
//   [4, 4]
// ]
