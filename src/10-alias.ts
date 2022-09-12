(()=>{	

    // Alias
    type UserID = string | number 
    function greetings(userId: UserID) {
        if(typeof userId === 'string') {
            console.log(`string ${userId.toLocaleLowerCase()}`)
        } else {
            console.log(`number ${userId.toFixed(1)}`)
        }
    }

    // literal types

    type Sizes =  "s" | "m" | "l" | "xl"

    let shirtSize: Sizes

    shirtSize = "s"

    shirtSize = "m"

    // La siguiente asignacion no funciona porque hola mundo no esta especificado en el literal type Si se pone una S en vez de una s, da error

    // shirtSize = "hola mundo"

    function greetings2(userId: UserID, size: Sizes) {
        if(typeof userId === 'string') {
            console.log(`string ${userId.toLocaleLowerCase()}`)
        } else {
            console.log(`number ${userId.toFixed(1)}`)
        }
    }

    greetings2(34, 's')
})()