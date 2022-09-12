(() => {
    // inferido
    let productPrice = 100
    productPrice = 12

    // esto da error porque no podemos asignar un string a una variable que ya se le habia asignado un numero
    // productPrice = 'hola mundo'

    // explicito
    let customerAge: number = 28;

    // esto da error
    // customerAge = customerAge + '23'

    // lo correcto es sumar un numero, no un string

    customerAge = customerAge + 23

    
    let productInStock : number ;
    console.log ( ' productInStock ' , productInStock ) ;
    if ( productInStock > 10 ) {
    console.log ( ' is greater ' ) ;

    // esta variable se vuelve tipo numero porque la funcion parseInt convierte un string en un numero

    let discount = parseInt('123')

    console.log('discount', discount)

    // las siguientes variables son numeros hexagesimales y binarios, para asignarlos hay que preceder el numero de 0x y 0b respectivamente, si se agrega un tipo de numero que no corresponde al prefijo, TS nos envia una advertencia
    let hed = 0xfff 

    let bin = 0b1010
    
})()