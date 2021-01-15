// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

function getAllFirePokemons(arr) {
    return arr.filter(elem => elem.type.includes("Fire"));
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(arr) {
    if(!arr.length) return 0;

    let clonedArr = JSON.parse(JSON.stringify(arr));

    clonedArr.sort((a, b) => {
        if (a.height < b.height) {
            return -1;
        }
        else if (a.height > b.height) {
            return 1;
        }
        else {
            return 0;
        }
    })
    return clonedArr[0].name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(arr) {
    if(!arr.length) return 0;

    let total = arr.reduce((acc, elem) => {
        if (elem.candy_count) {
            return acc + elem.candy_count;
        }
        else {
            return acc;
        }
    }, 0);
    return +(total/arr.length).toFixed(2);
}

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(arr) {
    if(!arr.length) return 0;

    let groundPokemons = arr.filter(elem => elem.type.includes("Ground"));
    let firstTen = groundPokemons.slice(0, 10);

    return firstTen.map(elem => elem.img);
}

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(arr) {
    if(!arr.length) return 0;

    // filter returns an array of only one element
    let pikaWeight = arr.filter(elem => elem.name === "Pikachu")[0].weight;    //returns a string with kg at the end
    pikaWeight = +pikaWeight.slice(0, -3);      // + sign to parse the string to a number

    let heavyPokemons = arr.filter(elem => {
        if (+elem.weight.slice(0, -3) > pikaWeight) {
            return true;
        }
    });

    return heavyPokemons.map(elem => elem.name);
}


// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(arr) {
    let clonedArr = JSON.parse(JSON.stringify(arr));

    clonedArr.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        else if (a.name > b.name) {
            return 1;
        }
        else {
            return 0;
        }
    })

    clonedArr = clonedArr.slice(0, 20);

    return clonedArr.map(elem => elem.name);
}


// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

function strongPokemons(arr) {
    let oneWeaknessArr = arr.filter(elem => elem.weaknesses.length === 1);
    oneWeaknessArr = oneWeaknessArr.slice(0, 15);

    return oneWeaknessArr.map(elem => elem.name);
}