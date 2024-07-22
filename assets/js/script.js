document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    // const preloader = document.querySelector(".preloader");
    const main = document.querySelector(".main");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      document.querySelectorAll(".bar").forEach(element => {
        element.classList.toggle("active");
      });
      navMenu.classList.toggle("active");
    });
  
    main.style.display = "block";
    // preloader.style.display = "none";
  });
  