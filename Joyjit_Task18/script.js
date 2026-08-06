let topLevel = document.getElementById( "toplevel");
let boxes = document.querySelectorAll(".box");
let searchInput = document.getElementById( "enterName");
const searchBtn = document.getElementById("searchBtn");



let nameChange =()=>{

    searchBtn.addEventListener("click" , ()=>{
        let  inputValue = searchInput.value;
        console.log(inputValue);

        topLevel.innerHTML= `<h1>Hello, ${inputValue}</h1>`;
        topLevel.style.backgroundColor = " grey";
    });


    let boxarr =["red" , "yellow" , "green" , "blue"];

boxes.forEach((box , index)=>{

    box.addEventListener("click" , ()=>{
        box.style.background = boxarr[index];
    });
});


}

nameChange();


