import {
    clearParameters,
    FunGainWeight,
    FunLossWeight,
    FunMaintainWeight,
    isExistParameter,
    isFilledParameters,
    isValidateParameters
} from "./calculate.js";
import { showAlert } from "./alert.js";

const MESSAGE_ERROR_FIELD = "не определено";
const buttonCalculateElement = document.querySelector(".form__submit-button");
const counterResultFormElement = document.querySelector(".counter__result");
const fieldEnergyNormElement = counterResultFormElement.querySelector("#calories-norm");
const fieldEnergyMinimalElement = counterResultFormElement.querySelector("#calories-minimal");
const fieldEnergyMaximalElement = counterResultFormElement.querySelector("#calories-maximal");
const resetButtonElement = document.querySelector(".form__reset-button");

// Вкл кнопки "Рассчитать"
const inputsGroupChangeHandler = function (evt) {
    if (evt.target.nodeName === "INPUT" && isFilledParameters()) {
        buttonCalculateElement.disabled = false;
    }
}

// Сброс всех форм, параметров и отключение кнопки
const resetButtonClickHandler = function () {
    buttonCalculateElement.disabled = true;
    resetButtonElement.disabled = true;
    counterResultFormElement.classList.add("counter__result--hidden");
    clearParameters();
}


// Вкл кнопки "Очистить"
const inputGroupForResetChangeHandler = function (evt) {
    if (evt.target.nodeName === "INPUT" && isExistParameter()) {
        resetButtonElement.disabled = false;
    }
}

// Рассчет нормы калорий
const buttonCalculateClickHandler = function (evt) {
    evt.preventDefault();
    if (isFilledParameters() && isValidateParameters()) {
        fieldEnergyNormElement.textContent = FunMaintainWeight().toLocaleString();
        fieldEnergyMinimalElement.textContent = FunLossWeight().toLocaleString();
        fieldEnergyMaximalElement.textContent = FunGainWeight().toLocaleString();
    } else {
        showAlert("Запоните все параметры верно");
        fieldEnergyNormElement.textContent = MESSAGE_ERROR_FIELD;
        fieldEnergyMinimalElement.textContent = MESSAGE_ERROR_FIELD;
        fieldEnergyMaximalElement.textContent = MESSAGE_ERROR_FIELD;
    }
    counterResultFormElement.classList.remove("counter__result--hidden");
}
export { inputsGroupChangeHandler, buttonCalculateClickHandler, inputGroupForResetChangeHandler, resetButtonClickHandler };
