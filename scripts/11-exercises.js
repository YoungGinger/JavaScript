/*
let nums = [10, 20, 30];
nums[2] = 90;
console.log(nums);



function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'hey']));

 getLastValue(nums);
  
 function arraySwap(array) {
  const lastIndex = array.length - 1;
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'hey']));



for(let i = 0; i <= 10; i += 2) {
  console.log(i)
}



for(let i = 5; i >= 0; i--) {
  console.log(i);

}


let i = 0;

while (i <= 10) {
  console.log(i)
  i += 2;
  
}

i = 5;

while (i >= 0) {
  console.log(i);
  i--;
}


const array = [1, 2, 3];
const result = [];
nums = [-1, 44, 100, 90];
const nums2 = [1, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  result.push(array[i] + 1);
}
   
function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    const num = array[i] + 1;
    array[i] = num;
  }
}

addOne(nums);
console.log(nums);

function addNumToArray(array, num){
  for (let i = 0; i < array.length; i++) {
    const number = array[i] + num;
    array[i] = number;
  }
}

addNumToArray(nums, 5);
console.log(nums);


num1 = [-1, 44, 100, 99, 10, 15, 10, 11];
num2 = [1, 3, 4, 5, 6, 7];
const result1 = [];

function addArrays(array1, array2) {
  let x = 0;
  let y = 0;
  if (array1.length >= array2.length) {
      x = array1.length;
      y = array1.length - array2.length;
      for (let i = 0; i <= y; i++) {
        array2.push(0);
      }
    } else {
      x = array2.length;
      y = array2.length - array1.length;

      for (let i = 0; i <= y; i++) {
        array1.push(0);
    }
  }
  for (let i = 0; i < x; i++) {
      const num1 = array1[i];
      const num2 = array2[i];
      result1.push(num1 + num2);
  }
}
addArrays(num1, num2);
console.log(result1);




function countPositive (array) {
  let x = 0;
  for(let i = 0; i <= array.length; i++) {
    
      if (array[i] > 0) {
        x++;
      } 
    
}
return x;
}
console.log(countPositive([1, 3, 2, 10, -4, -5, 10]));



function minMax(array) {
  array.sort();
  let min = 0;
  let max = 0;
  for(let i = 0; i <= array.length; i++)
   {
    min = array[0];
    max = array[array.length - 1];
  }
  console.log(`{max: ${max},min: ${min}}`);
}

minMax([5, 2, 3, -2, -10]);
minMax([null]);

const array = [5, 3, 2, 1];
console.log(array.sort());


function arraySwap(array) {
  let first = array[0];
  let last = array[array.length - 1];
  array[0] = last;
  array[array.length -1] = first;
  
  return array;
}

console.log(arraySwap([1, 2, 3, 4, 5]));
console.log(arraySwap(['hi', 'hello', 'yo']));


function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

   
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));


let words = ['hello', 'world', 'search', 'good', 'search'];

let index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}

console.log(index);

words = ['not', 'found'];
index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
  }
}

console.log(index);
*/
let index = -1;

function findIndex(array, word) {
  
  for (let i = 0; i < array.length; i++) {
      if (array[i] === word) {
        index = i;
      } 
}
return index;
}
console.log(findIndex(['green', 'red', 'blue', 'red'], 'blue'));
console.log(findIndex([]));




