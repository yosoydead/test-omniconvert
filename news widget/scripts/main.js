import { ApiService } from "./apiService.js";
const newsUrl = "http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8";
let i = 0; // keep track of the current news tab
let initialLoaded = false;

let newsIndicator;
let newsTabs;

const indicatorClickHandler = (event,) => {
    const dataIndex = event.target.getAttribute("data-index");

    if (Number.parseInt(dataIndex) !== i) {
        newsTabs[i].classList.remove('current');
        i = Number.parseInt(dataIndex);
        newsTabs[i].classList.add('current');
    }
};

const contentLoadedCallback = () => {
    newsIndicator = document.querySelectorAll(".page-indicator");
    newsIndicator.forEach(el => {
        el.addEventListener('click', indicatorClickHandler);
    });
    newsTabs = document.querySelectorAll(".news-card");

    if (!initialLoaded) {
        initialLoaded = true;

        //set interval only once
        setInterval(() => {
            if (i === newsTabs.length - 1) {
                newsTabs[i].classList.remove('current');
                i = 0;
                newsTabs[i].classList.add('current');
            } else {
                newsTabs[i].classList.remove('current');
                i++;
                newsTabs[i].classList.add('current');
            }
        }, 1000 * 15);
    }
};

function load() {
    const apiService = new ApiService(newsUrl, contentLoadedCallback);
    apiService.fetchNews();
}

// fetch the news when the page loads first
load();
