const calc = () => {
  const calcBlock = document.getElementById("calc");
  const calcType = document.getElementById("calc-type");
  const calcTypeMaterial = document.getElementById("calc-type-material");
  const calcInput = document.getElementById("calc-input");
  const calcTotal = document.getElementById("calc-total");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    let calcTypeMaterialValue =
      +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
    const calcInputValue = calcInput.value;

    let totalValue = 0;

    if (calcTypeValue && calcInputValue) {
      if (!calcTypeMaterialValue) {
        calcTypeMaterialValue = 1;
      }
      totalValue = Math.floor(
        calcTypeValue * calcTypeMaterialValue * calcInputValue
      );
    } else {
      totalValue = 0;
    }

    calcTotal.value = totalValue;
  };

  if (calcBlock) {
    calcBlock.addEventListener("input", (e) => {
      if (
        e.target === calcType ||
        e.target === calcTypeMaterial ||
        e.target === calcInput
      ) {
        countCalc();
      }
    });
  }
};
export default calc;
