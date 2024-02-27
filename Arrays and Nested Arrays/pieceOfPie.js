function pieSlice(pieFlavors, startFlavor, endFlavor) {

    const startIndex = pieFlavors.indexOf(startFlavor);
    const endIndex = pieFlavors.indexOf(endFlavor);

    const slicedArray = pieFlavors.slice(startIndex, endIndex + 1);

    return slicedArray;
}

const pieFlavors = ['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'];
const startFlavor = 'Key Lime Pie';
const endFlavor = 'Lemon Meringue Pie';

console.log(pieSlice(pieFlavors, startFlavor, endFlavor));