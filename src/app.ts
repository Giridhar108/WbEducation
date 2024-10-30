interface IEngine {
    hp: number;
    fuelType: string;
    start(): void;
    stop(): void;
    getStatus(): string;
}

interface ITransmission {
    type: 'automatic' | 'manual';
    gear: number;
    shiftGear(gear: number): void;
    getStatus(): string;
}

interface IBattery {
    capacity: number;
    getStatus(): string;
}

interface ICar {
    name: string;
    price: number;
    maximumTorque: number;
    maxSpeed: number;
    accelerationTime100: number;
    engine: IEngine;
    transmission: ITransmission;
    battery: IBattery;
    getMaximumTorque(): void;
    getInfo(): void;
    startCar(): void;
    stopCar(): void;
    getCarStatus(): string;
}

class Engine implements IEngine {
    private isRunning: boolean = false;

    constructor(public hp: number, public fuelType: string) {}

    start(): void {
        this.isRunning = true;
        console.log('Двигатель запущен.');
    }

    stop(): void {
        this.isRunning = false;
        console.log('Двигатель остановлен.');
    }

    getStatus(): string {
        return `Двигатель: ${this.isRunning ? 'включен' : 'выключен'}, Лошадиные силы: ${this.hp}, Тип топлива: ${this.fuelType}`;
    }
}

class Transmission implements ITransmission {
    public gear: number = 0;

    constructor(public type: 'automatic' | 'manual') {}

    shiftGear(gear: number): void {
        this.gear = gear;
        console.log(`Передача переключена на ${gear}.`);
    }

    getStatus(): string {
        return `Трансмиссия: ${this.type}, Передача: ${this.gear}`;
    }
}

class Battery implements IBattery {
    constructor(public capacity: number) {}

    getStatus(): string {
        return `Аккумулятор: ${this.capacity} Ач`;
    }
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
        maxSpeed: number,
        public engine: IEngine,
        public transmission: ITransmission,
        public battery: IBattery
    ) {
        this.name = name;
        this.price = price;
        this.accelerationTime100 = accelerationTime100;
        this.maxSpeed = maxSpeed;
        this.maximumTorque = maximumTorque;
    }

    startCar(): void {
        this.engine.start();
        console.log(this.getCarStatus());
    }

    stopCar(): void {
        this.engine.stop();
        console.log(this.getCarStatus());
    }

    getCarStatus(): string {
        return `${this.engine.getStatus()}\n${this.transmission.getStatus()}\n${this.battery.getStatus()}`;
    }

    getInfo() {
        console.log(`Марка авто: ${this.name}, максимальная скорость: ${this.maxSpeed}`);
    }

    getMaximumTorque() {
        console.log(`Максимальный крутящий момент: ${this.maximumTorque}`);
    }
}

const myEngine = new Engine(692, 'бензин');
const myTransmission = new Transmission('automatic');
const myBattery = new Battery(75);
const voyah = new Car('Voyah', 138000, 1040, 4.5, 200, myEngine, myTransmission, myBattery);

voyah.startCar();
voyah.transmission.shiftGear(1);
console.log(voyah.getCarStatus());
voyah.stopCar();
