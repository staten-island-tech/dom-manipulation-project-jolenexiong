const DOMSelectors = {
    form: document.querySelector("#form"),
    album: document.querySelector("#album"),
    artist: document.querySelector("#artist"),
    picture: document.querySelector("#picture"),
    h2s: document.querySelectorAll("h2s"),
    gallery: document.querySelector(".gallery"),
    //add gallery
};


function injectcard() {
    DOMSelectors.gallery.insertAdjacentHTML(
        "afterbegin",
        ` <div class="card">
            <h2>${album.value}</h2>
            <h2>${artist.value}</h2>
            <h2> img src= "${picture.value}"</h2>
            <button class = "button">Remove</button>
        </div>`
    );
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    //need make album first
    const wholealbum = {
        title: DOMSelectors.album.value,
        author: DOMSelectors.artist.value,
        image: DOMSelectors.picture.value,
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

}


// //we can test injectcard here
// //get working
// injectcard({album:"test",artist:"shdfhjikl"})