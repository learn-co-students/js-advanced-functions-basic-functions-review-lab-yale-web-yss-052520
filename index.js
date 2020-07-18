// Your code here
function saturdayFun(str = "roller-skate"){
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = "go to the office"){
    return `This Monday, I will ${str}.`
}


function wrapAdjective(string = "*"){
    return function(str = "special"){
        return `You are ${string}${str}${string}!`
    }
}

let Calculator = {
    add: function(a, b){return a + b},
    subtract: function(a,b){return a - b},
    multiply: function(a,b){return a * b},
    divide: function(a,b){return a / b}
}

function actionApplyer(int, arr){
    if (arr.length == 0) return int
    for (const func of arr){
        int = func(int)
    }
    return int
}