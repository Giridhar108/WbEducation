interface ICar {
    name: string;
    maximumTorque: number;
    maxSpeed: number;
    accelerationTime100: number;
}

class Car implements ICar {
    name: string;
    price: number;
    accelerationTime100: number;
    maxSpeed: number;
    maximumTorque: number;

    constructor(
        name: string,
        price: number,
        maximumTorque: number,
        accelerationTime100: number,
        maxSpeed: number
    ) {
        this.name = name;
        this.price = price;
        this.accelerationTime100 = accelerationTime100;
        this.maxSpeed = maxSpeed;
        this.maximumTorque = maximumTorque;
    }

    getInfo() {
        console.log(`Car name: ${this.name}, maximum speed ${this.maxSpeed}`);
    }

}

const Voyah = new Car('Voyah', 138000, 1040, 4.5, 200)

Voyah.getInfo()
// Разработать типизированную систему управления автомобилем: главный интерфейс Car и вспомогательные интерфейсы
// для различных подсистем. Реализовать функции для вывода основной информации об авто,
// о состоянии различных деталей и устройств, обновления информации и текущего состояния автомобиля.
//
//     Продемонстрировать работу создавая переменные и вызывая реализованные функции.