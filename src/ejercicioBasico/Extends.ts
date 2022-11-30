 class  PersonaNormal{

    constructor(
        public nombre:string,
        public direccion:string

    ){}
 }
 
 class Heroe extends PersonaNormal{
    //alias:string;
    //edad:number;
    //nombreReal:string;

    constructor(
       public alias:string,
        public edad:number,
        
        ){
         super('tony','New York')        
    }
 }

 const ironman=new Heroe('ironaman',31);
 console.log(ironman);
