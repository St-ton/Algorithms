// Задача размена монет

// Здесь мы создаем массив coins с достоинствами монет в
//  порядке убывания, затем вызываем функцию getCoinsForAmount
//  с аргументом 68. Функция проходит по массиву coins, 
// выбирает монеты в порядке убывания до тех пор, пока 
// amountLeft больше 0, и сохраняет выбранные монеты в 
// массив result.В итоге мы получаем массив coinsFor68 
// с минимальным возможным количеством монет, необходимых
//  для выдачи суммы 68.

function getCoinsForAmount(amount, coins) {
  let amountLeft = amount;
  const result = [];

  for (const coin of coins) {
    while (amountLeft >= coin) {
      amountLeft -= coin;
      result.push(coin);
    }
  }
  if (amountLeft != 0) return { check: false, coins: result };
  return { check: true, coins: result }
}


console.log(getCoinsForAmount(68, [10, 5, 2, 1]));
console.log(getCoinsForAmount(68, [6, 4, 1]));
console.log(getCoinsForAmount(9, [6, 5, 2])); 
