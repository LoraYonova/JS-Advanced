function calorieObject(input) {
    let result = {};
    for (let i = 0; i < input.length; i += 2) {
        let food = input[i];
        let calories = Number(input[i + 1]); // Convert calories to a number
        result[food] = calories; // Assign the calories to the food property in the result object
    }
    return result;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138','Apple', '52']));
calorieObject(['Potato', '93', 'Skyr', '63','Cucumber', '18', 'Milk', '42']);   

