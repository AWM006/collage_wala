let check = document.querySelector(".tick");
let password = document.querySelector(".pass");

check.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        password.type = "text";
    } else {
      password.type = "password";
    }
  })