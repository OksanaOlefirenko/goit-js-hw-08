import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}

const formData = {};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));


populateForm();

function onFormInput(e) {
    // console.log(e.target.name);
    // console.log(e.target.value);
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function populateForm() {
    const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedFormData && savedFormData.email) {
        refs.email.value = savedFormData.email;
    }
    if (savedFormData && savedFormData.message) {
        refs.textarea.value = savedFormData.message;
    }
}

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();
    console.log (JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
}



