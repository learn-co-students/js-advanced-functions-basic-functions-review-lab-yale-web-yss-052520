// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*"){
    return function(input = "special"){
        return `You are ${string}${input}${string}!`
    }
}

let Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b, 
    multiply: (a,b) => a*b, 
    divide: (a,b) => a/b
}

function actionApplyer(int, arr) {
    arr.forEach(func => int = func(int))
    return int 
}