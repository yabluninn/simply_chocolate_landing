const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const openModalBtn = document.querySelector(".leave-review-button");
const closeModalBtn = document.querySelector(".modal-close-button");

const openModal = () => {
  modal.classList.remove("modal-hidden");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.add("modal-hidden");
  document.body.style.overflow = "";
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (!modalContainer.contains(e.target)) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("modal-hidden")) {
    closeModal();
  }
});

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
