const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("loginform")
form.addEventListener('click', (e) => {

    if (checkvalid() == false) {
        e.preventDefault();
    }
});

function setError(input, message) {

    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector('small');
    formcontrol.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';

}

function checkvalid() {
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    success = true;
    if (emailval === '') {
        setError(email, "email is not required");
        success = false
    } else {
        setSuccess(email);
    }


    if (passwordval === '') {
        success = false
        setError(password, "password is not required");
    } else if (passwordval.length < 5) {
        success = false
        setError(password, "very weak password");
    } else if (passwordval.length < 8) {
        success = false;
        setError(password, "weak password");
    } else {
        setSuccess(password);
    }
    return success;
}