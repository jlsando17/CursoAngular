export interface Producto{
    desc:string;
    precio:number
}

const telefono:Producto={
    desc:'telefono Sony',
    precio:50000
}

const portatil:Producto={
    desc:'computador Lenovo',
    precio:30000
}

export function Grantotal(prod:Producto[]):[number,number,number]{
   
    let total=0;

    prod.forEach(({precio})=>{
        total +=precio;
    })
    return [total,total*20/100,total+total*20/100];

}



const articulos = [telefono,portatil];
const [subtotal,iva19,total]=Grantotal(articulos);

console.log('1er producto',telefono)
console.log('2do producto',portatil)
console.log('sin iva',subtotal)
console.log('iva',iva19)
console.log('total',total)