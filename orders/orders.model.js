


const orders= [
        {
            id:'111',
            date:'20-2-2025',
            subTotal:40,
            items:[
                {
                    product : {
                        id:'123',
                        description:'newww'
                    },
                    quantity:4
                },
                {
                    product : {
                        id:'122',
                        description:'oldddd'
                    },
                    quantity:3
                }
            ]
        }
]

const getAllOrders = ()=>{
    return orders
}

module.exports = {getAllOrders}