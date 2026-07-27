let n = 21;
let sum=0;

for(let i=0; i<=n; i++){
    sum=sum+i;
}
console.log("The number of the sum is " + sum);


// print table of n 

for(let j=0 ; j<=10 ; j++){
  let multiply = n*j;
  console.log(n  + "x" + j  + "=" + multiply );

}






// Checking is it a prime number : using (for loop---)

let count = 0;
for ( let m=1; m<=n ; m++){
    if(n % m == 0){
        count++;
    }

}

if(count==2){
    console.log("The number is prime");
    

}else{
    console.log("The number is not prime");
    
}



// print all its factor 


for (let k=1 ; k<=n ; k++){
 if(n%k == 0){
   console.log(k);
 }

}  

// Find the sum of all digits of a number

let num = 23;
let sum1= 0;

while (num > 0) {
    let digit = num % 10;
    sum1= sum1 + digit;
    num = Math.floor(num / 10);  // math.floor() ---- is a function which returns the smallest and nearest integer value of a decimel number.
}

console.log("The sum of all digit number is " + sum1);




// FInding Amstrong Number ----- 153 = 1^3 + 5^3 + 7^3 = 153

let number = 163;
let original = number;
let sum2 = 0;
while(number > 0 ){
let digit1 = number % 10;
sum2= sum2 + (digit1*digit1*digit1);
number = Math.floor(number/10);

}
 console.log("The sum of " + original+ " is " + sum2);


 if(original == sum2){
    console.log("The number is Armstrong number");
 }else{
    console.log("The number is not Armstrong number");
 }
    






