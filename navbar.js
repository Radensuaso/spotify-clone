const nabvarElements = document.querySelectorAll(".navbar-to");

nabvarElements.forEach((nabvar) => {
  nabvar.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    nabvarElements.forEach((nav) => nav.classList.remove("navbar-active"));
    nabvar.classList.add("navbar-active");
  });
});
