// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}

let wrapAdjective = function(string="*"){
    return function(param="special"){
        return `You are ${string}${param}${string}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b;
    }
}

let actionApplyer = function(integer, array){
    let start = integer
    for (let i = 0; i < array.length; i++ ){
      start = array[i](start)
    }
    return start
  }