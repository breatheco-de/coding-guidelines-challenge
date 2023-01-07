function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

const result = add(5, 10);
console.log(result);
const accumulate = add(result, 6);
console.log(subtract(accumulate, 12));