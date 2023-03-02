//todo  1 уровень сложности: Есть замечательная детская игра в которой перекладывают диски с одной пирамидки на другую. https://ollgames.ru/xanojskaya-bashnya/?ysclid=lems5111ia61702102
//todo Напишите программу, которая бы показывала последовательность игрока для того, чтобы выиграть. Например:
//todo Для базового случая: вывод может выглядеть так
// с 1 на 3
// с 1 на 2
// с 3 на 2
// с 1 на 3
// со 2 на 1
// со 2 на 3
// с 1 на 2
// с 1 на 3

function hanoi(n, source, target, auxiliary) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${target}`);
    return;
  }

  hanoi(n - 1, source, auxiliary, target);
  console.log(`Move disk ${n} from ${source} to ${target}`);
  hanoi(n - 1, auxiliary, target, source);
}

hanoi(3, "1", "3", "2");

// Функция hanoi принимает четыре параметра: n — количество дисков, source — имя исходной башни (например, «1»), target — имя целевой башни (например, «3»), а вспомогательный — имя вспомогательная башня (например, «2»).
// Когда n равно 1, диск из исходной башни перемещается в целевую. В противном случае сначала рекурсивно перемещаются n-1 дисков из исходной башни во вспомогательную, затем перемещается оставшийся диск из исходной башни в целевую и, наконец, рекурсивно перемещается n-1 дисков из вспомогательной башни в целевую башню.