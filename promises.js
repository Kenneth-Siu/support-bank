// Make a promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
});

// Promises pending or resolving
console.log(promise);
setTimeout(() => {
    console.log(promise);
}, 1000);

// Promise consuming
promise.then((result) => {
    console.log(result);
});

// Promise rejecting
const badPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("oh no"), 1000);
});
console.log(badPromise);
setTimeout(() => {
    console.log(badPromise);
}, 1000);
badPromise.catch((reason) => console.log(reason));

// Promise chaining
new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);
})
    .then((result) => {
        return result + " again";
    })
    .then((result) => {
        return result + " and again";
    })
    .then(() => {
        throw "no reason";
    })
    .then((result) => {
        console.log(result);
    })
    .catch((reason) => {
        console.log(reason);
    });

// Using APIs which return promises
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((result) => {
        return result.json();
    })
    .then((json) => {
        console.log(json);
    })
    .catch((err) => {
        console.log("boooo");
        console.log(err);
    });

// Chaining promises
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((result) => {
        return result.json();
    })
    .then((result) => {
        console.log(result.name);
        return fetch("https://pokeapi.co/api/v2/pokemon/raichu");
    })
    .then((result) => {
        return result.json();
    })
    .then((result) => {
        console.log(result.name);
        return fetch("https://pokeapi.co/api/v2/pokemon/pichu");
    })
    .then((result) => {
        return result.json();
    })
    .then((result) => {
        console.log(result.name);
    });
