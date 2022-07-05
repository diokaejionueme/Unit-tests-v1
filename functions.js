// functions.js
function addTwoNumbers(a, b) {
    return a + b;
}

function sayHello(name){
    if(name !== 'Will')
    return(`Hi there ${name}!`);
    else{

        return(`No more testing ${name}!`);
    }
}

function buildCar(color, type){
    let carProperties = {
        carColor: color,
        carType: type;
    }

    

    if(carColor){
        return (carColor);
    }
    else if(carColor, carType){
        return (carType);
    }else {
        return({})
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
    buildCar
}