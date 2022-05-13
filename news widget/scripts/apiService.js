import { DomInteract } from "./domInteract.js";

export class ApiService {
    _newsUrl;
    _newsData;
    _fetchDataCallback;
    _domInteraction;
    _contentLoadedCallback;

    constructor(url, contentLoadedCallback) {
        const urlPattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        const regex = new RegExp(urlPattern);

        if((!url && typeof url !== "string") || url === "") {
            throw new Error("No url provided in the constructor.");
        }

        if (!regex.test(url)) {
            throw new Error("Malformed url. Please provide a correct url format.");
        }
        this._newsUrl = url;
        this._newsData = [];
        this._domInteraction = new DomInteract();
        this._contentLoadedCallback = contentLoadedCallback;
        setInterval(() => {
            this.fetchNews();
        }, 1000 * 60 * 3);
        console.info('Constructor executed correctly.');
    }

    get newsUrl() {
        return this._newsUrl
    }

    get newsData() {
        return this._newsData;
    }

    fetchNews() {
        return fetch(this.newsUrl)
            .then((response) => {
                return response.json();
            })
            .then( ({ news }) => {
                this._newsData = news;
                this._domInteraction.hideSpinner();
                const articleTags = news.map((n) => {
                    return this._domInteraction.generateNewsItem(n.title, n.details);
                });
                this._domInteraction.appendArticlesToPage(articleTags);
                this._contentLoadedCallback();
            })
            .catch(err => {
                console.log('Error downloading news', err);
            });
    }
}