function calc(id1, id2, respId, operador){
    var num1 = parseFloat(document.getElementById(id1).value)
    var num2 = parseFloat(document.getElementById(id2).value)
    console.log(num1, num2)

switch (operador) {
    case "+":
        resultado = num1 + num2
        break;

    case "-":
        resultado = num1 - num2
        break; 

    case "*":
        resultado = num1 * num2
        break;
    case "/":
        if(num2 !== 0){
            resultado = num1 / num2
        }else{
            resultado = "erro: divisao por zero"
        }
        
        break;

    default:
        resultado = "operador invalido"
}    
    document.getElementById(respId).textContent = resultado;
}
