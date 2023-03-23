//Задача выбора активностей

// Отсортируйте все заявки по времени окончания активности в порядке возрастания.
// Выберите первую заявку из отсортированного списка 
// и поместите ее в список выбранных заявок.
// Проходите по всем оставшимся заявкам и выбирайте только те заявки,
// начало которых происходит после окончания предыдущей выбранной заявки.
// Добавьте выбранные заявки в список выбранных заявок и продолжайте проходить
// по оставшимся заявкам до тех пор, пока все не будут проверены.
// Верните список выбранных заявок как решение задачи.
//   Например, для следующих заявок:

function find(table) {
  table.sort((a, b) => a.end - b.end);

  console.log(table);


  const selectedActivities = [];
  let lastActivityEnd = -Infinity;

  for (const activity of table) {
    if (activity.start >= lastActivityEnd) {
      selectedActivities.push(activity);
      lastActivityEnd = activity.end;
    }
  }
  return selectedActivities;
}

const activities = [
  { start: 14, end: 15 },
  { start: 15, end: 16 },
  { start: 10, end: 11 },
  { start: 14, end: 17 },
  { start: 11, end: 13 },
  { start: 10, end: 15 },
  { start: 12, end: 13 },
  { start: 16, end: 17 }
];

const selectedActivities = find(activities);
console.log(selectedActivities);
