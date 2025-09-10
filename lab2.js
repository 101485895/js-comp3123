// EXERCISE 1
let gretter = (names) => {for (let i = 0; i < names.length; i++) { console.log("hello " + names[i]);}}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'])

// EXERCISE 2
function capitalize(word){
    const [first, ...rest] = word;
    return first.toUpperCase() + rest.join("").toLowerCase();
}
console.log(capitalize('fooBar'))
console.log(capitalize('nodeJs'))

// EXERCISE 3
function capitalizedColors(colors){
    const capitalized = colors.map(capitalize);
    return capitalized;
}
console.log(capitalizedColors(['red', 'green', 'blue', 'orange']))

// EXERCISE 4
function filterLessThan20(nums){
    const filteredNums = nums.filter(num => num < 20);
    return filteredNums;
}
console.log(filterLessThan20([1, 60, 34, 30, 20, 5]))

// EXERCISE 5
function calculateSum(nums){
    const sum = nums.reduce((counter, num) => counter + num, 0);
    return sum;
}

function calculateProduct(nums){
    const product = nums.reduce((counter, num) => counter * num, 1); //Starts at 1 so it become 0 and multiply everything by 0
    return product;
}
console.log(calculateSum([1, 2, 3, 4]))
console.log(calculateProduct([1, 2, 3, 4]))

// EXERCISE 6
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details(){
        return `Model: ${this.model}, Engine: ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of $${this.balance}`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976)
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info());