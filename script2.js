
            const wrapper = document.querySelector(".wrapper"),
                signupHeader = document.querySelector(".signup header");
                // loginHeader = document.querySelector(".login header");


            // loginHeader.addEventListener("click",() => {
            //     wrapper.classList.add("active")
            signupHeader.addEventListener("click",() => {
                wrapper.classList.remove("active")
            });

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}