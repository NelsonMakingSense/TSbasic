
// Aca vamos a poner todo lo que tenga que ver con modelado de datos
// para evitar choques entre variables, ponemos la palabra reservada export para decir que estas variables deben importarse para poder usarse

export type Sizes = ' S ' | ' M ' | ' L ' | ' XL ' ;
export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
} ;