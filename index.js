// Your code here
function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`
}

// function mondayWork(activity = "go to the office") {
//     return `This Monday, I will ${activity}.`
// }

let mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`

// const wrapAdjective = () => {
//     return const innerFunction = () => {

//     }
// }

function wrapAdjective(string = "*") {
    return function innerFunction(param = "special") {
        return `You are ${string}${param}${string}!`
    }
}

const Calculator = {
    add: (num1, num2) => {return num1 + num2},
    subtract: (num1, num2) => {return num1 - num2},
    multiply: (num1, num2) => {return num1 * num2},
    divide: (num1, num2) => {return num1 / num2}
}
 
const actionApplyer = (int, array) => {
    array.forEach( fun => int = fun(int))
    return int
}
