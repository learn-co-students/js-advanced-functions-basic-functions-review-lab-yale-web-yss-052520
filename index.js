// Your code here

function saturdayFun (activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity= "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper= "*"){
    function inner(adjective="special"){
        return `You are ${wrapper}${adjective}${wrapper}!`
    }
    return inner
}

const Calculator = {
    add : function (num1,num2){return num1 + num2},
    subtract : function (num1,num2){return num1 - num2},
    multiply : function (num1,num2){return num1 * num2},
    divide : function (num1,num2){return num1 / num2}
}

function actionApplyer(startingPoint, ary){
    let a = startingPoint
    ary.forEach(func => a = func(a))
    return a
}