
let productos = [
    {id : 1,
        name: 'pizza',
            type:'',
                price: ''
    },
    {id : 2,
        name: 'pizza',
            type:'',
                price: ''
    },   
    {id : 3,
        name: 'pizza',
            type:'',
                price: ''
    },   
    {id : 4,
        name: 'pizza',
            type:'',
                price: ''
    },   
    {id : 5,
        name: 'pizza',
            type:'',
                price: ''
    },   
    {id : 6,
        name: 'pizza',
            type:'',
                price: ''
    },   
    {id : 7,
        name: 'pizza',
            type:'',
                price: ''
    },   
    {id : 8,
        name: 'pizza',
            type:'',
                price: ''
    },   
];

export const getFetch = () => {
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(productos)
        }, 2000)
    })
}
