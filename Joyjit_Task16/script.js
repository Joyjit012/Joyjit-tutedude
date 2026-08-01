let cardContainer = document.getElementById("card-container");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const studentDetails = [
    { name: "Rahul Sharma", marks: 89, class: "B.Tech CSE", address: "Kolkata" },
    { name: "Priya Das", marks: 92, class: "B.Tech AI & ML", address: "Bardhaman" },
    { name: "Amit Roy", marks: 85, class: "B.Tech IT", address: "Durgapur" },
    { name: "Neha Singh", marks: 95, class: "B.Tech ECE", address: "Asansol" },
    { name: "Ankit Verma", marks: 81, class: "B.Tech CSE", address: "Delhi" },
    { name: "Sneha Ghosh", marks: 88, class: "B.Tech AI & ML", address: "Siliguri" },
    { name: "Rohan Paul", marks: 84, class: "B.Tech IT", address: "Kharagpur" },
    { name: "Ananya Sen", marks: 91, class: "B.Tech ECE", address: "Howrah" },
    { name: "Sourav Mondal", marks: 79, class: "B.Tech CSE", address: "Malda" },
    { name: "Arjun Patel", marks: 87, class: "B.Tech AI & ML", address: "Mumbai" },
    { name: "Pooja Kumari", marks: 90, class: "B.Tech CSE", address: "Patna" },
    { name: "Karan Mehta", marks: 83, class: "B.Tech IT", address: "Jaipur" },
    { name: "Ishita Roy", marks: 94, class: "B.Tech ECE", address: "Kolkata" },
    { name: "Tanmay Dey", marks: 80, class: "B.Tech AI & ML", address: "Bankura" },
    { name: "Ritika Sharma", marks: 93, class: "B.Tech CSE", address: "Lucknow" },
    { name: "Abhishek Gupta", marks: 86, class: "B.Tech IT", address: "Kanpur" },
    { name: "Megha Saha", marks: 89, class: "B.Tech ECE", address: "Nadia" },
    { name: "Vikram Singh", marks: 82, class: "B.Tech CSE", address: "Ranchi" },
    { name: "Nisha Yadav", marks: 91, class: "B.Tech AI & ML", address: "Varanasi" },
    { name: "Debojit Chakraborty", marks: 88, class: "B.Tech IT", address: "Agartala" }
];

// Display Students
function displayStudents(students){

    cardContainer.innerHTML = "";

     if(students.length === 0){

        cardContainer.innerHTML = `
            <div class="not-found">
                <h2>No Student Found 😕</h2>
                <p>Please search with a valid student name.</p>
            </div>
        `;

        return;
    }

    students.map((student)=>{

        let card = document.createElement("div");
        card.classList.add("student-card");

        card.innerHTML = `
            <p><strong>Name :</strong> ${student.name}</p>
            <p><strong>Marks :</strong> ${student.marks}</p>
            <p><strong>Class :</strong> ${student.class}</p>
            <p><strong>Address :</strong> ${student.address}</p>
        `;

        cardContainer.appendChild(card);

    });

}

displayStudents(studentDetails);

// Search Button
searchBtn.addEventListener("click",()=>{

    let searchValue = searchInput.value.toLowerCase();

    let filteredStudents = studentDetails.filter((student)=>{

        return(student.name.toLowerCase().includes(searchValue) ||
         student.class.toLowerCase().includes(searchValue) ||
         student.address.toLowerCase().includes(searchValue));


    });

    displayStudents(filteredStudents);

});