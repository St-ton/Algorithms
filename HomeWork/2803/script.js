// Задача: вызов лифта
// В доме два лифта.
// Реализовать алгоритм отправки наиближайшего на вызывающий этаж.
// Алгоритм будет применяться в домах разной этажности.
// *Алгоритм будет применяться в домах с количеством > 2 лифтов
// Пример:
// в доме 19 этажей
// работают лифт А и лифт В
// лифт А находиться на 0 этаже
// лифт В находиться на 8 этаже
// на вход: 1
// отправляем лифт А

Определяем, какие лифты находятся ближе всего к этажу вызова. Если один лифт ближе, то отправить его на этаж вызова. Если несколько лифтов ближе, выбрать из них лифт, который находится ближе всего к этажу, на котором он свободен.

nameLift - имя лифта (например, "A" или "B")
currentFloor - текущий этаж, на котором находится лифт
direction - направление движения лифта (1 - вверх, -1 - вниз, 0 - стоит на месте)
isFree - флаг, указывающий, свободен ли лифт
floor - этаж, на котором был вызов

const lifts = [
  { name: "A", currentFloor: 0, direction: 0, isFree: true },
  { name: "B", currentFloor: 8, direction: 0, isFree: true }
];

const calls = [
  { floor: 1, direction: 1 },
  { floor: 5, direction: -1 },
  { floor: 10, direction: 1 }
];

Для определения ближайшего лифта используем функцию, которая будет перебирать все лифты и выбирать из них тот, который находится ближе всего к этажу вызова.Если есть несколько лифтов на равном расстоянии, функция будет выбирать из них тот, который находится ближе всего к этажу, на котором он свободен. 

function findNearestLift(floor, direction, lifts) {
  let nearestLift = null;
  let minDistance = Infinity;
  for (let i = 0; i < lifts.length; i++) {
    const lift = lifts[i];
    if (lift.isFree) {
      const distance = Math.abs(lift.currentFloor - floor);
      if (distance < minDistance) {
        nearestLift = lift;
        minDistance = distance;
      } else if (distance === minDistance) {
        const nearestFloor = findNearestFloor(lift.currentFloor, lifts);
        const floorDistance = Math.abs(nearestFloor - floor);
        const currentFloorDistance = Math.abs(nearestLift.currentFloor - floor);
        if (floorDistance < currentFloorDistance) {
          nearestLift = lift;
        }
      }
    }
  }
  return nearestLift;
}

Функция findNearestLift принимает три аргумента: этаж вызова floor, направление вызова direction и массив объектов лифтов lifts. Функция возвращает объект лифта, который должен быть отправлен на этаж вызова.

Функция перебирает все лифты и для каждого лифта определяет расстояние до этажа вызова. Если лифт свободен и находится ближе к этажу, чем предыдущий ближайший лифт, он становится новым ближайшим лифтом. Если есть несколько лифтов на равном расстоянии, функция вызывает вспомогательную функцию findNearestFloor, которая находит этаж, на котором лифт находится ближе всего к этажу вызова. Затем функция сравнивает расстояния до этажа вызова для текущего ближайшего лифта и нового лифта, и если новый лифт находится ближе к этажу, на котором он свободен, чем текущий ближайший лифт, то новый лифт становится новым ближайшим лифтом.

Функция findNearestFloor принимает два аргумента: текущий этаж лифта currentFloor и массив объектов лифтов lifts.Функция возвращает этаж, на котором находится ближайший свободный лифт.

function findNearestFloor(currentFloor, lifts) {
  let nearestFloor = null;
  let minDistance = Infinity;
  for (let i = 0; i < lifts.length; i++) {
    const lift = lifts[i];
    if (lift.isFree) {
      const distance = Math.abs(lift.currentFloor - currentFloor);
      if (distance < minDistance) {
        nearestFloor = lift.currentFloor;
        minDistance = distance;
      }
    }
  }
  return nearestFloor;
}

Для отправки лифта на этаж вызова можно использовать функцию sendLift, которая принимает два аргумента: объект лифта lift и объект вызова call.Функция устанавливает направление движения лифта и отправляет его на этаж вызова.

function sendLift(lift, call) {
  lift.direction = Math.sign(call.floor - lift.currentFloor);
  lift.isFree = false;
  console.log(`Отправляем лифт ${lift.name} на этаж ${call.floor}`);
}

Для полной реализации алгоритма можно использовать цикл while, который будет работать до тех пор, пока все вызовы не будут обработаны.В каждой итерации цикла будет выбираться ближайший свободный лифт и отправляться на этаж вызова.
  
while (calls.length > 0) {
  const call = calls.shift();
  const nearestLift = findNearestLift(call.floor, call.direction, lifts
);
sendLift(nearestLift, call);
}

Полный код 


Вот полный код решения:


function findNearestLift(floor, direction, lifts) {
  let nearestLift = null;
  let minDistance = Infinity;
  for (let i = 0; i < lifts.length; i++) {
    const lift = lifts[i];
    if (lift.isFree) {
      const distance = Math.abs(lift.currentFloor - floor);
      if (distance < minDistance) {
        nearestLift = lift;
        minDistance = distance;
      } else if (distance === minDistance) {
        const nearestFloor1 = findNearestFloor(lift.currentFloor, lifts);
        const nearestFloor2 = findNearestFloor(nearestLift.currentFloor, lifts);
        const distance1 = Math.abs(nearestFloor1 - floor);
        const distance2 = Math.abs(nearestFloor2 - floor);
        if (distance1 < distance2) {
          nearestLift = lift;
        }
      }
    }
  }
  return nearestLift;
}

function findNearestFloor(currentFloor, lifts) {
  let nearestFloor = null;
  let minDistance = Infinity;
  for (let i = 0; i < lifts.length; i++) {
    const lift = lifts[i];
    if (lift.isFree) {
      const distance = Math.abs(lift.currentFloor - currentFloor);
      if (distance < minDistance) {
        nearestFloor = lift.currentFloor;
        minDistance = distance;
      }
    }
  }
  return nearestFloor;
}

function sendLift(lift, call) {
  lift.direction = Math.sign(call.floor - lift.currentFloor);
  lift.isFree = false;
  console.log(`Отправляем лифт ${lift.name} на этаж ${call.floor}`);
}

const calls = [  { floor: 1, direction: 1 },  { floor: 8, direction: -1 },  { floor: 12, direction: 1 },];

const lifts = [  { name: "A", currentFloor: 0, isFree: true },  { name: "B", currentFloor: 8, isFree: true },  { name: "C", currentFloor: 15, isFree: true },];

while (calls.length > 0) {
  const call = calls.shift();
  const nearestLift = findNearestLift(call.floor, call.direction, lifts);
  sendLift(nearestLift, call);
}

При запуске кода в консоли будет выведено:

Отправляем лифт A на этаж 1
Отправляем лифт B на этаж 8
Отправляем лифт C на этаж 12
