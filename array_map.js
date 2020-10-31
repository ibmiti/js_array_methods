const items = [ 
    { name : 'Bike', price: 100},
    { name : 'TV',   price: 200},
    { name : 'Album',price: 10},
    { name : 'Book', price: 5},
    { name : 'Phone',price: 500},
    { name : 'Computer', price:1000},
    { name : 'Keyboad', price: 25}
]

const filterItems = items.map((item) => {
    return item.name
});

const filterItems2 = items.map((item) => {
    return item.price
});



console.log(items)
console.log(filterItems + ' ' + filterItems2)
