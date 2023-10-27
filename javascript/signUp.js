const SurnameEl = document.querySelector('#surname');
const FirstnameEl = document.querySelector('#firstname');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

// Fonctions fléchées ------------------------
const isRequired = value => value === '' ? false : true;

// Vérif du nom/prenom --------------------------
const isNameValid = (name) => {
    const re = new RegExp("^[A-Za-z]{3,25}$");
    return re.test(name);
};

// Vérif de l’email --------------------------
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

// Vérif du mdp ------------------------------
const isPasswordSecure = (password) => {
    console.log(password);
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\#\+\-\^\[\]])(?=.{8,})/;
    return re.test(password);
};

// Show errors -------------------------------
const showError = (input, message)=>{
// reprendre le form-field element
    const formField = input.parentElement;
// ajouter la class error et supprimer la class success
    formField.classList.remove('success');
    formField.classList.add('error');
// afficher le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = message;
}

// Is form valid ? ---------------------------
const showSuccess = (input) => {
// reprendre le form-field element
    const formField = input.parentElement;
// ajouter la class success et supprimer la class error
    formField.classList.remove('error');
    formField.classList.add('success');
// cacher le message d'erreur
    const error = formField.querySelector('small');
    error.textContent = '';
}

// Validation du nom -------------------------
const checkSurname = () => {
    let valid = false;
    const name = SurnameEl.value.trim();

    if (!isRequired(name)) {
        showError(SurnameEl, 'Renseignez votre nom');
    } else if (!isNameValid(name)) {
        showError(SurnameEl, `Votre nom doit comprendre entre 3 et 25 caractères et ne comporter que des lettres (sans accents)`)
    } else {
        showSuccess(SurnameEl);
        valid = true;
    }
    return valid;
}

// Validation du prénom -------------------------
const checkFirstname = () => {
    let valid = false;
    const name = FirstnameEl.value.trim();

    if (!isRequired(name)) {
        showError(FirstnameEl, 'Renseignez votre prénom');
    } else if (!isNameValid(name)) {
        showError(FirstnameEl, `Votre prénom doit comprendre entre 3 et 25 caractères et ne comporter que des lettres (sans accents)`)
    } else {
        showSuccess(FirstnameEl);
        valid = true;
    }
    return valid;
}

// Validation du mail ------------------------
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)) {
        showError(emailEl, 'Renseignez votre adresse e-mail');
    } else if (!isEmailValid(email)) {
        showError(emailEl, "Cette adresse e-mail est invalide")
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

// Validation du mdp -------------------------
const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    
    if (!isRequired(password)) {
        showError(passwordEl, 'Renseignez un mot de passe');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Le mot de passe doit avoir au moins 8 caractères, dont une minuscule,une majuscule, un chiffre et un caractère spécial parmi les suivants #+-^[]');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }
    return valid;
};

// Validation de confirm mdp -----------------
const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    
    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Entrez votre mot de passe');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, "Confirmation différante de votre mot de passe");
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }
    return valid;
}

// Submit form ------------------------------
form.addEventListener('submit',function(e){
// utilisation du prevent Default
    e.preventDefault();
//validation des champs
    let isSurnameValid = checkSurname();
    let isFirstnameValid = checkFirstname();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
    let isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isSurnameValid &&
                    isFirstnameValid &&
                    isEmailValid &&
                    isPasswordValid &&
                    isConfirmPasswordValid;
    
    if (isFormValid==false) {
        e.preventDefault();
    }else{
        // localStorage -----------------------------
        let surnameVal =document.getElementById("surname").value;
        let firstnameVal =document.getElementById("firstname").value;
        let adressMail = document.getElementById("email").value;
        let passWord =password.value;
        //envoie dans le localStorage
        localStorage.setItem("surname",surnameVal);
        localStorage.setItem("firstname",firstnameVal);
        localStorage.setItem("mail",adressMail);
        localStorage.setItem("passWord",passWord);
        console.log(localStorage.getItem('nom'));
        console.log(localStorage.getItem('passWord'));
        window.location.href = "login.html";
    }
});
