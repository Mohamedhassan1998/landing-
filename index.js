let menu = document.querySelector(".menu i");
let lest = document.querySelector(".list");

menu.onclick = () => {
  menu.classList.toggle("clicked");
  if (menu.classList.contains("clicked")) {
    lest.style.display = "block";
    menu.classList.toggle("fa-x");
    document.querySelector(".landing .image img").style.display = "none";
  } else {
    lest.style.display = "none";
    menu.className = "fa-solid fa-bars menu-header";
    document.querySelector(".landing .image img").style.display = "block";
  }
};
