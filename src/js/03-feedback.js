import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
}

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));


populateForm();

function onFormInput(e) {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const formData = localStorage.getItem("feedback-form-state") ? JSON.parse(localStorage.getItem("feedback-form-state")) : {};
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function populateForm() {
    const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedFormData && savedFormData.email) {
        refs.form.elements.email.value = savedFormData.email;
    }
    if (savedFormData && savedFormData.message) {
        refs.form.elements.message.value = savedFormData.message;
    }
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    refs.form.reset();
    localStorage.removeItem("feedback-form-state");
}



