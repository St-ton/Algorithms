// вычислить сложность в лучшем и худшем случае
// Зададим на входе 3х методов равнозначые данные

// 1 Сложность лучший случай (самый быстрый), если только b не равно 0. 
// Если b = 0, то сложность будет наихудшая, т.к. цикл станет бемконечным
//
// Количество иттераций О(n)
//

let countAlg1 = 0;
function alg1 (a, b) {
  if (b !=0){
          while (a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
            countAlg1++;
        }
    }  
  } 
   alg1(51,1);
   console.log("Количество шагов-1 "+countAlg1); 

// 2 Сложность Худшая
//
// Количество иттераций О((n*n/4).....)
//

let countAlg2 = 0;
function alg2(n) {
        for (let i = 0; i < n / 2; i++) {
            for (let j = 1; j + n / 2 <= n; j++) {
                for (let k = 1; k <= n; k = k * 2) {
                  console.log("I am expert!");
                  countAlg2++;
                }
            }
          }
    }
    alg2(50);
    console.log("Количество шагов-2 "+countAlg2); 

// 3 Сложность средняя
//
// Количество иттераций О(.....) 
//
let countAlg3 = 0;
function alg3(n) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j = j + i) {
              console.log("I am expert!");
              countAlg3++;
            }
        }
    }
    alg3(50);
    console.log("Количество шагов-3 "+countAlg3); 

