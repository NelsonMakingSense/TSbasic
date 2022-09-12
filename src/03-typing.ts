/* si quieres usar nombres de variables repetidos en distintos archivos y que no choquen, podemos encerrar las variables en uno de los archivos dentro de una funcion anonima autoejecuctable */

(()=>{
    let myProductName = ' Product 1 ' ;
    let myProductPrice = 123 ;
    myProductName = ' change ' ;
    myProductName.toLowerCase();
    myProductPrice.toFixed ( ) ;
    const myProductStock = 1000 ;
    const myProductName2 = ' Product 1 ' ;

})() 