const items = [ 
    { name : 'Bike', price: 100},
    { name : 'TV',   price: 200},
    { name : 'Album',price: 10},
    { name : 'Book', price: 5},
    { name : 'Phone',price: 500},
    { name : 'Computer', price:1000},
    { name : 'Keyboad', price: 25}
]

let count = 0;
items.forEach((item) => {
    count+=1;
    if (item.name === 'Album'){
        console.log('found : '+ item.name + ' on rung ' + count);
    } else {
        console.log('not this one')
    }
});