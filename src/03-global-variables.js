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
accumulate(6);
subtract(6, 12);
console.log(result);