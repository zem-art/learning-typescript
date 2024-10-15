"use strict";
// abstract
class Vehicle {
    start() {
        console.log('jalan');
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class MotorCycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
let motorcycle = new MotorCycle();
console.log(motorcycle.wheels);
motorcycle.start();
