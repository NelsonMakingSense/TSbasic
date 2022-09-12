(()=>{
    const prices = [1, 2, 3, 3,4,5,3]

    let pricesTotal = [1,2,3,4,5, 'hola', true]

    pricesTotal.push(false)

    // si queremos que el array soporte otros datos debemos explicitar el tipo de datos que queremos incluir

    let mixed: (number | string | boolean | Object ) [] = ['hola', true]

    // cuando agregamos el tipo Object, TS nos permite agregar objetos y arrays tambien

    mixed.push(14)

    let numbers = [1,2,3,4,5]
    numbers.map(item => item * 2)

    // si el array fuera de strings , map no funcionaria y TS nos avisa automaticamente del error

})()