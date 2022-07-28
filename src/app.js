/******************************************
 *  Author : Mhande Amalou
 *  Created On : Sat Jul 16 2022
 *  File : app.js
 *******************************************/

import "./sass/app.scss";


//mobile menu functionality show & hide
const primaryNav = document.querySelector(".primary-navigation"),
    navToggleBtn = document.querySelector(".mobile-nav-toggle");


navToggleBtn.addEventListener("click", () => {
    const visiblity = primaryNav.getAttribute("data-expanded");


    if (visiblity === "false") {
        primaryNav.setAttribute("data-expanded", true);
        navToggleBtn.setAttribute("aria-expanded",true);
        
    } else {
        primaryNav.setAttribute("data-expanded", false);
        navToggleBtn.setAttribute("aria-expanded",false);
    }
});

//arrow up & down toggle
const listItem = document.querySelectorAll(".has-dropdown");

listItem.forEach(element => {
    element.addEventListener("click", () => {
    
            const visiblity = element.getAttribute("aria-expanded");
        
            if (visiblity === "false") {
                element.setAttribute("aria-expanded", true);
                
            } else {
                element.setAttribute("aria-expanded", false);
            }
        });
        
        
});
