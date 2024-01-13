const popup = () => {
  const btnCall = document.querySelectorAll(".btn-callback");
  const overlay = document.querySelector(".overlay");
  const headerModal = document.querySelector(".header-modal");
  const headerModalClose = document.querySelector(".header-modal__close");
  const btnCallMaster = document.querySelectorAll(".btn-call-master");
  const servicesModal = document.querySelector(".services-modal");
  const servicesModalClose = document.querySelector(".services-modal__close");

  document.addEventListener("click", (e) => {
    btnCall.forEach((btn) => {
      if (e.target === btn) {
        e.preventDefault;
        overlay.style.display = "block";
        headerModal.style.display = "block";
      }
    });

    if (
      e.target === headerModalClose ||
      e.target.classList.contains("overlay")
    ) {
      overlay.style.display = "none";
      headerModal.style.display = "none";
    }

    btnCallMaster.forEach((btn) => {
      if (e.target === btn) {
        e.preventDefault;
        overlay.style.display = "block";
        servicesModal.style.display = "block";
      }
    });

    if (
      e.target === servicesModalClose ||
      e.target.classList.contains("overlay")
    ) {
      overlay.style.display = "none";
      servicesModal.style.display = "none";
    }
  });

  //   btnCall.forEach((btn) => {
  //     btn.addEventListener("click", (e) => {
  //       e.preventDefault;
  //       overlay.style.display = "block";
  //       headerModal.style.display = "block";
  //     });
  //   });

  //   document.addEventListener("click", (e) => {
  //     if (
  //       //   !e.target.closest(".modal") ||
  //       e.target.classList.contains("header-modal__close") ||
  //       e.target.classList.contains("overlay")
  //     ) {
  //       overlay.style.display = "none";
  //       headerModal.style.display = "none";
  //     }
  //   });

  //   btnCallMaster.forEach((btn) => {
  //     btn.addEventListener("click", (e) => {
  //       e.preventDefault;
  //       overlay.style.display = "block";
  //       servicesModal.style.display = "block";
  //     });
  //   });

  //   document.addEventListener("click", (e) => {
  //     if (
  //       //   !e.target.closest(".modal") ||
  //       e.target.classList.contains("services-modal__close") ||
  //       e.target.classList.contains("overlay")
  //     ) {
  //       overlay.style.display = "none";
  //       servicesModal.style.display = "none";
  //     }
  //   });
};
export default popup;
