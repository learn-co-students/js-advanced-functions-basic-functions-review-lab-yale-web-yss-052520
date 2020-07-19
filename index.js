// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
} 

function wrapAdjective(adjective = "*") {
    return function(para = "special") {
        return `You are ${adjective}${para}${adjective}!`
    }   
}

const Calculator = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    },
    multiply(a, b) {
        return a * b
    },
    divide(a, b) {
        return a / b
    }
}

function actionApplyer(starter, int_array) {
    if (int_array.length == 0) {
        return starter 
    } else {
        let new_start = int_array[0](starter)
        let new_array = int_array.slice(1)
        return actionApplyer(new_start, new_array) 
            
    }
}

