
let productos = [
    {id : '1',
        name: 'pizza',
            type:'',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },
    {id : '2',
        name: 'pizza',
            type:'',
                price: '',
                        img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '3',
        name: 'pizza',
            type:'',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '4',
        name: 'pizza',
            type:'',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '5',
        name: 'pizza',
            type:'',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '6',
        name: 'pizza',
            type:'',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '7',
        name: 'pizza',
            type:'',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '8',
        name: 'pizza',
            type:'',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
];

export const getFetch = () => {
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(productos)
        }, 2000)
    })
}


//Detalle de producto
let producto = {id : '1',
        name: 'pizza',
            type:'',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
}

export const getOneFetch = () => {
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(producto)
        }, 2000)
    })
}

