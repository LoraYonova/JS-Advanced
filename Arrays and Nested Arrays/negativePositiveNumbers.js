function processNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }


    result.forEach(element => console.log(element));
}

processNumbers([7, -2, 8, 9]); 
processNumbers([3, -2, 0, -1]); 