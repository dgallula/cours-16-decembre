# cours-16-decembre

exercice better version class constructor 

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
