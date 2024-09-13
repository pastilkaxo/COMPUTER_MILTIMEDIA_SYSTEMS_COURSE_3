"use stict";

const urlPath = window.location.href;
const dynamicParts = document.querySelectorAll(".dynamic_image");
const modal = document.querySelector(".modal_container");
const modalImg = document.querySelector(".modal_image");
let gotChanged = false;

function getAmpermetr(param) {
  if (!gotChanged) {
    modal.classList.add("modal_container_active");
    modalImg.src = `/img/${param}.png`;

    gotChanged = true;
  }
}
function closeModal() {
  modalImg.src = null;
  modal.classList.remove("modal_container_active");
  gotChanged = false;
}

dynamicParts.forEach((item) => {
  item.addEventListener("click", () => getAmpermetr(item.textContent));
});
modalImg.addEventListener("click", closeModal);

function openBurger() {
  var x = document.getElementById("myTabs");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
