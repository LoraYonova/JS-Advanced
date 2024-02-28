function townPopulation(input) {
    let registry = {};

    for (let line of input) {

        let [town, population] = line.split(' <-> ');

        population = Number(population);

        if (registry.hasOwnProperty(town)) {
            registry[town] += population;
        } else {
            registry[town] = population;
        }

    }
        for (let town in registry) {
            console.log(`${town} : ${registry[town]}`);
        }

    
    
}

// townPopulation(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']);

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);