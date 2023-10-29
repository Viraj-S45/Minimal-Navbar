window.addEventListener("scroll", function () {
  var row1 = document.querySelector(".row1");
  var row2 = document.querySelector(".row2");

  if (window.scrollY > 0) {
    row1.classList.add("sticky");
    row2.classList.add("sticky");
  } else {
    row1.classList.remove("sticky");
    row2.classList.remove("sticky");
  }
});

