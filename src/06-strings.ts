(()=>{
    let productTitle = 'My amazing product'

    productTitle = 'My amazing producto changed'
    console.log('productTitle', productTitle)

    const productDescription = "my product description"

    let productPrice = 100

    let isNew = false

    // Se puede usar indistintamente la comilla sencilla y la comilla doble, a veces la comilla doble es util cuando el string lleva commillas, como el apostrofe en ingles

    // backtick: las comillas al reves

    const summary = `
        title: ${productTitle}
        description: ${productDescription}
        price: ${productPrice}
        isNew: ${isNew}         
    `;

    console.log(summary) 
})() 