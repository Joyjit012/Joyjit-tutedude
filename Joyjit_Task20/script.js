const heroBtn = document.getElementById("heroBtn");
const serviceSection =document.getElementById("service-section");

heroBtn.addEventListener("click" , () => {
    serviceSection.scrollIntoView({
        behavior : "smooth"
    });

});


const buttons = document.querySelectorAll(".itemBtn");
const tableBody = document.getElementById("serviceTable");
const totalPrice = document.getElementById("totalPrice");

let total = 0;
let serial = 1;

buttons.forEach(button => {

    button.addEventListener("click", function () {

        const itemText = this.previousElementSibling.innerText;
        const serviceName = itemText.split("-")[0].trim();
        const price = parseInt(itemText.match(/\d+/)[0]);

       
        if (this.innerText === "Add item +") {

            const emptyRow = document.getElementById("emptyRow");
            if (emptyRow) emptyRow.remove();

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${serial++}</td>
                <td>${serviceName}</td>
                <td>₹${price}</td>
            `;

            tableBody.appendChild(row);

            
            this.row = row;

            total += price;
            totalPrice.innerText = `₹ ${total}`;

            this.innerText = "Remove Item";
            this.style.background = "red";
            this.style.color = "white";

        } 
        else {

            this.row.remove();

            total -= price;
            totalPrice.innerText = `₹ ${total}`;

            this.innerText = "Add item +";
            this.style.background = "";
            this.style.color = "";

            
            if (tableBody.children.length === 0) {
                tableBody.innerHTML = `
                    <tr id="emptyRow">
                        <td colspan="3" class="empty-message">
                            <div class="empty-box">
                                <h3>No Items Added</h3>
                                <p>Add items to the cart from the services list.</p>
                            </div>
                        </td>
                    </tr>
                `;
            }
        }

    });

});