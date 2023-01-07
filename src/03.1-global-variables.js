let result = 0;

function add(x, y) {
  result = x + y;
}

function subtract(x, y) {
  result = x - y;
}

function accumulate(x) {
    result += x;
}

add(5, 10);
console.log(result);
subtract(6, 12);
accumulate(6);
console.log(result);