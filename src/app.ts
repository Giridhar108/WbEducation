class Calculator {
    _toDecimal(value: string, base: number): number {
        return parseInt(value, base);
    };

    add(num1: string, num2: string, base: number): string {
        const decNum1 = this._toDecimal(num1, base);
        const decNum2 = this._toDecimal(num2, base);
        const result = decNum1 + decNum2;
        return result.toString(base);
    };

    subtract(num1: string, num2: string, base: number): string {
        const decNum1 = this._toDecimal(num1, base);
        const decNum2 = this._toDecimal(num2, base);
        const result = decNum1 - decNum2;
        return result.toString(base);
    };

    multiply(num1: string, num2: string, base: number): string {
        const decNum1 = this._toDecimal(num1, base);
        const decNum2 = this._toDecimal(num2, base);
        const result = decNum1 * decNum2;
        return result.toString(base);
    };

    divide(num1: string, num2: string, base: number): string | void {
        const decNum1 = this._toDecimal(num1, base);
        const decNum2 = this._toDecimal(num2, base);
        if (decNum2 === 0) {
            console.log("Деление на ноль невозможно")
            return
        }
        const result = decNum1 / decNum2;
        return result.toString(base);
    };

}


const calculator = new Calculator();

// Десятичные числа
const aDecimal = "10";
const bDecimal = "5";
console.log(`Сложение ${aDecimal} + ${bDecimal} = ${calculator.add(aDecimal, bDecimal, 10)}`);
console.log(`Вычитание ${aDecimal} - ${bDecimal} = ${calculator.subtract(aDecimal, bDecimal, 10)}`);
console.log(`Умножение ${aDecimal} * ${bDecimal} = ${calculator.multiply(aDecimal, bDecimal, 10)}`);
console.log(`Деление ${aDecimal} / ${bDecimal} = ${calculator.divide(aDecimal, bDecimal, 10)}`);

// Двоичные числа
const aBinary = "1010"; // 10
const bBinary = "0101"; // 5
console.log(`Сложение ${aBinary} + ${bBinary} = ${calculator.add(aBinary, bBinary, 2)}`);
console.log(`Вычитание ${aBinary} - ${bBinary} = ${calculator.subtract(aBinary, bBinary, 2)}`);
console.log(`Умножение ${aBinary} * ${bBinary} = ${calculator.multiply(aBinary, bBinary, 2)}`);
console.log(`Деление ${aBinary} / ${bBinary} = ${calculator.divide(aBinary, bBinary, 2)}`);

// Шестнадцатеричные числа
const aHex = "A"; // 10
const bHex = "5"; // 5
console.log(`Сложение ${aHex} + ${bHex} = ${calculator.add(aHex, bHex, 16)}`);
console.log(`Вычитание ${aHex} - ${bHex} = ${calculator.subtract(aHex, bHex, 16)}`);
console.log(`Умножение ${aHex} * ${bHex} = ${calculator.multiply(aHex, bHex, 16)}`);
console.log(`Деление ${aHex} / ${bHex} = ${calculator.divide(aHex, bHex, 16)}`);