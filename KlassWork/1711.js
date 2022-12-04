//
// 1. Создать функцию solve, которая принимает 4 аргумента:
//      int n (количество дисков в начале исполнения)
//      int fromRod (стержень, с которого снимается диск)
//      int toRod (стержешь, на который должен быть положен диск в итоге)
//      int additionalRod (стержень, который используется как вспомогательный)
// 2. В функции выполнить проверку n === 1, если она выполняется,
//вывести, с какого стержня переносится диск и на какой и сделать return
// 3. Вызвать solve, поменяв местами toRod и additionalRod и уменьшив n на 1
// 4. Вывести номер диска, который мы переносим (n) и стержени с которого мы переносим,
//    на который мы переносим и тот, который используется, как дополнительный
// 5. Вызвать solve, поменяв местами fromRod и additionalRod и уменьшив n на 1
// 6. Вызвать sovle с аргументами (3, 1, 3, 2)

solve(3, 1, 3, 2);

function solve(n, fR, tR, aR) {
  if (n === 1) {
    console.log(`Move 1 from rod ${fR} to rod ${tR}`);
    return;
  }
  solve(n - 1, fR, aR, tR);
  console.log(`Move ${n} from rod ${fR} to rod ${tR} with rod ${aR}`);
  solve(n - 1, aR, tR, fR);
}

// Код Валерии
// function solve(n, fromRod, toRod, additionalRoad) {
//     if (n === 1) {
//         console.log(`Перенсти диск 1 с ${fromRod} на ${toRod}`);
//         return;
//     } else {
//         solve (n-1, fromRod, additionalRoad, toRod);
//         console.log(`Перенсти диск ${n} с ${fromRod} на ${toRod}`);
//         solve (n-1, additionalRoad, toRod, fromRod);
//     };
// };
