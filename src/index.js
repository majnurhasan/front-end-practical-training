// const lastName = "Branwen";
// const firstName = "Qrow";

// const name = `${firstName} ${lastName}`;
// console.log(name);


// let a = [1, 2, 3, 4, 5];
// a.forEach(i => console.log(i));

// const profile = {
//     name: "Qrow Branwen",
//     occupation: "Reaper",
//     country: "???",
// };

// const Point = {x: 1, y: 1};
// // Right to Left
// const Point2 = Object.assign({}, Point, {x: 2, z: 3});

// console.log(Object.keys(Point), Object.values(Point), Object.entries(Point));

// for (let key in Point2) {
//     console.log(key, Point2[key]);
// }

// // Closure
// function outer() {
//     var b = 10;

//     function inner () {
//         var a = 20;
//         console.log(a + b);
//     }

//     return inner();
// }
// outer();

// Array & Higher Order Functions

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let x = numbers.find(function (n) {
//     // Find specific item
//     return n == 6;
// });

// console.log("find", x);

// x = numbers.findIndex(function (n) {
//     return n === 6;
// });

// console.log("findIndex", x);

// numbers.forEach(function (n) {
//     console.log(n);
// });

// const odd = numbers.filter(function(n) {
//     return n % 2 === 1;
// });

// console.log(odd);

// const map = numbers.map(function(n) {
//     return n * 2;
// });

// console.log(map);

// const reduce = numbers.reduce(function(previous, n) {
//     return previous + n;
// })

// console.log(reduce);

// Arrow Function

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let x = numbers.find(n => n == 6);

// console.log("find", x);

// x = numbers.findIndex(n => n === 6);

// console.log("findIndex", x);

// numbers.forEach((n) => console.log(n));

// const odd = numbers.filter((n) => n % 2 === 1);

// console.log(odd);

// const map = numbers.map(function(n) => n * 2);

// console.log(map);

// FIX THIS
// const reduce = numbers.reduce((previous, n) => previous + n);

// console.log(reduce);

// Destructuring Rest Operator

// const profile = {
//     name: "Qrow Branwen",
//     occupation: "Reaper",
//     country: "???",
// };

// Destructure
// const {name, occupation, country} = profile;

// console.log(name);
// console.log(occupation);
// console.log(country);

// // Spreading
// const point = { x: 1, y: 1};
// // const point2 = Object.assign({}, point);
// const point2 = {...point};
// // const point3 = Object.assign({}, point, {z: 1});
// const point3 = {...point, z: 1 };

// console.log(point, point2, point3);

// Promises, Async Stuff, FOR CONSUMING DATA!!
// getProducts().then(products => console.log(products));
// const url = "http://localhost:4000/products";

// const getProducts = async () => {
    // fetch(url)
    //     .then(
    //         (response) => {
    //         console.log(response);
    //         return response.json()
    //         }, 
    //         (error) => console.error(error)
    //     )
    //     .then(
    //         (result) => {
    //         console.log(result);
    //         return result;
    //     });

    // let loading = true;
    // fetch(url)
    //     .then(() => console.log("success"), (error) => console.error(error))
    //     .finally(() => loading = false);

    // Be careful of chaining .then, especially here
//     const response = await fetch(url);
//     console.log(response);

//     const result = await response.json();
//     console.log(result);
// };

// const getProducts = () => {
// const result = fetch(url);
// console.log(typeof result);
// }; 

// getProducts();

// document.getElementById("app").innerText = "Hello majdi";

// const products = getProducts();
// console.log(products)

// 6/15/2021

// getProducts().then((products) => console.log(products));

// addProduct();

// updateProduct();


import title, { addProduct, getProducts, updateProduct } from "./products";

getProducts().then((products) => console.log(products));
addProduct({ id: 1000});
updateProduct(1000, { title: "DDDDD"});