// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(str="special") {
        return `You are ${flair}${str}${flair}!`
    }
}

let Calculator = {add: (a, b) => a + b, subtract: (a, b) => a - b, multiply: (a, b) => a * b, divide: (a, b) => a / b}

function actionApplyer(int, fns) {
    fns.forEach(fn => int = fn(int))
    return int 
}
