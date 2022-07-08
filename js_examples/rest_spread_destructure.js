/* eslint-disable no-console */
// Refernces
// https://www.youtube.com/watch?v=PkZNo7MFNFg&list=PLtYhjdNoBXMOkMGlovXU8x_h9s-03KdvN&index=7
// https://scrimba.com/playlist/p7v3gCd

// rest operator
const sum = (function () {
  return function sum(...args) {
    console.log(...args);
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4));

// spread operator
//   allows full copy of array
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
  obj1 = { ...arr1 }; // full copy; can be object or array
  arr2 = [...arr1];
  arr1[0] = 'potato';
})();
console.log(arr2);
console.log(obj1);
console.log('obj1', obj1);

// -----------------more spread examples-----------------------
const person = {
  age: 20,
  name: 'ex1',
  bool: true,
};
console.log('person', person);

// person_from_spread is an object with the properties that person has then change nameto spratty

person_from_spread = { ...person, name: 'spready' };
console.log('person_from_spread', person_from_spread);

// destructuring objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 };

// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54
// reads as if x exists on voxel object, set a = voxel.x
// NOTE does not throw an error if object property does not exist; sets it to null
const { x: a, y: b, d: c } = voxel; // a = 3.6, b = 7.4, c = 6.54
console.log([a, b, c]);
//Also possible
const { x, y, z } = voxel;
console.log([x, y, z]);
// Works with arrays as well by index only
// can reroder an array inline

//destructuring arrays
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  //Ignore the first two indices then spread the list variable into array variable
  const [, , ...arr] = list;

  return arr;
}
const arr = removeFirstTwo(source);
console.log('----------arr-------------');
console.log(arr);
console.log('----------src-------------');
console.log(source);

//destructuring with function paramters
// Useful with API calls.Allows for pulling outobject elements you want and ignoring everything else
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const arbitrary_object = {
  max: 56.78,
  min: -0.75,
};

const half = (function () {
  // Note what is happening here.You are getting Max and min from stats without explicitly calling outthat the stats object is being passedin fact any object with Max or minwould work here.

  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();
console.log('----------stats-------------');
console.log(stats);
console.log(half(stats));
console.log('----------arbitrary_object-------------');
console.log(arbitrary_object);
console.log(half(arbitrary_object));

// ---------------------------All the ways to define functions----------------------------------------

// Note that generally a component in react is a JavaScript function. often an anonymous one

// fully defined
function named_function(input_val) {
  console.log(input_val);
}
named_function('isnt this easier to read');

//anonymous function
// often used onclick
// <button onClick={() => {console.log("this is a function")}}>I am a button</button>
// can be used inside of map
() => {
  console.log('this is a function');
};

//no input; return jsx (whic mean html elements)
// You might want tocreate this type of functionto returntags that will be rendered on a page
const rafc = () => {
  return (
    // <div>rest_spread_destructure</div>
    console.log('need react to use this fully')
  );
};

// ---------------------------Map----------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
/* Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use forEach or for...of instead.

You shouldn't be using map if:

you're not using the array it returns; and/or
you're not returning a value from the callback. */

// Map appears identical to a for loopwith some nice built-in elements explore mapping objects more
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr5 = ['a', 'b', 'a', 'b', 'a', 'b'];

console.log('logging from map');
arr4.map((arr4_element) => {
  console.log(arr4_element);
});

console.log('map does not rewrite');
arr4_mapped = arr4.map((arr4_element) => {
  return 0;
});
console.log('arr4');
console.log(arr4);
console.log('assign to new  var to rewrite');
console.log(arr4_mapped);

TODO working iwth index and array
arr5.map((element, index, array) => { 
  // console.log("index:"+index)
 })





// ---------------------------Filter----------------------------------------
// Note that filter only returns when true
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('logging from filter');
arr6.filter((arr4_element) => {
  console.log(arr4_element);
});

console.log('filter does not rewrite');
arr6_filtered = arr6.filter((arr6_element) => {
  return arr6_element % 2 === 0;
});
console.log('arr6');
console.log(arr4);
console.log('assign to new  var to rewrite');
console.log(arr6_filtered);
