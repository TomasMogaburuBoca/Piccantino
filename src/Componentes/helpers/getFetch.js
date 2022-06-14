import anchoa from '../../Imagenes/anchoa.jpg';


let productos = [
    {id : '1',
        name: 'pizza',
            type:'pizza',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },
    {id : '2',
        name: 'pizza',
            type:'pizza',
                price: '',
                        img: {anchoa}
    },   
    {id : '3',
        name: 'pizza',
            type:'pizza',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '4',
        name: 'pizza',
            type:'pizza',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '5',
        name: 'pizza',
            type:'pizza',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '6',
        name: 'chocotorta',
            type:'postre',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '7',
        name: 'tiramisu',
            type:'postre',
                price: '',
                    img: 'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg'
    },   
    {id : '8',
        name: 'helado',
            type:'postre',
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

export const getOneFetch = (id) => {
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(productos.find((product) => product.id === id))
        }, 2000)
    })
}



