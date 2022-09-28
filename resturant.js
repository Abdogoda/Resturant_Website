// ---------------sticky header-----------------
window.addEventListener("scroll", () => {
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky")
    }else{
        document.querySelector(".header").classList.remove("sticky")
    }
})



// ----------------nav bar--------------------
document.querySelector(".show-menu").addEventListener("click", togglenav);
function togglenav(){
    document.querySelector(".show-menu").classList.toggle("active");
    document.querySelector(".nav").classList.toggle("active");
}
document.addEventListener("click", (e) => {
    if(e.target.closest(".nav-item")){
        togglenav();
    }
})



// ----------------login form--------------------
document.querySelector(".show-login").addEventListener("click", () => {
    document.querySelector(".login-container").classList.add("active");
})
document.querySelector(".close-login").addEventListener("click", () => {
    document.querySelector(".login-container").classList.remove("active");
})



// ----------------search form--------------------
document.querySelector(".show-search").addEventListener("click", () => {
    document.querySelector(".search-form").classList.toggle("active");
});



// ----------------menu tabs--------------------
let menuTabs = document.querySelectorAll(".menu-tabs .menu-tab-item");
let menuContetns = document.querySelectorAll(".menu-contetn");
menuTabs.forEach((menuTab) => {
    menuTab.addEventListener("click", (e)=> {
        menuTabs.forEach((e) => {
            e.classList.remove("active");
        });
        menuTab.classList.add("active");
        let targ = menuTab.getAttribute("data-target");
        menuContetns.forEach((menuContetn) => {
            menuContetn.classList.remove("active");
        })
        document.querySelector(targ).classList.add("active")
    })
})



// theme
let optionI = document.querySelector(".option i");
let showOption = document.querySelector(".option");
let themes = document.querySelector(".toggler");
optionI.addEventListener(("click"), () => {
    showOption.classList.toggle("optionActive")
})
document.querySelector(".showoption").addEventListener("click", () => {
    showOption.classList.toggle("optionActive")
})
if(window.localStorage.getItem("body-class-dark-theme")){
    themes.classList.add("activetheme");
    document.body.classList.add(window.localStorage.getItem("body-class-dark-theme"));
}
themes.addEventListener("click", () => {
    themes.classList.toggle("activetheme");
    if(themes.classList.contains("activetheme")){
        document.body.classList.add("activebody");
        window.localStorage.setItem("body-class-dark-theme" , "activebody");
    }else{
        document.body.classList.remove("activebody");
        window.localStorage.setItem("body-class-dark-theme" , "");
    }
});