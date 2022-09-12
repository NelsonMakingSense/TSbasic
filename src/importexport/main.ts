// Aca vamos a usar las funciones que se guardan en el modulo service 

import {addProduct, calcStock, products} from './product.service'

addProduct ({
    title: 'Prol',
    createdAt: new Date ( 1993 , 1 , 1 ) ,
    stock: 5
  }) ;

addProduct ({
    title: ' Pro2 ' ,
    createdAt: new Date ( 1993 , 1 , 1 ) ,
    stock: 6 ,
    size: ' XL '
} ) ;

console.log(products)
const total = calcStock()
console.log(total)