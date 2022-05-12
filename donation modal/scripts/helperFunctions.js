"use strict";

export const showAlert = (event, textContent) => {
    alert(textContent);
};

export const findElement = (selector) => {
    return document.querySelector(selector);
};

export const fakeAjaxCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
};