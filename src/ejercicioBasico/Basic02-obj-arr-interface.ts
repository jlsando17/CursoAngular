

//console.log('Hola Mundo! si señor');

/*
    ===== Código de TypeScript =====
*/
let habilidades: string[]=['abs','controlTraccion','launchControl'];

interface  Vehiculo {
    nombre:string;
    hp:number;
    caracteristicas:string[];
    marca?:string;

}


const vehiculo:Vehiculo ={
    nombre:'Moto',
    hp:210,
    caracteristicas:['abs','controlTraccion','launchControl']
    
}

vehiculo.marca='Honda';
console.table(vehiculo);