// Your code here
function saturdayFun(str = "roller-skate") {
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str = "go to the office") {
    return `This Monday, I will ${str}.`
}

function wrapAdjective(flair = "*"){
    return function(adj = "special"){
        return `You are ${flair}${adj}${flair}!`
    }
}
const Calculator = {
    add: function add(a,b){return a+b},
    subtract: function subtract(a,b){return a-b},
    multiply: function multiply(a,b){return a*b},
    divide: function divide(a,b){return a/b}
}

let actionApplyer = function(int, array) {
    let x = int
    for (let i = 0; i < array.length; i++ ){
      x = array[i](x)
    }
    return x
  }