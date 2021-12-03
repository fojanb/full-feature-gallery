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
    // First check if the modal is already open
    if (modal.matches(".open")) {
      console.info("Modal already open");
      return;
    }
    modal.classList.add("open");
  }
  function closeModalByMouse(e) {
    if (e.target === e.currentTarget) {
      modal.classList.remove("open");
    }
  }
// --------------------------------
  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }
    // console.log(el);
    // update the modal with this info
    let currentImage = el.src;
    modal.querySelector("img").src = currentImage;
    modal.querySelector("h2").textContent = el.title;
    modal.querySelector("figure p").textContent = el.dataset.description;
    openModal();
    const modalChevrons = Array.from(modal.querySelectorAll("button"));
    modalChevrons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.matches(".next")) {
          showImage(el.nextElementSibling);
        } else {
          showImage(el.previousElementSibling);
        }
      });
    });
    function keyUpHandler(e) {
      if (e.key === "Escape") {
        // Close modal by pressing Escape key
        modal.classList.remove("open");
      }
      if (e.key === "ArrowRight") {
        showImage(el.nextElementSibling);
      }
      if (e.key === "ArrowLeft") {
        showImage(el.previousElementSibling);
      }
     
    }
    // Handling modal by mouse event (click)
    modal.addEventListener("click", closeModalByMouse);
    // Handling modal by keyboard events (Esc, ArrRight and ArrLeft)
    window.addEventListener("keyup", keyUpHandler);
  }
  // --------------------------------

  // Handling images by mouse event (click)
  images.forEach((image) => {
    image.addEventListener("click", (e) => showImage(e.currentTarget));
  });
  // Handling images by keyboard events (Enter)
  images.forEach((image) => {
    image.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        showImage(e.currentTarget)
      }
    });
  });
}
const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));

/* Images by default are not keyboard focus-able, 
and in order to make the gallery accessible to keyboard users,
 we need to ensure that when they tab through it, 
 they highlight and when you hit enter, it opens it up.*/
