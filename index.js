document.querySelector("nav .fas").addEventListener("click", function () {
  const togglemenu = document.querySelector(".nav-links");
  if (!togglemenu.classList.contains("opend")) {
    togglemenu.classList.add("opened");
  }
});

document.querySelector(".nav-links i").addEventListener("click", function () {
  const closemenu = document.querySelector(".nav-links");
  if (!closemenu.classList.contains("opend")) {
    closemenu.classList.remove("opened");
  }
});

document.querySelector("nav img").addEventListener("click", () => {
  document.location.href = "index.html";
});

window.onscroll = () => {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.querySelector("nav").style.background = "rgb(170, 170, 170)";
    document.querySelector("nav").style.transition = "all 0.5s";
  } else {
    document.querySelector("nav").style.background = "";
  }
};
