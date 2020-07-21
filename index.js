// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function (msg = "special") {
        return "You are " + flair + msg + flair + "!"
    }
}

let Calculator = {

    add: function add(a, b) {
        return a + b
    },

    subtract: function subtract(a, b) {
        return a - b
    },

    multiply: function multiply(a, b) {
        return a * b
    },

    divide: function divide(a, b) {
        return a / b
    }

}

let actionApplyer = function (integer, array) {
    let a = integer

    for (let i = 0; i < array.length; i++) {
        a = array[i](a)
    }

    return a
}