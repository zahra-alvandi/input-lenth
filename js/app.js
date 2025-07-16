const input = document.querySelector("input");
const remaining = document.querySelector(".max-length");
const inputMaxLength = +input.getAttribute("maxlength");

input.addEventListener("keyup", function() {
    console.log(input.value.length)
})
