const DOMSelectors = {
    form: document.querySelector("#form"),
    name: document.querySelector(".name"),
    h2s: document.querySelectorAll("h2s"),
};

DOMselectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
   
});

function insertcard () {
    document.querySelector(".gallery").insertAdjacentHTML
    ("afterbegin",
        `<div class="card">
            <h2 class="card.title">${DOMSelectors.name.value}</h2>
        </div>`

    );
}
