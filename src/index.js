import popup from "./modules/popup";
import slider from "./modules/slider";
import timer from "./modules/timer";
import scroll from "./modules/scroll";
import calc from "./modules/calc";
import sertificate from "./modules/sertificate";
import sendForm from "./modules/sendForm";
import reg from "./modules/reg";

popup();
slider();
timer("20 january 2024");
scroll();
calc();
sertificate();
reg();
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "block",
      id: "calc-total",
    },
  ],
});
