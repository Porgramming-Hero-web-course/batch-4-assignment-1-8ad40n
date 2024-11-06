
class Car {
    name: string;
    model: string;
    year: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getCarAge() : void {
        console.log(new Date().getFullYear() - this.year);
    }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();