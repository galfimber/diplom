const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется";
  const errorName = "Не менее 2 символов в имени";
  const errorTelMax = "Не более 16 символов в номере телефона";
  const errorTelMin = "Не менее 11 символов в номере телефона";

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    try {
      formData.forEach((val, key) => {
        if (key === "fio" && val.length < 2) {
          statusBlock.textContent = errorName;
          statusBlock.style.color = "red";
          throw new Error("Не менее 2 символов");
        } else if (key === "phone" && val.length > 16) {
          statusBlock.textContent = errorTelMax;
          statusBlock.style.color = "red";
          throw new Error("Не более 16 символов");
        } else if (key === "phone" && val.length < 11) {
          statusBlock.textContent = errorTelMin;
          statusBlock.style.color = "red";
          throw new Error("Не более 16 символов");
        }
        formBody[key] = val;
      });
    } catch (error) {
      return false;
    }

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (element) {
        formBody[elem.id] = element.value;
      }
    });

    sendData(formBody)
      .then(async (data) => {
        statusBlock.textContent = successText;
        statusBlock.style.color = "green";
        formElements.forEach((input) => {
          input.value = "";
        });
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));

        statusBlock.textContent = "";
      })
      .catch((error) => {
        statusBlock.textContent = errorText;
        statusBlock.style.color = "red";
      });

    return true;
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!submitForm()) {
        throw new Error("Недостаточно символов в имени или номере телефона");
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
