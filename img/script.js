// 
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", 
//     function () {
//     let name = prompt("what is your full name?");
//     let age = prompt("how old are you?");
//     let hobbies = prompt("what are your hobbies?");
//     let food = prompt("what is your favorite food?");
//     let movies = prompt("what is your favorite movie?");

//     let good=document.querySelector("#good");
//     good.innerHTML = `<h3>Name: ${name} </h3>
//             <p><strong>Age:</strong> ${age}</p>
//             <p><strong>Hobbies:</strong> ${hobbies}</p>
//             <p><strong>food:</strong> ${food}</p>
//             <p><strong>movies:</strong> ${movies}</p>`
// },
// );

let form = document.querySelector("form");
 form.addEventListener("submit", 
     function () {
        let she = document.querySelector("#she");
        let he = document.querySelector("#he");
        let him = `${she.value} ${he.value}`;
        let they = document.querySelector("#they");
        let the = document.querySelector("#the");
        let them = document.querySelector("#them");
        let we = document.querySelector("#we");
        let us = document.querySelector("#us");
        let h1 = document.querySelector("header");
        h1.innerHTML=`Welcome ${him}`;
        let radio1 = document.querySelector("full");
        let radio2 = document.querySelector("part");
        let para = document.querySelector(".halo");
        para.innerHTML =  `<h6>Please confirm your details below</h6>
        <p>Fullname: ${him}</p>
        <p>Username: ${they.value}</p>
        <p>Date of birth: ${the.value}</p>
        <p>Email Address: ${them.value}</p>
        <p>Password: ${we.value}</p>
        <p>Confirm Password: ${us.value}</p>` ;
     },
    );

   