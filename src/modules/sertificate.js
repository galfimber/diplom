const sertificate = () => {
  const sertificates = document.querySelectorAll(".sertificate-document");

  sertificates.forEach((sertificate) => {
    sertificate.addEventListener("click", (e) => {
      e.preventDefault();
      //e.currentTarget.style.display = "inline-block";
      //e.currentTarget.style.position = "fixed";
      //e.currentTarget.style.top = "0";
      //e.currentTarget.style.left = "0";
      //e.currentTarget.style.right = "0";
      //e.currentTarget.style.bottom = "0";
      //e.currentTarget.style.zIndex = "999";
      const img = e.currentTarget.querySelector(".img-responsive");
      const overlay = e.currentTarget.querySelector(".document-overlay");
      //overlay.style.opacity = "1";
      //img.style.height = "90%";
      //img.style.position = "absolute";
      //overlay.style.zIndex = "998";
      //img.style.zIndex = "999";
      document.body.style.overflow = "hidden";
      //   e.currentTarget.style.width = "100%";
      //   e.currentTarget.style.height = "100%";

      e.currentTarget.classList.toggle("sertificate-document-active");
      img.classList.toggle("img-responsive-active");
      overlay.classList.toggle("document-overlay-active");
    });
  });
};
export default sertificate;
