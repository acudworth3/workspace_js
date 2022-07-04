
// rest operator
const sum = (function() {
    return function sum(...args) {
      console.log(...args)
        return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3, 4));

// spread operator
//   allows full copy of array
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  obj1 = {...arr1}; // full copy; can be object or array
  arr2 = [...arr1]
  arr1[0] = 'potato'
})();
console.log(arr2);
console.log(obj1);
console.log('obj1', obj1)

// destructuring objects
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54
// reads as if x exists on voxel object, set a = voxel.x
// NOTE does not throw an error if object property does not exist; sets it to null
const { x : a, y : b, d : c } = voxel; // a = 3.6, b = 7.4, c = 6.54
console.log([a,b,c])
// Works with arrays as well by index only
// can reroder an array inline

//destructuring with function paramters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

  const arbitrary_object = {
    max: 56.78,
    min: -0.75,
  };

  const half = (function() {
    
    // Note what is happening here.You are getting Max and min from stats without explicitly calling outthat the stats object is being passedin fact any object with Max or minwould work here.

    return function half({ max, min }) {
      return (max + min) / 2.0;
    };
  
  })();
  console.log('----------stats-------------')
  console.log(stats); 
  console.log(half(stats)); 
console.log('----------arbitrary_object-------------')
  console.log(arbitrary_object); 
  console.log(half(arbitrary_object));   
