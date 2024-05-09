let car = {
    brand: "Mercedes",
    year: 2023,
    model: "S600",
    class: "S",
}
for(let prop in car){
    console.log(prop)
    console.log(car[prop])
}

let planet = {
    name: "Mercury",
    year: "infinite",
    popular: "8E",
    klimaat: "Very Warm",
}
let newPlanet = Object.entries(planet)
console.log(newPlanet)

let numbers = {
    superNumber: 200000,
    keyBirthday: 2009,
    keyYears: 15,
    keyHeight: 167,
}
let newNumbers = Object.values(numbers)
let neW = Math.max(...newNumbers)
console.log(neW)

/* let caR = {
    brand: "BMW",
    year: 2023,
    model: "M5",
}
for(let key in caR){
    console.log(key)
    console.log(caR[key])
} */

let caR = {
    brand: "Nissan",
    year: 2020,
    model: "GTR",
}
let newCar = Object.keys(caR)
let secondCar = Object.values(caR)

let joinCar = [...newCar, ...secondCar]
console.log(joinCar)

let user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}
user.mood = "happy"
user.hobby = "skydiving"
user.premium = false
for(let key of Object.keys(user)){
    console.log(`${key}: ${user[key]}`)
}

let workers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
}

let findBestEmployee = function(workers){
    let newWorkers = Math.max(...Object.values(workers))
    for(let [prop, worker] of Object.entries(workers)){
        if(worker === newWorkers){
            return prop
        }
    }
}

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
)

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
  ); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux

let countTotalSalary = function(employees) {
    let totalSalary = 0;

    for(let key in employees) {
        totalSalary += employees[key]
    }

    return totalSalary
}

console.log( 
    countTotalSalary({ 
        mango: 100, 
        poly: 150, 
        alfred: 80, 
    }), 
)

console.log( 
    countTotalSalary({ 
        kiwi: 200, 
        lux: 50, 
        chelsy: 150, 
    }), 
)



let products = [ 
    { name: 'Радар', price: 1300, quantity: 4 }, 
    { name: 'Сканер', price: 2700, quantity: 3 }, 
    { name: 'Дроїд', price: 400, quantity: 7 }, 
    { name: 'Захоплення', price: 1200, quantity: 2 }, 
]

let getAllPropValues = function (arr, prop) { 
    let array = []
    for(let element of arr){
        if(element[prop] !== undefined){
            array.push(element[prop])
        }
    }
    return array
}

console.log(getAllPropValues(products, 'name')) // ['Радар', 'Сканер', 'Дроїд', 'Захоплення'] 

console.log(getAllPropValues(products, 'quantity')) // [4, 3, 7, 2] 

console.log(getAllPropValues(products, 'category')) // []



let productsThird = [ 
    { name: 'Радар', price: 1300, quantity: 4 }, 
    { name: 'Сканер', price: 2700, quantity: 3 }, 
    { name: 'Дроїд', price: 400, quantity: 7 }, 
    { name: 'Захоплення', price: 1200, quantity: 2 }, 
] 

let calculateTotalPrice = function(allProdcuts, productName){
    let result;
    for(let par of allProdcuts){
        if(par.name === productName){
            result = par.price * par.quantity
        }
    }
    return result
}


console.log(calculateTotalPrice(products, 'Радар')); // 5200 

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800



let Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
}

let transactionCounter = 300352965748

let account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
        let transaction = {
            id: transactionCounter++,
            type,
            amount,
        }
        return transaction
    },

    deposit(amount){
        let transaction = this.createTransaction(amount, Transaction.DEPOSIT)
        this.balance += amount
        this.transactions.push(transaction)
        console.log(`Successfully deposited ${amount} dollars.`)
    },

    withdraw(amount){
        if(amount > this.balance){
            console.log("Insufficient money. Transaction failed.")
        return
        }
        let transaction = this.createTransaction(amount, Transaction.WITHDRAW)
        this.balance -= amount
        this.transactions.push(transaction)
        console.log(`Successfully withdrew ${amount} dollars.`)
    },

    getBalance(){
        console.log(`Current balance: ${this.balance} dollars.`)
    },

    getTransactionDetails(id){
        let transaction = this.transactions.find(transaction => transaction.id === id)
        if(transaction){
            console.log(`Transaction details: ID - ${transaction.id}, Type - ${transaction.type}, Amount - ${transaction.amount} dollars`)
        } 
        else{
            console.log("Transaction not found.")
        }
    },

    getTransactionTotal(type) {
        let total = this.transactions.reduce((acc, transaction) =>{
            if(transaction.type === type){
                return acc + transaction.amount
            } 
            else{
            return acc
            }
        }, 0)
        console.log(`Total ${type} transactions: ${total} dollars.`)
    },

    getTransactionHistory() {
    console.log("Transaction history:")
        for (const transaction of this.transactions) {
        console.log(`ID: ${transaction.id}, Type: ${transaction.type}, Amount: ${transaction.amount} dollars`)
        }
    },
}

account.deposit(324)
account.withdraw(286)
account.getBalance()
account.getTransactionDetails(1)
account.getTransactionTotal(Transaction.DEPOSIT)
account.getTransactionHistory()