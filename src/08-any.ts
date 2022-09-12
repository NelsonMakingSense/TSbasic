(()=>{
    let MyDinamicVar: any;

    MyDinamicVar = 100;

    MyDinamicVar = null;

    MyDinamicVar = '';

    MyDinamicVar = 'HoLa';

    // si queremos manejar una variable any como un tipo especifico:

    const varCast = (MyDinamicVar as string).toLocaleLowerCase()
    console.log(varCast)

    MyDinamicVar = 1212

    // otra manera de hacer cast 

    const varCast2 = (<number>MyDinamicVar).toFixed()
})()