"use strict";

export const showAlert = (event, textContent) => {
    alert(textContent);
};

export const findElement = (selector) => {
    return document.querySelector(selector);
}