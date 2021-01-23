window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY;
    var navbar = document.getElementById("navbar");
    if (scrolled >= 100) { // this refers to window
        navbar.classList.add("active");
    }else{
        navbar.classList.remove("active");
    }
});
