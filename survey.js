function submitForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const gender = document.getElementById("male").checked ? "Male" : (document.getElementById("female").checked ? "Female" : "");
    const profession = document.getElementById("product name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    const popupData = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Product name:</strong> ${product name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    document.getElementById("popup-data").innerHTML = popupData;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("survey-form").reset();
}

function resetForm() {
    document.getElementById("survey-form").reset();
}
