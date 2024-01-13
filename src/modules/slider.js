const slider = () => {
  const sliderBlock = document.querySelector(".benefits-wrap");
  const slides = document.querySelectorAll(".benefits__item");
  const sliderBtns = document.querySelectorAll(".benefits__arrow");

  let currentSlide = 1;
  let leftSlide;
  let rigthSlide;

  const changeOtherSlides = (index) => {
    leftSlide = index - 1;
    rigthSlide = index + 1;
    if (leftSlide < 0) {
      leftSlide = slides.length - 1;
    }
    if (rigthSlide >= slides.length) {
      rigthSlide = 0;
    }
  };

  const prevSlide = (elems, index, strClass) => {
    changeOtherSlides(index);
    if (document.documentElement.clientWidth >= 576) {
      elems[leftSlide].classList.add(strClass);
      elems[leftSlide].classList.remove("hide");
      elems[leftSlide].style.order = "-2";
      elems[index].classList.remove("hide");
      elems[index].style.order = "-1";
      elems[rigthSlide].classList.remove("hide");
    } else {
      elems[index].classList.add(strClass);
      elems[index].classList.remove("hide");
    }
  };
  const nextSlide = (elems, index, strClass) => {
    changeOtherSlides(index);
    if (document.documentElement.clientWidth >= 576) {
      elems[leftSlide].classList.remove("hide");
      elems[leftSlide].style.order = "-2";
      elems[index].classList.remove("hide");
      elems[index].style.order = "-1";
      elems[rigthSlide].classList.add(strClass);
      elems[rigthSlide].classList.remove("hide");
    } else {
      elems[index].classList.add(strClass);
      elems[index].classList.remove("hide");
    }
  };
  sliderBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("benefits__arrow")) {
        slides.forEach((slide) => {
          slide.classList.add("hide");
          slide.classList.remove("flipInX");
          slide.style.order = "";
        });
        if (e.target.closest(".benefits__arrow--right")) {
          if (currentSlide >= slides.length - 1) {
            currentSlide = -1;
          }
          currentSlide++;
          nextSlide(slides, currentSlide, "flipInX");
        } else if (e.target.closest(".benefits__arrow--left")) {
          if (currentSlide < 1) {
            currentSlide = slides.length;
          }
          currentSlide--;
          prevSlide(slides, currentSlide, "flipInX");
        }
      }
    });
  });

  if (document.documentElement.clientWidth < 576) {
    currentSlide = 0;
    slides[currentSlide + 1].classList.add("hide");
    slides[currentSlide + 2].classList.add("hide");
    sliderBlock.style.justifyContent = "center";
  }
};

export default slider;
