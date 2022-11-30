interface SuperHeroe {
    nombre:string;
    edad:number;
    direccion:Direccion
 
    mostrarDireccion:()=>string;

}

interface Direccion{
    calle:string;
    pais:string;
    ciudad:string
}



const SuperHeroe={
    nombre:'telepata',
    edad:30,
    direccion:{
        calle:'siempre viva 123',
        pais:'Colombia',
        ciudad:'sogamoso'
    },
    mostrarDireccion(){
        return this.nombre+', '+ this.direccion.ciudad+', '+this.direccion.pais;
    }


}

const direccion= SuperHeroe.mostrarDireccion();
console.log(direccion);