const sertificate = () => {
  const sertificates = document.querySelectorAll(".sertificate-document");

  sertificates.forEach((sertificate) => {
    sertificate.addEventListener("click", (e) => {
      e.preventDefault();

      const img = e.currentTarget.querySelector(".img-responsive");
      const overlay = e.currentTarget.querySelector(".document-overlay");

      document.body.classList.toggle("body-block");
      e.currentTarget.classList.toggle("sertificate-document-active");
      img.classList.toggle("img-responsive-active");
      overlay.classList.toggle("document-overlay-active");
    });

    sertificate.addEventListener("mouseover", (e) =>
      overlayHover(e.target, true)
    );
    sertificate.addEventListener("mouseout", (e) =>
      overlayHover(e.target, false)
    );
  });
};
export default sertificate;
