const items = [1,2,3,4,5];

const includesTwo = items.includes(2) // true
const includeSix = items.includes(6) // false

if (includesTwo) {
    console.log('the array includes two');
} else {
    console.log('array does not include two');
}
if (includeSix){
    console.log('the array include six');
} else {
    console.log('the array does not include six');
}