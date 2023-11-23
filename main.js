let sumar = document.getElementById('sumar');
let restar = document.getElementById('restar');
let multiplicar = document.getElementById('multiplicar');
let dividir = document.getElementById('dividir');


function SumarNumeros(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(num1) + parseInt(num2);
    console.log("La suma es:  " + resultado);
    document.getElementById('total').innerText = resultado;
}

function RestarNumeros(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(num1) - parseInt(num2);
    console.log("La resta es:  " + resultado);
    document.getElementById('total').innerText = resultado;
}

function MultiplicarNumeros(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(num1) * parseInt(num2);
    console.log("La multiplicacion es:  " + resultado);
    document.getElementById('total').innerText = resultado;
}

function DividirNumeros(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(num1) / parseInt(num2);
    console.log("La division es:  " + resultado);
    document.getElementById('total').innerText = resultado;
}


function IMC(){
    let peso = document.getElementById('dato1').value
    let altura = document.getElementById('dato2').value
    let mensaje="";
    if(parseFloat(peso)<18){
        mensaje="Bajo Peso"
    }
    else if(parseFloat(peso)>18 && parseFloat(peso)<24,9){
        mensaje="Peso Normal"
    }

    else if(parseFloat(peso)>=25 && parseFloat(peso)<29,9){
        mensaje="Sobre Peso "
    }

    else if(parseFloat(peso)>30){
        mensaje="Obesidad"
    }

    let resultadoPeso=mensaje;
    let resultado = parseFloat(peso) / (parseFloat(altura)*parseFloat(altura));
    console.log(resultadoPeso);
    console.log("Tu IMC es:  " + resultado);
    document.getElementById('result').innerText = resultadoPeso;
    document.getElementById('resultpeso').innerText = resultado;
}



sumar.addEventListener('click', SumarNumeros);
restar.addEventListener('click', RestarNumeros);
multiplicar.addEventListener('click', MultiplicarNumeros);
dividir.addEventListener('click', DividirNumeros);
resultadoImc.addEventListener('click',IMC);