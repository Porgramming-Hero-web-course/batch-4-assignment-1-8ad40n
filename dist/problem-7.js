"use strict";
class Car {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        console.log(new Date().getFullYear() - this.year);
    }
}
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
