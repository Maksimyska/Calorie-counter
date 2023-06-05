const LOSS_WEIGHT_RATE = 0.15;
const GAIN_WEIGHT_RATE = 0.15;
const ActivityRate = {
    "min": 1.2,
    "low": 1.375,
    "medium": 1.55,
    "high": 1.725,
    "max": 1.9
};
const ValidParameter = {
    AGE_MIN: 0,
    AGE_MAX: 130,
    HEIGHT_MIN: 60,
    HEIGHT_MAX: 250,
    WEIGHT_MIN: 2,
    WEIGHT_MAX: 500
}
const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const genderMale = document.querySelector("#gender-male");
const activityMinimal = document.querySelector("#activity-minimal");

const clearParameters = () => {
    age.value = "";
    height.value = "";
    weight.value = "";
    genderMale.checked = true;
    activityMinimal.checked = true;
}

const isValidateParameters = () => {
    return age.value > ValidParameter.AGE_MIN && age.value < ValidParameter.AGE_MAX && height.value > ValidParameter.HEIGHT_MIN && height.value < ValidParameter.HEIGHT_MAX && weight.value > ValidParameter.WEIGHT_MIN && weight.value < ValidParameter.WEIGHT_MAX
}

// Проверки на заполненность параметров
const isFilledParameters = () => {
    return age.value && height.value && weight.value;
}

const isExistParameter = () => {
    return age.value || height.value || weight.value;
}

// Расчет нормы калорий для мужчин
const getMale = () => {
    return (10 * parseInt(weight.value, 10) + (6.25 * parseInt(height.value, 10)) - (5 * parseInt(age.value, 10)) + 5);
}

// Расчет нормы калорий для женщин
const getFemale = () => {
    return (10 * parseInt(weight.value, 10) + (6.25 * parseInt(height.value, 10)) - (5 * parseInt(age.value, 10)) - 161);
}

// Проверка текущего пола
const getSex = () => {
    const genderMale = document.querySelector("#gender-male");
    if (genderMale.checked) {
        return getMale();
    }
    return getFemale();
}

const getActivityRate = () => {
    const activityValue = document.querySelector('[name="activity"]:checked').value;
    return ActivityRate[activityValue];
}

// Расчет калорий для поддержания веса
const FunMaintainWeight = () => {
    return Math.round(getActivityRate() * getSex());
}

// РАсчет калорий для снижения веса
const FunLossWeight = () => {
    return Math.round(FunMaintainWeight() - FunMaintainWeight() * LOSS_WEIGHT_RATE);
}

// Расчет калорий для набора веса
const FunGainWeight = () => {
    return Math.round(FunMaintainWeight() + FunMaintainWeight() * GAIN_WEIGHT_RATE);
}

export { FunMaintainWeight, FunLossWeight, FunGainWeight, isFilledParameters, isExistParameter, clearParameters, isValidateParameters }

