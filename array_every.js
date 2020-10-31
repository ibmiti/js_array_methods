const items = [ 
    { name : 'Bike', price: 100},
    { name : 'TV',   price: 200},
    { name : 'Album',price: 10},
    { name : 'Book', price: 5},
    { name : 'Phone',price: 500},
    { name : 'Computer', price:1000},
    { name : 'Keyboad', price: 25}
]

const hasInexpensiveItems = items.every((item) => {
    if(item.price <=100){
        console.log('every item over 100 in price -- does not meet budget');
    } else {
        console.log('every item is under 100');
    }
});

