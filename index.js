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
