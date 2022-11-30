

//console.log('Hola Mundo! si señor');

/*
    ===== Código de TypeScript =====
*/
function sumar (a:number,b:number):number{
    return a+b;
}

const sumarFecha=(a:number,b:number):number =>{
    return a+b;
}

function multiplicar(numero1:number,numero2:number,base:number):number{
    return numero1*base-numero2;

}

function porcentaje(num1:number,num2:number,num3:number=10){
    return num1*num2/num3;

}

const resta=(a:number,b:number):number=>{
    return a-b;
}



const resulSuma=sumar(10,10);
const resultSumarFecha=sumarFecha(20,20)
const resultadomulti=multiplicar(4,2,3);
const resulPorcentaje=porcentaje(20,3);
const resultadoResta=resta(50,25);

console.log(resulSuma);
console.log(resultSumarFecha);
console.log(resultadomulti);
console.log(resulPorcentaje);
console.log(resultadoResta);