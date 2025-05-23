let select = document.querySelector(".select");
selectedValue = document.querySelector("#selected-value");
optionsViewButton = document.querySelector("#options-view-button");
inputsOptions = document.querySelectorAll(".option input");

inputsOptions.forEach((input) => {
  input.addEventListener("click", (e) => {
    selectedValue.textContent = input.dataset.label;

    const isMouseOrTouch = 
    e.pointerType == "mouse" ||
    e.pointerType == "touch"

    isMouseOrTouch && optionsViewButton.click();
  });
});