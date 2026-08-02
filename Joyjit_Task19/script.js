const addButtons = document.querySelectorAll(".add-btn");
const table = document.getElementById("serviceTable");
const totalPrice = document.getElementById("totalPrice");
const emptyRow = document.getElementById("emptyRow");

let serial = 1;
let total = 0;

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".service-card");

        const name = card.querySelector("h3").textContent;
        const priceText = card.querySelector("span").textContent;
        const price = Number(priceText.replace("₹", "").replace(".00", ""));

        if (emptyRow) {
            emptyRow.remove();
        }

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${serial}</td>
            <td>${name}</td>
            <td>₹${price}</td>
        `;

        table.appendChild(row);

        serial++;
        total += price;

        totalPrice.textContent = `₹ ${total}`;
    });

});


const bookBtn = document.getElementById("bookBtn");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const numberInput = document.getElementById("number");

bookBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = numberInput.value.trim();

    // Name Check
    if (name === "") {
        alert("Please Enter Your Name");
        return;
    }

    // Email Check
    if (email === "") {
        alert("Please Enter Your Email");
        return;
    }

    // Phone Check
    if (phone === "") {
        alert("Please Enter Your Phone Number");
        return;
    }

    // Cart Check
    if (serial === 1) {
        alert("Please Add At Least One Service");
        return;
    }

    alert("🎉 Booking Successful!");

    // Clear Form
    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
});
