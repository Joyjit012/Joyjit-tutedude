const P = 20000; // P = principal
const r = 0.20; //  r = rate of interest
const  n = 4; // n = no. of times interest  is compounded per year
const t = 3 ;  // t = times ( in years)

const A = P*(1+ (r/n))**(n*t); // A = Final Amount

const CI =  A - P;  // CI = Compound Interest

console.log("The Final Amount after 3 years is = " , A );
console.log("The compound interest  after 3 years is = " , CI );
