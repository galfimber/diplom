const scroll = () => {
  const scrollBtn = document.querySelector(".smooth-scroll");
  const firstSection = document.getElementById("offer");

  window.addEventListener("scroll", () => {
    if (firstSection.getBoundingClientRect().bottom < 0) {
      scrollBtn.style.right = "25px";
    } else {
      scrollBtn.style.right = "-100px";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
export default scroll;
