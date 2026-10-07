// ===============================
// BREWNEST CAFÉ - JAVASCRIPT
// ===============================

// Get the booking form
const bookingForm = document.querySelector("form");

// Run when the form is submitted
bookingForm.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    // ===============================
    // VALIDATION
    // ===============================

    // Check name
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Check mobile number
    if (mobile === "") {
        alert("Please enter your mobile number.");
        return;
    }

    // Check mobile number format
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Check booking date
    if (date === "") {
        alert("Please select a booking date.");
        return;
    }

    // Check if date is in the past
    const today = new Date().toISOString().split("T")[0];

    if (date < today) {
        alert("Please select today or a future date.");
        return;
    }

    // Check number of guests
    if (guests === "") {
        alert("Please enter the number of guests.");
        return;
    }

    if (guests < 1 || guests > 20) {
        alert("Number of guests must be between 1 and 20.");
        return;
    }

    // ===============================
    // SUCCESS MESSAGE
    // ===============================

    alert(
        "Table booked successfully! 🎉\n\n" +
        "Name: " + name + "\n" +
        "Mobile: " + mobile + "\n" +
        "Date: " + date + "\n" +
        "Guests: " + guests
    );

    // Clear the form
    bookingForm.reset();
});