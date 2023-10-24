const DOMSelectors = {
    form: document.querySelector("#form"),
    album: document.querySelector("#album"),
    artist: document.querySelector("#artist"),
    picture: document.querySelector("#picture"),
    h2s: document.querySelectorAll("h2s"),
    //add gallery
};
function album(){
    //write code here to get values
}
function injectcard (form) {
    DOMSelectors.gallery.insertAdjacentHTML
    ("afterbegin",
        `<div class="card">
            <h2 class="card.title">${form.album.value}</h2>
            <h2 class="aritst">${form.artist.value}</h2>
            <h2 class="picture">${form.artist.value}</h2>
        </div>`
    );
}

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    //need make album first
   injectcard() //function dude, need ()
   //clear fields
   //remove buttons
});

//we can test injectcard here
//get working
injectcard({album:"test",artist:"shdfhjikl"})