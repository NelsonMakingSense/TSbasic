(()=>{
    let myNumber: number | null;
    myNumber = 13
    let myString: string | undefined;
    myString = "hola juan"

    let myNull: null
    let myUndefined: undefined

    // Se puede evaluar con un if clasico si la variable es un string o si es null 

    function hi(name:string | null) {
        let hello = 'Holas '
        if(name) {
            hello += name
        } else {
            hello += 'nobody'
        }
        console.log(hello)
    }

    // Esta funcion hace lo mismo pero en vez de if usamos el opcional chaining

    function hi2(name:string | null) {
        let hello = 'Holas '
        hello += name?.toLocaleLowerCase() || 'nobody';
        console.log(hello)
    }


    hi('Nelson')
    hi(null)
    hi()


})()