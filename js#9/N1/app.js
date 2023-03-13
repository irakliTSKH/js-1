const btn = document.querySelector(".btn")
const modalDiv = document.querySelector(".modal-div")
const closeBtn = document.querySelector(".close-btn")

btn.addEventListener("click", () => {
    modalDiv.style.display = "block"
    btn.style.display = "none"
})
closeBtn.addEventListener("click", () => {
    console.log("asd")
    modalDiv.style.display = "none"
    btn.style.display = "block"
})
