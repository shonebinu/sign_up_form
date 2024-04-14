const pass = document.querySelector("#pass");
const cpass = document.querySelector("#cpass");

cpass.addEventListener("input", () => {
  if (pass.value != cpass.value) {
    cpass.setCustomValidity("Passwords doesn't match");
  } else {
    cpass.setCustomValidity("");
  }
});

document.querySelector("button").addEventListener("submit", (e) => {
  if (!cpass.checkValidity()) {
    e.preventDefault();
  }
});
