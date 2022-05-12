"use strict";
import { showAlert, findElement, fakeAjaxCall } from "./helperFunctions.js";

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

donationButton.addEventListener('click', function (event) {
    donationInputContainer.classList.remove(inputErrorClassName);

    const inputValue = donationInput.value;
    const initialTextValue = this.innerText;

    this.disabled = true;
    this.innerText = "...";

    if (Number.parseInt(inputValue) < 5 || isNaN(Number.parseInt(inputValue))) {
        donationInputContainer.classList.add(inputErrorClassName);
    } else {
        fakeAjaxCall()
        .then(() => {
            showAlert(event, `Sending your ${inputValue} amount to a good cause.`);
        })
        .catch(() => {
            showAlert(null, "Error on Ajax call. Try again later!");
        })
        .finally(() => {
            this.disabled = false;
            this.innerText = initialTextValue;
        });
    }
});
