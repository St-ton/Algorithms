function find(start, end, div, sub) {
  let current = end;
  while (current !== start)
    if (current % div === 0) {
      console.log(`current = ${current} / ${div}`);
      current = current / div;
    } else {
      console.log(`current = ${current} - ${sub}`);
      current = current - sub;
    }
  console.log(`current: ${current}`);
}

find(3, 15, 3, 1);