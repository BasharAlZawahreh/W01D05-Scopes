console.log(arrowTitle)
/* START CODE UNDER THIS LINE */


console.log('*********Pulse Check**********');
console.log('Q1');
let myFavoriteFood = 'Maqlouba';
// make sure that the variable is in the global scope
const favoriteFood = function () {
    return myFavoriteFood;
};

//favoriteFood(); // => the value of `myFavoriteFood` variable


console.log('Q2');
const updateFavoriteFood = function (newValue) {
    myFavoriteFood = newValue;
};

//updateFavoriteFood("Pizza");
//favoriteFood(); // => "Pizza"



console.log('Q2');
console.log('Q3');
const createCounter = function (start) {
    let counter = start;

    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
        return ++counter;
    };
};

let counter1 = createCounter(5);
let counter2 = createCounter(7);




console.log('**********************************************');
console.log('*********Practice**********');
console.log('Q1');

let age = 25;
if (true) {
    age = 30;
}
age; // Always the value of age will be changed to 30 because the condition is always true


const myName = "John";
if (true) {
    const myName = "Jane";
}

myName; // here we will face an Error of changing a constant value




console.log('Q2');
let number = 10;
const func1 = function () {
    let number = 15;

    if (true) {
        let number = 24;
    }

    return number;
};

func1(); // Error of redeclaring the variable number!

const func2 = function (age) {
    age = 10;
    if (true) {
        let age = 24;
        age = 20;
    }

    return age;
};

func2(26); // Error of redeclaring the variable age!



console.log('Q3');
let count = 5;
const countDown = function () {
    if (count === 0) {
        return "count down is over";
    }

    return --count;
};

//countDown(); // => 4
//countDown(); // => 3
//countDown(); // => 2
//countDown(); // => 1
//countDown(); // => 0
//countDown(); // => "count down is over"



console.log('Q4');


const countUp = function () {
    return ++count;
};

//countUp(); // => 4
//countUp(); // => 5
//countUp(); // => 6
//countUp(); // => 7
//countUp(); // => 8





console.log('Q5');
const resetCount = function (start) {
    count = start;
};

//resetCount(0); // => "the count has been reset"
//countUp(); // => 1
//resetCount(10); // => "the count has been reset"
//countUp(); // => 11





console.log('Q6');
console.log('Q7');
const createToDoList = function (toDo) {
    let toDoList = '';

    return function (toDo) {
        toDoList += toDo + ' ';

        return toDoList;
    }


};


const toDoListOne = createToDoList();




console.log('Q8');
let accountBalance = 0;
const deposit = function (amount) {
    accountBalance += amount;
    return accountBalance;
};

//deposit(100); // => 100
//deposit(50); // => 150




console.log('Q9');
const withdraw = function (amount) {

    if (accountBalance <= amount) {
        return 'insufficient funds, current balance: 30';
    }

    accountBalance -= amount;
    return accountBalance;
};

//deposit(100); // => 100
//deposit(50); // => 150
//withdraw(70); // => 80
//deposit(50); // => 130
//withdraw(100); // => 30
//withdraw(100); // => "insufficient funds, current balance: 30"



console.log('Q10');
const createAccount = function (initialValue) {

    let balance = initialValue;

    return  function(transactionType , amount){
        if (transactionType === 'withdraw') {
            if (balance < amount) {
                return `Insufficient funds, current balance: ${balance}`
            }
            else{
                balance -= amount;
            }
        }
        else if(transactionType ==='deposit'){
            balance += amount;
        }

        return balance;
    };

};

const accountOne = createAccount(0);
//accountOne("withdraw", 10); // => "insufficient funds, current balance: 0"
//accountOne("deposit", 50); // => 50
//accountOne("deposit", 70); // => 120
//accountOne("withdraw", 10); // => 110

const accountTwo = createAccount(500);
//accountTwo("withdraw", 100); // => 400
//accountTwo("withdraw", 100); // => 300
//accountTwo("deposit", 50); // => 350
//accountTwo("withdraw", 500); // => "insufficient funds, current balance: 350"






console.log('*******************************************');
console.log('*********Extra Practice**********');
console.log('Q1');
// every time the function is called it must check if the passed argument is the maximum number, minimum number, or
// both, and preserve the result for later invocations
let min = -Infinity;
let max = Infinity;
const minMax = function (number) {
    if (min === -Infinity && max === Infinity) {
        min = max = number;
    }
    if (number > max) {
        max = number;
    }
    else if (min > number) {
        min = number;
    }

    return `The maximum number is: ${max} and the minimum number is ${min}`

};

//minMax(5); // => "the maximum number is: 5 and the minimum number is 5"
//minMax(2); // => "the maximum number is: 5 and the minimum number is 2"
//minMax(3); // => "the maximum number is: 5 and the minimum number is 2"
//minMax(7); // => "the maximum number is: 7 and the minimum number is 2"
//minMax(0); // => "the maximum number is: 7 and the minimum number is 0"





console.log('Q2');
console.log('Q3');
console.log('Q5');
let wins = 0;
let losts = 0;
let computerMove = '';

const randomMove = function () {
    const move = Math.random();

    if (computerMove !== '') {
        if (move <= (1 / 3)) {
            return 'rock';
        }
        else if (move <= (2 / 3)) {
            return 'paper';
        }
        else {
            return 'scissors';
        }

    }

    else {
        if (move <= (1 / 4)) {
            return 'rock';
        }
        else if (move <= (2 / 4)) {
            return 'paper';
        }
        else if (move <= (2 / 4)) {
            return 'scissors';
        }
        else {
            return computerMove;
        }
    }


};


const rockPaperScissors = function (move, reset) {

    computerMove = randomMove();
    //lastMove = randomMove();

    if (reset && move === '') {
        return "The game has been resetted";
    }

    if (wins === 3 || losts === 3 || reset) {
        wins = losts = 0;
    }



    if (move !== 'rock' && move !== 'scissors' && move !== 'paper') {
        return "invalid move";
    }

    if (computerMove === move) {
        return 'its a draw';
    }
    else if ((computerMove === 'rock' && move === 'paper') ||
        (computerMove === 'scissors' && move === 'rock') ||
        (computerMove === 'paper' && move === 'scissors')
    ) {

        return `Won: ${++wins}, Lost:${losts}`;
    }
    else if ((move === 'rock' && computerMove === 'paper') ||
        (move === 'scissors' && computerMove === 'rock') ||
        (move === 'paper' && computerMove === 'scissors')
    ) {
        return `Won: ${wins}, Lost:${++losts}`;
    }

};

