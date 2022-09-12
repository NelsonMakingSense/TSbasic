// Para probar el codigo se escribe en la consola node dist/09-union-types.js

(()=>{
	let userId: string | number;
    userId = 1212
    userId = 'Juan Perez'

    function greetings(myVar: string | number) {
        if(typeof myVar === 'string') {
            console.log(`string ${myVar.toLocaleLowerCase()}`)
        } else {
            console.log(`number ${myVar.toFixed(1)}`)
        }
    }

    greetings('Freddy Mercury')
    greetings(2324)

    const rta = 1 + '1'
})()

