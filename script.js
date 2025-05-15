document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded");
});


function showDetail(imageSrc, description) {
  const modalImg = document.getElementById("modalImg");
  const modalText = document.getElementById("modalText");

  modalImg.src = imageSrc;
  modalText.textContent = description;

  const modal = new bootstrap.Modal(document.getElementById("produkModal"));
  modal.show();
}