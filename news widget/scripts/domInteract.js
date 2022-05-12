const spinner = document.querySelector("p");
const newsList = document.querySelector("ul");

export class DomInteract {
    hideSpinner() {
        spinner.style.display = 'none';
    }

    showSpinner() {
        spinner.style.display = 'block';
    }

    generateNewsItem(title, text) {
        const article = document.createElement("article");
        const articleTitle = document.createElement("h3");
        articleTitle.innerText = title;

        const articleText = document.createElement("p");
        articleText.innerText = text;

        article.append(articleTitle, articleText);

        return article;
    }

    appendArticlesToPage(nodes) {
        let containerDiv = document.createElement("div");
        let currentCount = 1;
        for(let i = 0; i < nodes.length; i++) {
            if (currentCount <= 5) {
                containerDiv.append(nodes[i]);
                currentCount++;
            } else {
                currentCount = 1;
                newsList.append(containerDiv);
                containerDiv = document.createElement('div');
                containerDiv.append(nodes[i]);
            }
        }
        newsList.append(containerDiv);
    }
}