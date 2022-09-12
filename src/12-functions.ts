(()=>{

    type Sizes = 'S' | 'M' | 'L' | 'XL'
	function createProductToJson(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ) {
        return {
            title,
            createdAt,
            stock,
            size 
        }
    }

    // la misma funcion pero en version de arrow function: Si queremos que un parametro sea opcional, le ponemos ?, como en este caso size, puede o no ir

    const createProductToJsonArrowVersion = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    ) =>  {
        return {
            title,
            createdAt,
            stock,
            size 
        }
    }

    // Aca TS nos avisa que debemos incluir todos los parametros, no acepta si faltan o sobran. Esta funcion esta retornando un objeto, por ellos podemos decir producto1.size

    const producto1 = createProductToJson('p5', new Date(), 12, 's')
})()