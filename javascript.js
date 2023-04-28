// Add "active" class to the current menu item
var header = document.querySelector("header");
var links = header.querySelectorAll("a");

links.forEach(function(link) {
  link.addEventListener("click", function() {
    links.forEach(function(link) {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});
