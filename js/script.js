import { inputsGroupChangeHandler, buttonCalculateClickHandler, inputGroupForResetChangeHandler, resetButtonClickHandler } from "./handlers.js";

const buttonCalculateElement = document.querySelector(".form__submit-button");
const resetButtonElement = document.querySelector(".form__reset-button");
const inputsGroupElement = document.querySelector(".inputs-group");

inputsGroupElement.addEventListener("change", inputsGroupChangeHandler);
buttonCalculateElement.addEventListener("click", buttonCalculateClickHandler);
inputsGroupElement.addEventListener("change", inputGroupForResetChangeHandler);
resetButtonElement.addEventListener("click", resetButtonClickHandler);
