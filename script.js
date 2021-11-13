// 1. Shuffle the array
// Imagine the supplied array is like a pack of cards. Write a function to shuffle this array in to a completely new and entirely random order, much like shuffling a pack of cards.

 const numbers = [23,46,22,200,14,26];
document.getElementById('h2').innerHTML = numbers;

function shuffleNumbers(){
  numbers.sort(function(a,b) {
    return 0.5 - Math.random()
  })

document.getElementById('h2').innerHTML = numbers;
}
////////////////////////////////////////


  var fruits = ['apple', 'grape', 'cherry']; 
     var vegetables = ['carrot', 'onion','garlic'];
     var products = ['oil','floor'];
     var total = fruits.concat(vegetables,products)
  
     document.getElementById('h3').innerHTML = total;

     ////////////////////////////////////
   var numbers = [23,46,22,200,14,26, 34,86];
    document.getElementById('h3').innerHTML = numbers;
    
    numbers.sort(function(a,b){
      return a-b
    });
    document.getElementById('h2').innerHTML = numbers;

/////////////////////////////////////////
    
var numbers = [23,46,22,200,14,26, 34,86];

  numbers.sort(function(a,b){
    return a-b
  })
    document.getElementById('h2').innerHTML = numbers[0];
    ///////////////////////
  var numbers = [23,46,22,200,14,26, 34,86];

  numbers.sort(function(a,b){
    return b-a
  })
    document.getElementById('h2').innerHTML = numbers[0]

    var arr = [2,4,5,6,]
    arr.sort()

var even = 12;

if(even % 2 ==0 ){
  alert(" The number is even ")
}else {
    alert('it is odd')
}

var Arr1 = [1, 1, 2, 2, 3, 8, 4, 6]
var evenArr=[]; 
var oddArr = []

var i;
for (i = 0; i <= Arr1.length; i = i + 2) {
    if (Arr1[i] !== undefined) {
        evenArr.push(Arr1[i]);
        oddArr.push(Arr1[i + 1]);
    }
}
console.log(evenArr,oddArr)
//////////////////////////////////
var numbers = [06, 03, 02, 13, 04, 05, 12, 07, 09, 01, 11, 22];

even = [];

for (var i = 0; i < numbers.length; ++i) {
    if ((numbers[i] % 2) == 0) {
        even.push(numbers[i]);
    }
}


odd = [];

for (var i = 0; i < numbers.length; ++i) {
    if ((numbers[i] % 2) == 1) {
        odd.push(numbers[i]);
    }
}

console.log(even,odd)
////////////
//unique value////
var a = [1,11,2,11,33,4,5,22,33]

var unique = (value, index, self) =>{
  var findIndex = (element) => element[0] == value[0];
  return self.findIndex(findIndex) === index;
}

console.log(a.filter(unique))

function findOdd(parametr) {
let odd = parametr[0];
for (var i = 1; i < parametr.length; i++) {
if (parametr[i] !== parametr[0]) {
odd = parametr[i];
}
}
   console.log(odd)
}
findOdd(['a', 'a', 'b', 'a'])