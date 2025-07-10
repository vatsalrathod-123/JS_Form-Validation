const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactRegex = /^\d{10}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const fullName = form.fullName;
  const email = form.email;
  const contact = form.contact;
  const password = form.password;
  const confirmPassword = form.confirmPassword;
  const city = form.city;
  const country = form.country;

  // Full Name
  if (!nameRegex.test(fullName.value.trim())) {
    fullName.classList.add("is-invalid");
    valid = false;
  } else fullName.classList.remove("is-invalid");

  // Email
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add("is-invalid");
    valid = false;
  } else email.classList.remove("is-invalid");

  // Contact
  if (!contactRegex.test(contact.value.trim())) {
    contact.classList.add("is-invalid");
    valid = false;
  } else contact.classList.remove("is-invalid");

  // Password
  if (!passwordRegex.test(password.value.trim())) {
    password.classList.add("is-invalid");
    valid = false;
  } else password.classList.remove("is-invalid");

  // Confirm Password
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("is-invalid");
    valid = false;
  } else confirmPassword.classList.remove("is-invalid");

  // City & Country
  [city, country].forEach((field) => {
    if (!nameRegex.test(field.value.trim())) {
      field.classList.add("is-invalid");
      valid = false;
    } else field.classList.remove("is-invalid");
  });

  if (valid) {
    successMessage.classList.remove("d-none");
    form.reset();
    setTimeout(() => {
      successMessage.classList.add("d-none");
    }, 3000);
  }
});
