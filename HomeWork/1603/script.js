// Дописать пример реализации очереди ex005.html
// В качестве дополнительной информации можете посмотреть книгу
// "Структуры данных и алгоритмы", Ахо А.В., Хопкрофт Д.Э., Ульман Дж.Д. - в ней про стеки и очереди описано подробно.

// storage - массив для хранения элементов очереди;
// front - индекс элемента в начале очереди;
// rear - индекс элемента в конце очереди.
let storage = Array(10);
let front = 0;
let rear = 0;

// Функция enqueue(item) добавляет элемент item в конец очереди.
// Если очередь заполнена, то будет выведено сообщение "Queue overflow".

function enqueue(item) {
  if (rear === storage.length) {
    console.log("Queue overflow");
    return;
  }
  storage[rear++] = item;
}

// Функция dequeue() удаляет элемент из начала очереди и возвращает его значение.
// Если очередь пуста, то будет выведено сообщение "Queue underflow".
function dequeue() {
  if (front === rear) {
    console.log("Queue underflow");
    return;
  }
  return storage[front++];
}

// Функция isEmpty() возвращает true,
// Если очередь пуста, и false в противном случае.
function isEmpty() {
  return front === rear;
}

// Функция maxItemInQueue() возвращает количество элементов в очереди.
function maxItemInQueue() {
  return rear - front;
}

// Функция peek() возвращает значение элемента, находящегося в начале очереди.
// Если очередь пуста, то будет выведено сообщение "Queue is empty".
function peek() {
  if (front === rear) {
    console.log("Queue is empty");
    return;
  }
  return storage[front];
}
