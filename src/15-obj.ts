(()=>{

    type Sizes = 'S' | 'M' | 'L' | 'XL'
    type Product = {
        title:string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }

    const product: Product[] = []

	const login = (email: string, password: string) => {
        console.log(email, password)
    }

    // si queremos que una funcion reciba por parametro un objeto:

    const login2 = (data: {email: string, password: string}) => {
        console.log(data.email, data.password)
    }

    login('nel@gmail.com', 'carechancla')
    login2({
        email:'nel@gmail.com',
        password: 'carechancla'
    })

    const addProduct = (data: Product ) => {

    }
})()