function sumFirstAndLast(arr) {
    const numbers = arr.map(Number);
    return numbers[0] + numbers[numbers.length - 1];
}


console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));