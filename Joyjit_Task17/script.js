



 const getNumber = ((num1 ,  num2)=>{

    return new Promise((resolve , reject )=> {
        if(num2 == 0){
            reject(new Error("The num2 cannot be  0 ---- Invalid number "));
        }
    else{
        resolve(num1 / num2);
    };
});    

 });

//  1. First Case

 getNumber(10 , 2)
 .then((result) =>{
    console.log("The division result is" , result);
    
    
 })
 .catch((err) => {
    console.log(err.message);

 });


//  2. Second case

getNumber(20 , 0)
 .then((result) =>{
    console.log("The division result is" , result);
    
    
 })
 .catch((err) => {
    console.log(err.message);

 });


// 3. Third Case

 getNumber(100 , 2)
 .then((result) =>{
    console.log("The division result is" , result);
    
    
 })
 .catch((err) => {
    console.log(err.message);

 });



//  4. Fourth Case


getNumber( 40, 20)
 .then((result) =>{
    console.log("The division result is" , result);
    
    
 })
 .catch((err) => {
    console.log(err.message);

 });


//  5. Fifth case



getNumber( 100, 20)
 .then((result) =>{
    console.log("The division result is" , result);
    
    
 })
 .catch((err) => {
    console.log(err.message);

 });
