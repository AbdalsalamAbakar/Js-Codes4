//.push method
let fruit = ['apple', 'banana'];
fruit.push('orange');
console.log(fruit); // Output: ['apple', 'banana', 'orange']

//.pop method
let vegetables = ['carrot', 'broccoli', 'spinach'];
let lastVegetable = vegetables.pop();
console.log(lastVegetable);

//.shift method
let animals = ['dog', 'cat', 'rabbit'];
let firstAnimal = animals.shift();
console.log(firstAnimal); // Output: 'dog'
console.log(animals); // Output: ['cat', 'rabbit']

//.unshift method
let colors = ['blue', 'green'];
colors.unshift('red');
console.log(colors); // Output: ['red', 'blue', 'green']

//.indexOf method
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(20));

//.includes method
let letters = ['a', 'b', 'c', 'd'];
console.log(letters.includes('c'));

//.slice method
let months = ['January', 'February', 'March', 'April', 'May'];
months.slice(1, 4);
console.log(months); // Output: ['February', 'March', 'April']  

//.splice method
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days.splice(1, 1, "Abdalsalam", "Ali");
console.log(days);

//.concat method
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); 

//spread operator
let arrayA = ['x', 'y', 'z'];
let arrayB = ['a', 'b', 'c'];
let mergedArray = [...arrayA, ...arrayB];
console.log(mergedArray);

//Array.isArray method
let testArray = [1, 2, 3];
let testObject = { key: 'value' };
console.log(Array.isArray(testArray));

//.reverse method
let sequence = [1, 2, 3, 4, 5];
sequence.reverse();
console.log(sequence);

//.sort method
let unsortedArray = [3, 1, 4, 2, 5];
unsortedArray.sort();
console.log(unsortedArray);

//.sort with compare function
let mixedNumbers = [10, 5, 20, 15];
mixedNumbers.sort((a, b) => a - b);
console.log(mixedNumbers);

//.toString method
let sampleArray = [1, 2, 3, 4, 5];
let arrayAsString = sampleArray.toString();
console.log(arrayAsString); // Output: '1,2,3,4,5'                                                                                                                                                                                                                                                                                                                                                                         // Output: true

//.join with separator
let words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
let sentence = words.join('');
console.log(sentence); // Output: 'Hello world this is JavaScript'

//remove a specific item by value
let fruits = ['apple', 'banana', 'orange'];
let index = fruits.indexOf('banana');
if (index !== -1) fruits.splice(index, 1);
console.log(fruits); // ['apple', 'orange']       

//how to add multiple elements at once?
let numbs = [1, 2, 3];
numbs.push(4, 5, 6);
let newArray = numbs.concat([7, 8, 9]);
console.log(numbs);
console.log(newArray);

//fill an array with the same value
let filledArray = new Array(5).fill('A');
filledArray.fill('B', 1, 4);
console.log(filledArray);

//find first and last position of repeated values
let items = ['a', 'b', 'c', 'a', 'd', 'b'];
let firstPos = items.indexOf('b');          
let lastPos = items.lastIndexOf('b');
console.log(firstPos);  
console.log(lastPos);

//combine all elements into one string
let fullName = ['Abdalsalam', 'Abakar', 'Abdalkareem', 'Bakr'];
console.log(fullName.join(' '));

//add 10 to each number using .map
let Nums = [1, 2, 3, 4, 5];
let addTen = Nums.map(n => n + 10);
console.log(addTen);

//filter ages above 18
let ages = [12, 20, 17, 30];
let adults = ages.filter(age => age > 18);
console.log(adults);

//sum all prices using .reduce()
let prices = [10, 20, 30];
let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);

//find the first value that meets the condition usin.find()
let n = [5, 10, 15, 20];
let meetc = n.find(n => n > 10);
console.log(meetc);

//find index of first value meeting condition using .findIndex()
let N = [5, 10, 15, 30];
let indexn = N.findIndex(n => n > 10);
console.log(indexn);

//test if all items meet a condition using .every()
let numbers1 = [1, 2, 4, 5];
let mCondition = numbers1.every(n => n % 2 ===0);
console.log(mCondition);

//flatten a nested array using .flat()
let arr = [1,[2, 3],[4,[5]]];
console.log(arr.flat(2));

//transform to uppercse/lowercase using .toUpperCase()/ .toLowerCase()
let words1 = ['apple', 'banana'];
let upper = words1.map(w => w.toUpperCase());
console.log(upper);

//remove duplicated values using ...new Set()
let Nu = [1,2,2,3,3,4];
let unique = [...new Set(Nu)];
console.log(unique);

//copy an array without changing the original using .slice()/ [...your variable name here] 
let arr2 =[1,3,4,6];
let copy1 = arr2.slice();
let copy2 = [...arr2];
console.log(copy1);
console.log(copy2);

//find total and average using .reduce()
let arr3 = [10, 20, 30];
let total2 = arr3.reduce((sum, n) => sum + n, 0);
let average = total2 / arr3.length;
console.log(total2);
console.log(average);

//use .map() and .filter() at the same time
let nums = [1,2,3,4,5,6];
let result = nums.filter(n => n % 2 === 0).map(n => n * 2);
console.log(result);

//check if some words exist(case insensitive)
let words4 = ['Apple', 'Banana', 'Orange'];
let exists = words4.some(w => w.toLowerCase() === 'banana'.toLowerCase());
console.log(exists);

//turn array of words into a sentence using .reduce()
let words5 = ['Learning', 'JavaScript', 'is', 'fun'];
let sentence2 = words5.reduce((acc, word) => acc + ' ' + word);
console.log(sentence2);








