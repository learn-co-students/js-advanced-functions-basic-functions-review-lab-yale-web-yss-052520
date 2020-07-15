// Your code here
let saturdayFun = (event = "roller-skate") => {
    return `This Saturday, I want to ${event}!`;
}

let mondayWork = (event = "go to the office") => {   
    return `This Monday, I will ${event}.`
}

let wrapAdjective = (flair = "*") => {
    let inner = (word = "special") => {
        return `You are ${flair + word + flair}!`
    };
    return inner;
}

let Calculator = {
    add: (a, b) => {return a + b;},
    subtract: (a, b)=> {return a - b;},
    multiply: (a, b)=> {return a * b;},
    divide: (a, b)=> {return a / b;}
};

let actionApplyer = (start, fn_array) => {
    for (const fn of fn_array){
        start = fn(start);
    }
    return start;
}
