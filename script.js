const fNameInp = document.querySelector(".f-name")
const lNameInp = document.querySelector(".l-name")
const emailInp = document.querySelector(".email")
const passInp = document.querySelector(".password")

const nameImg = document.querySelector(".name-e-icon")
const lnameImg = document.querySelector(".lname-e-icon")
const emailImg = document.querySelector(".email-e-icon")
const passImg = document.querySelector(".pass-e-icon")

const nameError = document.querySelector(".name-error")
const lNameError = document.querySelector(".lname-error")
const emailError = document.querySelector(".email-error")
const passError = document.querySelector(".pass-error")

const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault()
    nameImg.classList.remove("active")
    lnameImg.classList.remove("active")
    emailImg.classList.remove("active")
    passImg.classList.remove("active")

    nameError.classList.remove("active")
    lNameError.classList.remove("active")
    emailError.classList.remove("active")
    passError.classList.remove("active")

    if(fNameInp.value === ""){
        nameImg.classList.add("active")
        nameError.classList.add("active")
    }
    if(lNameInp.value === ""){
        lnameImg.classList.add("active")
        lNameError.classList.add("active")
    }
    if(passInp.value === ""){
        passImg.classList.add("active")
        passError.classList.add("active")
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInp.value)){
        emailImg.classList.add("active")
        emailError.classList.add("active")
    }

})