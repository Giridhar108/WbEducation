class Engine {
    constructor(hp, fuelType) {
        this.hp = hp;
        this.fuelType = fuelType;
        this.isRunning = false;
    }
    start() {
        this.isRunning = true;
        console.log('Двигатель запущен.');
    }
    stop() {
        this.isRunning = false;
        console.log('Двигатель остановлен.');
    }
    getStatus() {
        return `Двигатель: ${this.isRunning ? 'включен' : 'выключен'}, Лошадиные силы: ${this.hp}, Тип топлива: ${this.fuelType}`;
    }
}
class Transmission {
    constructor(type) {
        this.type = type;
        this.gear = 0;
    }
    shiftGear(gear) {
        this.gear = gear;
        console.log(`Передача переключена на ${gear}.`);
    }
    getStatus() {
        return `Трансмиссия: ${this.type}, Передача: ${this.gear}`;
    }
}
class Battery {
    constructor(capacity) {
        this.capacity = capacity;
    }
    getStatus() {
        return `Аккумулятор: ${this.capacity} Ач`;
    }
}
class Car {
    constructor(name, price, maximumTorque, accelerationTime100, maxSpeed, engine, transmission, battery) {
        this.engine = engine;
        this.transmission = transmission;
        this.battery = battery;
        this.name = name;
        this.price = price;
        this.accelerationTime100 = accelerationTime100;
        this.maxSpeed = maxSpeed;
        this.maximumTorque = maximumTorque;
    }
    startCar() {
        this.engine.start();
        console.log(this.getCarStatus());
    }
    stopCar() {
        this.engine.stop();
        console.log(this.getCarStatus());
    }
    getCarStatus() {
        return `${this.engine.getStatus()}\n${this.transmission.getStatus()}\n${this.battery.getStatus()}`;
    }
    getInfo() {
        console.log(`Car name: ${this.name}, maximum speed ${this.maxSpeed}`);
    }
    getMaximumTorque() {
        console.log(`Maximum torque ${this.maximumTorque}`);
    }
}
const myEngine = new Engine(150, 'бензин');
const myTransmission = new Transmission('automatic');
const myBattery = new Battery(75);
const voyah = new Car('Voyah', 138000, 1040, 4.5, 200, myEngine, myTransmission, myBattery);
voyah.startCar();
voyah.transmission.shiftGear(1);
console.log(voyah.getCarStatus());
voyah.stopCar();
// Разработать типизированную систему управления автомобилем: главный интерфейс Car и вспомогательные интерфейсы
// для различных подсистем. Реализовать функции для вывода основной информации об авто,
// о состоянии различных деталей и устройств, обновления информации и текущего состояния автомобиля.
//
//     Продемонстрировать работу создавая переменные и вызывая реализованные функции.
