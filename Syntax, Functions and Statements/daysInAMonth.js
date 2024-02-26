function solve (month, year) {

    const date = new Date(year, month, 1);

    date.setDate(0);

    return date.getDate();

}

solve(1, 2012);
solve(2, 2021);