const openModalButton = document.querySelector(".modalToggle");
const modalContainer = document.querySelector(".modalWrap");
const searchFormCloseButton = document.querySelector(".modalFormClose");

openModalButton.addEventListener("click", () => {
  modalContainer.classList.remove("modalWrapClose");
});

searchFormCloseButton.addEventListener("click", () => {
  modalContainer.classList.add("modalWrapClose");
});

modalContainer.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    modalContainer.classList.add("modalWrapClose");
  }
});
