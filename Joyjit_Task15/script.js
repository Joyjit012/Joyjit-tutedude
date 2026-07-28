// Finding the maximum number of array




const arr1 = [43, 60, 32, 27, 10, 90, 19];

let max = arr1[0];

arr1.forEach((num) => {
  if (num > max) {
    max = num;
  }
});
console.log(max + " is maximum number :-)");



// Calcuting the sum of all elements in the array
const arr2 = [42, 34, 62, 57, 30, 20, 89];

let sum = 0;
arr2.forEach(( num ) => {
    
    sum = sum + num;

}


);

console.log( "The sum of all elements is " , sum);


//using anonymous function ----

const arr3 = [43, 60, 32, 27, 10, 90, 19];

let sum1 = 0;
arr3.forEach(function(num){
sum1=sum1+ num;
});

console.log( "The sum of all elements is " , sum1);


// // Counting the odd numbers ---
const arr4= [41, 30, 52, 57, 20, 70, 19];

arr4.forEach((num)=>{
    if(num%2 != 0){
 console.log(num +" is odd number.");
 
    }
})




// counting  the odd numbers using callback function -------


function printOdd(num){
    if(num%2 != 0){
         console.log(num +" is odd number.");
    }
}

arr.forEach(printOdd);