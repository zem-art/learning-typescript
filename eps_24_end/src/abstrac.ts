// abstract

abstract class Vehicle {
    abstract wheels:number;

    start():void {
        console.log('jalan');
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

class MotorCycle extends Vehicle {
    wheels: number = 2;
}

let car = new Car()
console.log(car.wheels);
car.start()

let motorcycle = new MotorCycle()
console.log(motorcycle.wheels);
motorcycle.start()

