document.querySelector("nav .fas").addEventListener("click", function () {
  const togglemenu = document.querySelector(".nav-links");
  togglemenu.style.right = "0px";
  togglemenu.style.display = "block";
  togglemenu.style.transition = "all 0.5s ease";
});

document.querySelector(".nav-links i").addEventListener("click", function () {
  const closemenu = document.querySelector(".nav-links");
  closemenu.style.right = "-200px";
  closemenu.style.transition = "all 0.5s ease";
  if ((closemenu.style.right = "-150px")) {
    closemenu.style.display = "none";
  } else {
    closemenu.style.display = "block";
    closemenu.style.transition = "all 0.5s ease";
  }
});
