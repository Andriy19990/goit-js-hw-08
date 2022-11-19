import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}

let data = {};
const STORAGE_KEY = "feedback-form-state";
refs.form.addEventListener("submit", throttle(onFormSubmit, 500));

refs.form.addEventListener("input", event => {
    data[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    console.log(data);
});

function onFormSubmit(event) {
    event.preventDefault();
    console.log({email: refs.email.value, message: refs.textarea.value});
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

formInput();

function formInput() {
    const formInput = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(formInput);
    if (parsedData) {
        data = parsedData;
        refs.email.value = data.email;
        refs.textarea.value = data.message ;
    }
}