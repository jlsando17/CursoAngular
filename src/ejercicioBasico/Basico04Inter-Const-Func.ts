interface Avatar{
    nombre:string;
    pv:number;
    mostrarpv:()=>void;  

}

const Dragon: Avatar={
    nombre:'jose',
    pv:50,
      mostrarpv(){
        console.log('puntos de vida',this.nombre,this.pv);

      }
}

const Principe: Avatar={
    nombre:'pepito',
    pv:20,
    mostrarpv(){
        console.log('alias',this.nombre,'puntos',this.pv);
}
}
function curar(personaje:Avatar,curarX:number):void{
 //personaje.hp=personaje.hp+curarX;
    personaje.pv+=curarX;

    console.log(personaje);
}

function dead(personaje:Avatar,morirx:number):void{
    personaje.pv-=morirx;
    console.log(personaje);
}

curar(Dragon,20);
dead(Principe,20);

Dragon.mostrarpv();
Principe.mostrarpv();