const emailEl = document.querySelector('#email');
const localMail = localStorage.getItem('mail');
const passwordEl = document.querySelector('#password');
const localPassword = localStorage.getItem('passWord');

const form = document.querySelector('#signup');

const isRequired = value => value === '' ? false : true;

// Show errors -------------------------------
const showError = (input, message)=>{
    const formField = input.parentElement;
    console.log(input);
    console.log(formField);
    formField.classList.add('error');
    formField.classList.remove('success');
    const error = formField.querySelector('small');
    error.textContent = message;
}

// Is form valid ? ---------------------------
const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.add('success');
    formField.classList.remove('error');
    const error = formField.querySelector('small');
    error.textContent = '';
}

// Verification du mail -----------------------
const checkemail = () => {
    let valid = false;

    const email = emailEl.value.trim();
    
    if (!isRequired(email)) {
        showError(emailEl, 'Entrez votre adresse e-mail');
    } else if (localMail !== email) {
        showError(emailEl, "E-mail inconnue");
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

// Verification du mdp -----------------------
const checkPassword = () => {
    let valid = false;

    const password = passwordEl.value.trim();
    
    if (!isRequired(password)) {
        showError(passwordEl, 'Entrez votre Mot de passe');
    } else if (localPassword !== password) {
        showError(passwordEl, "Mot de passe invalide");
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
}

// Submit form ------------------------------
form.addEventListener('submit',function(e){
    e.preventDefault();
    let isemailValid = checkemail();
    let isPasswordValid = checkPassword();
    let isFormValid = isemailValid &&
                    isPasswordValid;    
    if (isFormValid==false) {
        e.preventDefault();
    }else{
        let dateLogIn = new Date();
        localStorage.setItem("dateLogIn",dateLogIn);
        window.location.href = "forum-home.html";
    }
});