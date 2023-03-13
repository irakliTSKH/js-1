const input = document.querySelector("input")
const btn = document.querySelector("button")
const body = document.querySelector("body")

const colors = ["red", "blue", "green", "black", "white"]

btn.addEventListener("click", () => {
    if (colors.includes(input.value)) {
      body.style.background = input.value;
    } else {
      alert("Wrong Input!");
    }
  })

