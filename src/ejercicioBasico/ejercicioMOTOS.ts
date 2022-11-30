
interface Motos{
    marca:string;
    cilindraje:number;
    accesorios?:string[]
}

const moto1:Motos={
    marca:'Honda',
    cilindraje:1000,
    accesorios:['slider','fullsystem','quifchifter']
}

const moto2:Motos={
    marca:'tvs',
    cilindraje:100,

}

function CantidadAccesorios(moto:Motos):void{
    const CuantosAccesorios=moto.accesorios?.length || 0;
    console.log('cantidad de accesorios',CuantosAccesorios,'unidades');

}

CantidadAccesorios(moto1);