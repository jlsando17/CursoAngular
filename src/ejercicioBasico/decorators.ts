
function classDecorator<T extends {new(...args:any[]):{}}>(
    constructor:T
){
    return class extends constructor{
        newProperty="new property";
        hello="override";
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad:string='ABC123';

    imprimir(){
        console.log('Hello world')
    }
}

console.log(MiSuperClase)

const miclase=new MiSuperClase();
console.log(miclase.miPropiedad);