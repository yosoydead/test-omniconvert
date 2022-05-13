const spinner = document.querySelector("#spinner");
const newsList = document.querySelector("#articles");
const controls = document.querySelector("#articleSectionControls");

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
        const link = document.createElement("a");

        link.innerText = title;
        link.href = "#";
        articleTitle.append(link);

        const articleText = document.createElement("p");
        articleText.innerText = text;

        article.append(articleTitle, articleText);

        return article;
    }

    generateArticleIndicator(dataIndex) {
        const indicator = document.createElement("button");
        indicator.classList.add("page-indicator");
        indicator.setAttribute("data-index", dataIndex);

        return indicator;
    }

    appendArticlesToPage(nodes) {
        controls.innerHTML = "";
        newsList.innerHTML = "";

        const perPage = 5;
        const totalPages = Math.ceil(nodes.length / perPage);
        const controlsTitle = document.createElement("p");
        const bulletsContaienr = document.createElement('div');

        bulletsContaienr.classList.add('page-indicators');
        controlsTitle.innerText = "Latest news";
        controls.append(controlsTitle);

        for (let i = 0; i < totalPages; i++) {
            const offset = i * perPage;
            const containerDiv = document.createElement("div");
            containerDiv.classList.add("news-card");
            containerDiv.setAttribute("data-index", i);
            const btn = this.generateArticleIndicator(i);

            if (i === 0) {
                containerDiv.classList.add('current')
            }

            const paginatedItems = nodes.slice(offset).slice(0, perPage);
            paginatedItems.forEach(el => {
                containerDiv.append(el);
            });

            newsList.append(containerDiv);
            bulletsContaienr.append(btn);
        }
        controls.append(bulletsContaienr);
    }
}