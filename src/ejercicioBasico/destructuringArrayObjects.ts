interface Reproductor{
    volumen:number;
    segundo:number;
    autor:string;
    detalles:Detalles;
}

interface Detalles{
    tipo:string;
    fecha:number;
}

const reproductor: Reproductor={
    volumen:90,
    segundo:36,
    autor:'mozart',
    detalles:{
        tipo:'clasica',
        fecha:2010
    }
}

/*
console.log('el volumen es: ', reproductor.volumen)
console.log('el segundo es: ', reproductor.segundo)
console.log('el nombre es: ', reproductor.autor)
console.log('el autor es: ', reproductor.detalles.tipo)
*/
//desestructuracion de datos, para no escribir repetitivamente "reproductor"
const {volumen,autor,segundo,detalles}= reproductor;
//Se realiza otra desestructuracion a detalles
const {tipo}=detalles;
/*
console.log('el volumen es: ', volumen)
console.log('el segundo es: ', segundo)
console.log('el nombre es: ', autor)
console.log('el autor es: ', tipo)
*/

 const dbz:string[]=['goku','vegueta','trunks'];
 const[p,s,t]=dbz;
/*
 console.log('Personaje principal',dbz[0])
 console.log('Personaje secundario',dbz[1])
 console.log('Personaje terciario',dbz[2])*/

 //console.log('Personaje principal',t);
 //console.log('Personaje secundario',t);
 console.log('Personaje terciario',t);