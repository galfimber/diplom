const slider = () => {
  const benefitsSlider = document.querySelector(".benefits-wrap");
  const benefitsSlides = document.querySelectorAll(".benefits__item");
  const benefitsArrow = document.querySelectorAll(".benefits__arrow");

  const serviceSlider = document.querySelector(".service-wrap");
  const serviceSlides = document.querySelectorAll(".service-block");
  const serviceArrow = document.querySelectorAll(".services__arrow");

  let currentBenefitsSlide = 1;
  let leftSlide;
  let rigthSlide;

  let currentServicesSlide = 0;

  const changeOtherSlides = (index, slidesLength) => {
    leftSlide = index - 1;
    rigthSlide = index + 1;
    if (leftSlide < 0) {
      leftSlide = slidesLength - 1;
    }
    if (rigthSlide >= slidesLength) {
      rigthSlide = 0;
    }
  };

  const prevSlide = (elems, index, strClass) => {
    if (elems === benefitsSlides) {
      changeOtherSlides(index, benefitsSlides.length);
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
    } else if (elems === serviceSlides) {
      changeOtherSlides(index, serviceSlides.length);
      if (document.documentElement.clientWidth >= 576) {
        elems[index].parentElement.classList.add(strClass);
        elems[index].parentElement.classList.remove("hide");
        elems[index].parentElement.style.order = "-1";
        elems[rigthSlide].parentElement.classList.remove("hide");
        elems[rigthSlide].parentElement.style.order = "0";
      } else {
        elems[index].parentElement.classList.add(strClass);
        elems[index].parentElement.classList.remove("hide");
      }
    }
  };

  const nextSlide = (elems, index, strClass) => {
    if (elems === benefitsSlides) {
      changeOtherSlides(index, benefitsSlides.length);
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
    } else if (elems === serviceSlides) {
      changeOtherSlides(index, serviceSlides.length);
      if (document.documentElement.clientWidth >= 576) {
        elems[index].parentElement.classList.remove("hide");
        elems[index].parentElement.style.order = "-1";
        elems[rigthSlide].parentElement.classList.add(strClass);
        elems[rigthSlide].parentElement.classList.remove("hide");
        elems[rigthSlide].parentElement.style.order = "0";
      } else {
        elems[index].parentElement.classList.add(strClass);
        elems[index].parentElement.classList.remove("hide");
      }
    }
  };

  benefitsArrow.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("benefits__arrow")) {
        benefitsSlides.forEach((slide) => {
          slide.classList.add("hide");
          slide.classList.remove("flipInX");
          slide.style.order = "";
        });
        if (e.target.closest(".benefits__arrow--right")) {
          if (currentBenefitsSlide >= benefitsSlides.length - 1) {
            currentBenefitsSlide = -1;
          }
          currentBenefitsSlide++;
          nextSlide(benefitsSlides, currentBenefitsSlide, "flipInX");
        } else if (e.target.closest(".benefits__arrow--left")) {
          if (currentBenefitsSlide < 1) {
            currentBenefitsSlide = benefitsSlides.length;
          }
          currentBenefitsSlide--;
          prevSlide(benefitsSlides, currentBenefitsSlide, "flipInX");
        }
      }
    });
  });

  serviceArrow.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("services__arrow")) {
        serviceSlides.forEach((slide) => {
          slide.parentElement.classList.add("hide");
          slide.parentElement.classList.remove("flipInX");
          slide.parentElement.style.order = "";
        });
        if (e.target.closest(".services__arrow--right")) {
          if (currentServicesSlide >= serviceSlides.length - 1) {
            currentServicesSlide = -1;
          }
          currentServicesSlide++;
          nextSlide(serviceSlides, currentServicesSlide, "flipInX");
        } else if (e.target.closest(".services__arrow--left")) {
          if (currentServicesSlide < 1) {
            currentServicesSlide = serviceSlides.length;
          }
          currentServicesSlide--;
          prevSlide(serviceSlides, currentServicesSlide, "flipInX");
        }
      }
    });
  });

  if (document.documentElement.clientWidth < 576) {
    currentBenefitsSlide = 0;
    benefitsSlides[currentBenefitsSlide + 1].classList.add("hide");
    benefitsSlides[currentBenefitsSlide + 2].classList.add("hide");
    benefitsSlider.style.justifyContent = "center";

    serviceSlides[currentServicesSlide + 1].parentElement.classList.add("hide");
    serviceSlider.style.justifyContent = "center";
  }
};

export default slider;
