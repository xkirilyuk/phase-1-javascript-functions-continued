function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(location = 'go to the office') {
    return `This Monday, I will ${location}.`;
}



function wrapAdjective(result, emphatic) {
    return `You are ${result}${emphatic}${result}!`;
}

wrapAdjective("*","a hard worker");
wrapAdjective("||", "a dedicated programmer");

let result = function wrapAdjective(wrapper, text) {
    return `You are ${wrapper}${text}${wrapper}!`;
    let result
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special"){
            return `You are ${flair}${adjective}${flair}!`;
        }
    }