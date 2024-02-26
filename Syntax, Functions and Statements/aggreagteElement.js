function sum (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function sumInverse (arr) {
    return arr.reduce((acc, curr) => acc + (1 / curr), 0);
}

function concat(arr) {
    return arr.join('');
}

const arr = [2, 4, 8, 16];

console.log(sum(arr));
console.log(sumInverse(arr).toFixed(4));
console.log(concat(arr));

