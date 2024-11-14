console.log(
    'act'
)

interface Account {
    balance: number,
    getBalance(): number,

}

// Разработать типизированную систему управления банковскими счетами, 
// где каждый счет может быть дебетовым или кредитным с различными условиями обслуживания. 
// В системе должны быть: интерфейс Account, который описывает общие свойства банковского счета, 
// и классы DebitAccount и CreditAccount, которые отвечают за функциональность разных типов счетов. 
// Реализовать операции пополнения и снятия средств, проверки баланса и текущего долга.