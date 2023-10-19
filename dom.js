const DOMSelectors = {
    form: document.querySelector("#form"),
    movie: document.querySelector(".movie"),
    h2s: document.querySelectorAll("h2"),
};

DOMselectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
   
});

function insertcard () {
    document.querySelector(".gallery").insertAdjacentHTML
    ("afterbegin",
        `<div class="card">
            <h2 class="card.title">${DOMSelectors.movie.value}</h2>
        </div>`

    );
}
