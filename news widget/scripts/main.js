import { ApiService } from "./apiService.js";

const newsUrl = "http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8";
const onDataChangeCallback = (data) => {
    console.log(data);
};

function load() {
    const apiService = new ApiService(newsUrl, onDataChangeCallback);
    apiService.fetchNews();
}

// fetch the news when the page loads first
// load();
