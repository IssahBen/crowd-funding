const menu_btn = document.getElementById("menu-btn")

const radio1 = document.getElementById("noreward")

const pledgediv2 = document.getElementById("pledge2")
input2 = pledgediv2.querySelector("input")

continue_btn2 = pledgediv2.querySelector("button")

const mobile_menu = document.getElementById("menu")

const modal = document.getElementById("modal")

const modal_close = document.getElementById("mclose")

let btns = document.querySelectorAll(".select-reward")

const overlay = document.getElementById("modalOverlay")

const input = document.getElementById("pledgeamount")

const continue_btn = document.getElementById("continue")

const pledgediv = document.getElementById("pledge")

const thank = document.getElementById("got")
const radio2 = document.getElementById("black")
menu_btn.addEventListener("click", toggler)



const modal2 = document.getElementById("modal2")

const m2close = document.getElementById("m2close")

thank.addEventListener("click", () => {
    modal2.classList.toggle("hidden")
    overlay.style.display = "none";
    document.body.style.overflow = "auto"
})
radio1.addEventListener("click", (e) => {
    if (e.currentTarget.checked) {

        pledgediv2.classList.toggle('hidden')
    } else {
        pledgediv2.classList.toggle("hidden")
    }

})

radio2.addEventListener("click", (e) => {
    if (e.currentTarget.checked) {

        pledgediv.classList.toggle('hidden')
    } else {
        pledgediv.classList.toggle("hidden")
    }
    console.log(2)
})
btns.forEach((btn) => btn.addEventListener("click", modalToggle))

continue_btn.addEventListener("click", pledge)

modal_close.addEventListener("click", closer)

function pledge() {
    value = input.value
    console.log(2)
    if (value.trim() != "" || !isNaN(parseInt(value.trim()))) {
        closer()
        modal2.classList.toggle("hidden")
        overlay.style.display = "block";
        document.body.style.overflow = "hidden"
    }

}
function toggler() {
    menu_btn.classList.toggle("open")
    mobile_menu.classList.toggle("hidden")
}


function modalToggle() {
    console.log("hidden")
    modal.classList.toggle("hidden")
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"
    window.scrollTo(0, 0)
}

function closer() {
    modal.classList.toggle("hidden")
    document.body.style.overflow = "auto"
    overlay.style.display = "none";
}

continue_btn2.addEventListener("click", pledge2)

function pledge2() {
    value = input2.value
    console.log(2)
    if (value.trim() != "" || !isNaN(parseInt(value.trim()))) {
        closer()
        modal2.classList.toggle("hidden")
        overlay.style.display = "block";
        document.body.style.overflow = "hidden"
    }

}