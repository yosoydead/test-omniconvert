"use strict";
import { showAlert, findElement } from "./helperFunctions.js";

const inputErrorClassName = 'input-error-validation';

const saveForLaterButton = findElement("#donationModalButtons .save-later");
const tellFriendsButton = findElement("#donationModalButtons .tell-friends");
const donationInputContainer = findElement("#donationModalBody .form-controls div");
const donationInput = findElement("#donationModalBody .form-controls div input");
const donationButton = findElement("#donationModalBody .form-controls button");
const whyGiveNumber = findElement("#donationModalBody .info-link .currency-sum");

donationInput.addEventListener('input', (event) => {
    whyGiveNumber.innerText = event.target.value;
});

saveForLaterButton.addEventListener('click', (event) => {
    showAlert(event, "Save for Later button clicked");
});

tellFriendsButton.addEventListener('click', (event) => {
    showAlert(event, "Save for Later button clicked");
});

donationButton.addEventListener('click', (event) => {
    donationInputContainer.classList.remove(inputErrorClassName);
    const inputValue = donationInput.value;

    if (Number.parseInt(inputValue) < 5 || isNaN(Number.parseInt(inputValue))) {
        donationInputContainer.classList.add(inputErrorClassName);
    } else {
        showAlert(event, `Sending your ${inputValue} amount to a good cause.`)
    }
});
