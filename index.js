function actionApplyer(startInt, arr){
  if (arr == {}) {
    return startInt
  } else {

    for(let fn of arr){
      startInt = fn(startInt)
    }

    return startInt

  }

}

let Calculator = {}

Calculator.add = (num1, num2) => {
  return num1 + num2
}

Calculator.subtract = (num1, num2) => {
  return num1 - num2
}

Calculator.multiply = (num1, num2) => {
  return num1 * num2
}

Calculator.divide = (num1, num2) => {
  return num1 / num2
}

function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
} //function declaration

const mondayWork = function(activity='go to the office'){
return `This Monday, I will ${activity}.`
} //function expression

wrapAdjective = (symbol='*') => {
  return function(word='special'){
    return `You are ${symbol}${word}${symbol}!`
  }
}



