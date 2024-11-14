class Account {
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        console.log(this.balance);
    }
    getMoney(value) {
        this.balance = this.balance - value;
    }
    putMoney(value) {
        this.balance = this.balance + value;
    }
}
class DebitAccount extends Account {
    getBalance() {
        console.log(this.balance);
    }
}
class CreditAccount extends Account {
    getBalance() {
        console.log(this.balance);
    }
}
const debitAccount = new DebitAccount(108);
const creditAccount = new CreditAccount(1008);
debitAccount.getBalance();
creditAccount.getBalance();
// Разработать типизированную систему управления банковскими счетами, 
// где каждый счет может быть дебетовым или кредитным с различными условиями обслуживания. 
// В системе должны быть: интерфейс Account, который описывает общие свойства банковского счета, 
// и классы DebitAccount и CreditAccount, которые отвечают за функциональность разных типов счетов. 
// Реализовать операции пополнения и снятия средств, проверки баланса и текущего долга.
