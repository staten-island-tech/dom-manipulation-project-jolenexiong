
DOMSelectors = {
    form: document.querySelector("#form"),
    college: document.querySelector(".college"),
    h3s: document.querySelectorAll("h3s"),
};

console.log(DOMSelectors.#form);

DOMselectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(DOMSelectors.college.value);
    DomSelectors.h3s, forEach(
        (h3s) => h3s.textContent = DOMSelectors.college.value)
        
});
