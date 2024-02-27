function oddPositionsDoubledAndReversed(arr) {

    return arr.filter((_, index) => index % 2 !== 0).map(num => num * 2).reverse().join(' ');
    
}


console.log(oddPositionsDoubledAndReversed([10, 15, 20, 25])); 
console.log(oddPositionsDoubledAndReversed([3, 0, 10, 4, 7, 3])); 
