const parts = document.querySelectorAll(".part");
const partNames = document.querySelectorAll(".part_name");
const scopedImg = document.querySelector(".scoped_img");
let prevData = "";
function getScope(param) {
  if (!gotChanged) {
    modal.classList.add("modal_container_active");
    modalImg.src = param;

    gotChanged = true;
  }
}
function closeModal() {
  modalImg.src = null;
  modal.classList.remove("modal_container_active");
  gotChanged = false;
}

parts.forEach((item) => {
  item.addEventListener("click", () => getScope(item.src));
});
modalImg.addEventListener("click", closeModal);

const changerObj = {
  "Амперметр": "images/Амперметр.jpg",
  "Вольтметр": "images/Вольтметр.jpg",
  "Выпрямитель": "images/Выпрямитель.jpg",
  "Миллиамперметр": "images/Миллиамперметр.jpg",
  "Источник напряжения": "images/Источник напряжения.jpg",
  "Лампа накаливания": "images/Лампа накаливания.jpg",
  "Энергия напряжения": "images/Энергия напряжения.jpg",
};

function replacePartToImage(el) {
  for (let key in changerObj) {
    if (key == el.textContent) {
      el.setAttribute("data-prev", el.textContent);
      el.innerHTML = `<img class="scoped_img" onmouseout="returnDataToPart(this)" src="${changerObj[key]}" style="width:300px;"/>`;
    }
  }
}

function returnDataToPart(el) {
  const originalText = el.parentElement.getAttribute("data-prev");
  for (let key in changerObj) {
    if (changerObj[key].includes(originalText)) {
      el.parentElement.innerHTML = `${key}`;
    }
  }
}

partNames.forEach((part) => {
  part.addEventListener("mousedown", () => replacePartToImage(part));
});
