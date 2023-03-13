const input = document.querySelector("input")
const btn = document.querySelector("button")
const output = document.querySelector(".output")

btn.addEventListener("click", () => {
    let numbers = input.value.split(":")
    let arrNumbers = numbers.map((number) => parseFloat(number))
    output.innerHTML = arrNumbers.reduce((accu, curr) => accu + curr) / arrNumbers.length
})
