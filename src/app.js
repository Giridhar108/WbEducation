class Car {
    constructor(name, price, maximumTorque, accelerationTime100, maxSpeed) {
        this.name = name;
        this.price = price;
        this.accelerationTime100 = accelerationTime100;
        this.maxSpeed = maxSpeed;
        this.maximumTorque = maximumTorque;
    }
    getInfo() {
        console.log(`Car name:${this.name}, Car maximum speed ${this.maxSpeed}`);
    }
}
const Voyah = new Car('Voyah', 138000, 1040, 4.5, 200);
Voyah.getInfo();
// Разработать типизированную систему управления автомобилем: главный интерфейс Car и вспомогательные интерфейсы
// для различных подсистем. Реализовать функции для вывода основной информации об авто,
// о состоянии различных деталей и устройств, обновления информации и текущего состояния автомобиля.
//
//     Продемонстрировать работу создавая переменные и вызывая реализованные функции.
