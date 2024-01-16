const reg = () => {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.name === "phone") {
          input.value = input.value.replace(/[^0-9\+]/g, "");
        }
        if (input.name === "fio") {
          input.value = input.value.replace(/[^а-яА-яa-zA-Z]/g, "");
        }
      });
    });
  });
};
export default reg;
