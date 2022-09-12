// aca se crean los metodos - funciones que van a usar los datos modelados en productmodels.ts Para traer los datos modelados, usamos import
// Aca tambien vamos a exportar las funciones para que otro archivo lo pueda importar

import {Product} from './product.model'

export const products : Product[] = [];
export const addProduct = ( data: Product ) => {
 products.push ( data ); 
}

export const calcStock = (): number => {
    let total = 0
    products.forEach((item) => {
        total += item.stock
        
    })

    return total
}