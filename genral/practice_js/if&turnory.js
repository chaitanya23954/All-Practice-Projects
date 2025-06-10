const x = 5;
const y = 10;

if(x > 4 && y < 11) {
    console.log('x is greater than 4 & y is less than 11');
} else{
    console.log('condition did not match');
}

const colour = x > 4 ? 'red' : 'blue';

console.log(colour);

switch(colour){
    case 'blue':
        console.log('colour is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    default:
        console.log('colour did nott natch');
        break;

};