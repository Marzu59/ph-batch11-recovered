function add(num1, num2){
        return num1 + num2;

}
function substriction(num1, num2){
    return num1 - num2;

}
function multiply(num1, num2){
    return num1 * num2
}
function divided(num1, num2){
    return num1 / num2;
}

function calculator(a, b, opereation){
    if(opereation === 'jog' ){
        const result = add(a, b);
        return result;
    }
    else if(opereation === 'biyog'){
           const result = substriction(a, b);
           return result;
    }
    else if(opereation === 'gun'){
         return multiply(a, b)
    }
    else if(opereation === 'vag'){
        return divided(a, b);
        
    }
    else{
        return "only 'add' and others"
    }
}

const results = calculator(6, 8, 'gun')
console.log(results)