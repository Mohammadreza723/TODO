let toggleBtn = document.querySelector(".toggle");
let sidebar = document.querySelector(".sidebar")
let listsText = document.querySelectorAll(".sidebar ul li .text")
let listsIcon = document.querySelectorAll(".sidebar ul li .icon")
let logo = document.querySelector(".logo");
let imageProfile = document.querySelector(".logo img");



let rotation = 0;
let isclicked = false;
toggleBtn.addEventListener("click", (e) => {
    if (isclicked == false) {
        rotation += 180;
        document.querySelector(".toggle > span").style.transform = `rotate(${rotation}deg)`;
        isclicked = true
        toggleIn();
    }
    else {
        rotation -= 180;
        document.querySelector(".toggle > span").style.transform = `rotate(${rotation}deg)`;
        isclicked = false;
        toggleOut();
    }
})
function toggleIn(){
    sidebar.style.width = "100px";
    for (const text of listsText) {
        text.style.display = "none"
    }
    for (const icon of listsIcon) {
        icon.style.marginLeft = "20px"
    }
    logo.classList.remove("logo")
    logo.classList.add("icon")
    imageProfile.style.cssText = `
    width:100%;
    height:100%;
    border-radius: 10px;
    `
}
function toggleOut(){
    sidebar.style.width = "25vw";
    for (const list of listsText) {
        list.style.display = "block"
    }
    logo.classList.remove("icon")
    logo.classList.add("logo")
}