
//GEnericos

function queTipoSoy<T>(argumento:T){
    return argumento;
}

let soystring = queTipoSoy('Hola Mundo');
let soynumber = queTipoSoy(123);
let arreglo= queTipoSoy([1,2,3,4,5]);
let numero = queTipoSoy<number>(13);






console.log(soystring);
console.log(soynumber);
console.log(arreglo);
console.log(numero);