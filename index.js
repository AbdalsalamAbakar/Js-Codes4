//array methods

//Array .push method
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']

//Array .pop method
let lastFruit = fruits.pop();
console.log(lastFruit); // 'grape'
console.log(fruits); // ['apple', 'banana', 'orange']       

//Array .shift method
let firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
console.log(fruits); // ['banana', 'orange']

//Array .unshift method
fruits.unshift('kiwi');
console.log(fruits); // ['kiwi', 'banana', 'orange']    

//Array .slice method
let citrus = fruits.slice(1, 3);
console.log(citrus); // ['banana', 'orange']

//Array .splice method
fruits.splice(1, 1, 'mango', 'peach');
console.log(fruits); // ['kiwi', 'mango', 'peach', 'orange']

//Array .indexOf method
let index = fruits.indexOf('peach');
console.log(index); // 2    

//Array .includes method
let hasMango = fruits.includes('mango');
console.log(hasMango); // true  
let hasApple = fruits.includes('apple');
console.log(hasApple); // false

//Array .forEach method
fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
}); 

// 0: kiwi
// 1: mango
// 2: peach
// 3: orange    

//Array .map method
let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});     
console.log(upperFruits); // ['KIWI', 'MANGO', 'PEACH', 'ORANGE']

//Array .filter method  
let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 4;
});
console.log(longFruits); // ['mango', 'peach', 'orange']
//Array .reduce method
let totalLength = fruits.reduce(function(total, fruit) {
    return total + fruit.length;
}, 0);  
console.log(totalLength); // 16

//Array .find method    
let foundFruit = fruits.find(function(fruit) {
    return fruit.startsWith('p');
});
console.log(foundFruit); // 'peach'

//Array .findIndex method
let foundIndex = fruits.findIndex(function(fruit) {
    return fruit.startsWith('o');
});                 
console.log(foundIndex); // 3

//Array .sort method
fruits.sort();
console.log(fruits); // ['kiwi', 'mango', 'orange', 'peach']    

//Array .reverse method
fruits.reverse();
console.log(fruits); // ['peach', 'orange', 'mango', 'kiwi']    

//Array .join method
let fruitString = fruits.join(', ');
console.log(fruitString); // 'peach, orange, mango, kiwi'   

//Array .concat method
let moreFruits = ['watermelon', 'pineapple'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['peach', 'orange', 'mango', 'kiwi', 'watermelon', 'pineapple']  

//Array .flat method
let nestedFruits = [['apple', 'banana'], ['orange', 'grape']];
let flatFruits = nestedFruits.flat();
console.log(flatFruits); // ['apple', 'banana', 'orange', 'grape']  

//Array .flatMap method
let flatMappedFruits = nestedFruits.flatMap(function(group) {
    return group.map(function(fruit) {  
        return fruit.toUpperCase();
    });
});
console.log(flatMappedFruits); // ['APPLE', 'BANANA', 'ORANGE', 'GRAPE']    

//Array .fill method
let filledArray = new Array(5).fill('fruit');
console.log(filledArray); // ['fruit', 'fruit', 'fruit', 'fruit', 'fruit']  

//Array .some method
let hasLongFruit = fruits.some(function(fruit) {
    return fruit.length > 5;
}); 
console.log(hasLongFruit); // true

//Array .every method
let allShortFruits = fruits.every(function(fruit) {
    return fruit.length < 10;
});
console.log(allShortFruits); // true
//Array .from method
let str = 'hello';
let charArray = Array.from(str);
console.log(charArray); // ['h', 'e', 'l', 'l', 'o']    
//Array .of method
let numArray = Array.of(1, 2, 3, 4, 5);
console.log(numArray); // [1, 2, 3, 4, 5]

//Array .copyWithin method
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3);
console.log(numbers); // [4, 5, 3, 4, 5]    
//Array .entries method
let entries = fruits.entries();     
for (let entry of entries) {
    console.log(entry);
}       
// [0, 'peach']
// [1, 'orange']
// [2, 'mango']
// [3, 'kiwi']          
//Array .keys method
let keys = fruits.keys();
for (let key of keys) {
    console.log(key);
}                   

// 0
// 1
// 2
// 3                    
//Array .values method
let values = fruits.values();   
for (let value of values) {
    console.log(value);
}       
// 'peach'
// 'orange'
// 'mango'
// 'kiwi'       
//Array .toString method
let fruitStr = fruits.toString();
console.log(fruitStr); // 'peach,orange,mango,kiwi'    

//Array .toLocaleString method
let localeStr = fruits.toLocaleString();
console.log(localeStr); // 'peach,orange,mango,kiwi'    
//Array .length property
console.log(fruits.length); // 4            
//Array .at method
console.log(fruits.at(1)); // 'orange'
console.log(fruits.at(-1)); // 'kiwi'

//Array .findLast method        
let lastFruitStartingWithM = fruits.findLast(function(fruit) {
    return fruit.startsWith('m');
});
console.log(lastFruitStartingWithM); // 'mango'     
//Array .findLastIndex method
let lastIndexStartingWithO = fruits.findLastIndex(function(fruit) {
    return fruit.startsWith('o');
});     
console.log(lastIndexStartingWithO); // 1
//Array .with method
let newFruits = fruits.with(1, 'blueberry');
console.log(newFruits); // ['peach', 'blueberry', 'mango', 'kiwi']
console.log(fruits); // ['peach', 'orange', 'mango', 'kiwi'] (original array remains unchanged)
