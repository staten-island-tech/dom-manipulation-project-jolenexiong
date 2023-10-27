const DOMSelectors = {
    form: document.querySelector("#form"),
    album: document.querySelector("#album"),
    artist: document.querySelector("#artist"),
    picture: document.querySelector("#picture"),
    h2s: document.querySelectorAll("h2s"),
    gallery: document.querySelector(".gallery"),
    button: document.querySelector("#button"),
    clear: document.querySelector("#clear"),
};


function injectcard() {
    DOMSelectors.gallery.insertAdjacentHTML(
        "afterbegin",
        ` <div class="card">
            <h2>${album.value}</h2>
            <h2>${artist.value}</h2>
            <img src= "${picture.value}" class="pic">

            <button class = "clear">Remove</button>
        </div>`
    );
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    //need make album first
    const wholealbum = {
        title: DOMSelectors.album.value,
        author: DOMSelectors.artist.value,
        picture: DOMSelectors.picture.value,
    };
    injectcard(wholealbum);
    clear();
    remove();
    //function dude, need ()
    //clear fields
    //remove buttons
});

function clear() {
    DOMSelectors.album.value = "";
    DOMSelectors.artist.value = "";
    DOMSelectors.picture.value = "";
}

function remove() {
    document.querySelectorAll("#clear");
    clear.forEach((btn) => btn.addEventListener('click', function (event) {
        event.target.parentElement.remove("card");
    })
    );
}

// //we can test injectcard here
// //get working
// injectcard({album:"test",artist:"shdfhjikl"})