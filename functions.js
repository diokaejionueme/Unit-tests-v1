// functions.js
function addTwoNumbers(a, b) {
    return a + b
}

function sayHello(name){
    if(name !== 'Will')
    return(`Hi there ${name}!`);
    else{

        return(`No more testing ${name}!`);
    }
}

/* function buildCar(){

    for(var i = 0; i < arguments.length; i++){
    if(arguments.length === 1){
        return arguments[0];
    }else if(arguments.length === 2){
        return arguments[2];

    }else{
        return({});
    }
}
} */



module.exports = {
    addTwoNumbers,
    sayHello,
    //buildCar
}