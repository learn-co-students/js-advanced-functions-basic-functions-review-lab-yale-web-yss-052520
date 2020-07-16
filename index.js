// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flare = "*") {
    return function(par = "special") {
        return `You are ${flare}${par}${flare}!`
    }
}

let Calculator = {add: function(a, b) {return a+b}, subtract: function(a,b){return a-b}, multiply: function(a,b){return a*b}, divide: function(a,b){return a/b}}

function actionApplyer(start, fnar) {
    fnar.forEach(f => start = f(start) )
    return start
}