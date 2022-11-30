import { Producto } from './destructuringArguments';
import { Grantotal } from "./destructuringArguments";


const audifonos:Producto={
    desc:'telefono So',
    precio:10000
}
const accesorios:Producto={
    desc:'computer',
    precio:10000
}



const compras=[audifonos,accesorios];
const [subtotal,iva19,total]=Grantotal(compras);

const carritoCompras: Producto[]=[
    {
        desc:'tarjeta grafica',
        precio:10000
    },
    {
        desc:'torre',
        precio:30000
    },
];

const [desc,precio]=carritoCompras;

const [total1,total2,total3]=Grantotal(carritoCompras);



console.log('productos en cada variabe')
console.log(audifonos)
console.log(accesorios)
console.log('sin iva',subtotal)
console.log('iva',iva19)
console.log('total',total)

console.log('productos en carrito de compras')
console.log('primer compra carrito',desc)
console.log('segunda compra carrito',precio)
console.log('sin iva',total1)
console.log('iva',total2)
console.log('total',total3)
