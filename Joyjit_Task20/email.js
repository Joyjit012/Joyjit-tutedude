const bookBtn = document.getElementById("bookBtn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number");


bookBtn.addEventListener("click", function (e) {

    e.preventDefault();

    if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    phone.value.trim() === ""
) {
    alert("Please fill all the fields.");
    return;
}


    const params = {
        customer_name: document.getElementById("name").value,
        customer_email: document.getElementById("email").value,
        customer_phone: document.getElementById("number").value,
        total_amount: document.getElementById("totalPrice").innerText
    };

    emailjs.send(
        "service_7ba8r1l",
        "template_be9rzfp",
        params
    ).then(function () {

        document.getElementById("successMessage").innerText =
        "Thank You For Booking the Service. We will get back to you soon!";

    }).catch(function (error) {

        alert("Email Sending Failed");
        console.log(error);

    });

});