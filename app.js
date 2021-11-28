// Clouser
function Gallery(gallery) {
  if (!gallery) {
    console.log("Gallery not found...");
  }
  //   console.log(gallery);
  const images = Array.from(gallery.querySelectorAll("img"));
  const modal = document.querySelector(".modal");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");
  function openModal() {
    // console.log("Openning modal");
    // First check if the modal is already open
    if (modal.matches(".open")) {
      console.info("Modal already open");
      return;
    }
    modal.classList.add("open");
  }
  function closeModal(e) {
    if (e.target === e.currentTarget) {
      modal.classList.remove("open");
    }

    //TODO: add event listeners fro clicks and keyboard
  }
  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }
    // console.log(el);
    // update the modal with this info
    modal.querySelector("img").src = el.src;
    modal.querySelector("h2").textContent = el.title;
    modal.querySelector("figure p").textContent = el.dataset.description;
    openModal();
    modal.addEventListener("click", closeModal);
  }
  images.forEach((image) => {
    image.addEventListener("click", (e) => showImage(e.currentTarget));
  });
}
const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));
