// // // creer une classe 
// // class Point {
// //     x: number
// //     y: number
// //     constructor(x?: number , y?: number) {
// //         this.x = x 
// //         this.y = y 
// //     }
// //     draw() {
// //         console.log(`x: ${this.x} y:${this.y}`)
// //     }
// //     getDistance() {
// //         console.log("distance")
// //     }
// // }:
// // let point = new Point(1,2)
// // point.d
// //void = return nothing 
// var isReported = function (id) {
// };
// // exercice types de voiture 
// var Car = /** @class */ (function () {
//     function Car(year, km, model, color, price) {
//         this.year = year;
//         this.km = km;
//         this.model = model;
//         this.color = color;
//         this.price = price;
//     }
//     Car.prototype.displayCarDetails = function () {
//         console.log(this);
//     };
//     return Car;
// }());
// var Davidcar = new Car(15000, 2010, 'mazda', 'black', 20000);
// Davidcar.displayCarDetails();
// // public, accessible au public et possible de changer alorsque priv , impossible de changer 


// meilleure version 

// exercice types de voiture 
var Car = /** @class */ (function () {
    function Car(year, km, model, color, price) {
        this.year = year;
        this.km = km;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Car.prototype.displayCarDetails = function () {
        console.log(this);
    };
    return Car;
}());
var Davidcar = new Car(15000, 2010, 'mazda', 'black', 20000);
Davidcar.displayCarDetails();
// public, accessible au public et possible de changer alorsque priv , impossible de changer 

