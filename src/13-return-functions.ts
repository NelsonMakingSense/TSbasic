(()=>{
   

	const calcTotal = (prices:number[]): string => {
        let total = 0
        prices.forEach((item) => {
            total += item;
        })
        // si la funcion obligatoriamente devuelve un String, el return se debe convertir a string
        return total.toString()
    }
    // esta funcion no retorna nada 
    const printTotal = ( prices: number[] ): void => {
        const rta = calcTotal (prices) ;
        console.log ( ` El total es ${ rta }`  ) ;
    }
    const respuesta = printTotal([2,3,45,5,2,34,4])
    console.log(respuesta)
})()