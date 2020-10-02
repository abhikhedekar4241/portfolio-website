document .querySelector(".switch") .addEventListener("click", switchDark);
function switchDark() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}