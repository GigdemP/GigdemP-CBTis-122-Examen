let  mongoose  =  require  ( 'mangosta' ) ;
let  Base  =  require  ( '../models/Base' ) ;
deje  BaseController  =  { } ;

BaseController . list  =  ( req ,  res ) => {
    Base . encontrar ( { } )
        . límite ( 20 )
        . saltar ( 0 )
        . exec ( ( err ,  estatal ) => {
            si  ( err ) {
                consola . log ( 'Error:' , err ) ;
            }
            res . render ( '../views/index' , {
                pintores : pintor ,
                título : "PINTORES" ,
                año : nueva  fecha ( ) . getDate ( )
            } ) ;
        } )
} ;
