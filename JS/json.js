//javascript object notation
//JSON
const user = { id: 11, name: 'gorim amir', job: 'actor' };

const stringify = JSON.stringify(user);
// console.log(stringify);
// console.log(user);



//javascript er ekta simple object backend theke dile string obosthay dibe tokhon json.parse() korle oita normal obosthay ashbe 
const shop = {
    name: 'alia store',
    adress: 'ranbir road',
    profit: 150000,
    products: ['laptop', 'mobile', 'pepsi'],//array er moton 
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
}
const shopStringiFied = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringiFied);
const converted = JSON.parse(shopStringiFied);//unboxing
console.log(converted);

//stringified hoe gele oita ar object thakbena.



