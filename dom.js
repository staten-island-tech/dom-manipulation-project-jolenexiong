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
    const wholealbum = {
        title: DOMSelectors.album.value,
        author: DOMSelectors.artist.value,
        image: DOMSelectors.picture.value,
    };
    injectcard(wholealbum);
    clear();
    remove();
};

function injectcard (form) {
    DOMSelectors.gallery.insertAdjacentHTML(
    "afterbegin",
      ` <div class="card">
            <h2>${form.album.value}</h2>
            <h2>${form.artist.value}</h2>
            <h2> img src= "${form.picture.value}"</h2>
        </div>`
    );
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    //need make album first
   injectcard(form); //function dude, need ()
   //clear fields
   //remove buttons
});

function clear () {
    DOMSelectors.album.value = "";
    DOMSelectors.artist.value = "";
    DOMSelectors.picture.value = "";
}

function remove () {

}


// //we can test injectcard here
// //get working
// injectcard({album:"test",artist:"shdfhjikl"})