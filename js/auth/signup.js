// Implémenter le Js de ma page

const inputNom = document.getElementById('NomInput');
const inputPrenom = document.getElementById('PrenomInput');
const inputMail = document.getElementById('EmailInput');
const inputPassword = document.getElementById('PasswordInput');
const inputValidationPassword = document.getElementById('ValidatePasswordInput');
const btnValidation = document.getElementById('btn-validation-insciption');

//function permettant de valider le formulaire

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

function  validateForm() {
   const nomOk = validateRequired(inputNom);
   const prenomOk = validateRequired(inputPrenom);
   const mailOk = validateEmail(inputMail);
   const passwordOk = validatePassword(inputPassword);
   const passwordConfirmOk = validateConfirmPassword(inputPassword, inputValidationPassword);
}

    if(nomOk && prenom && mailOk && passwordOk && passwordConfirmOk, inputValidationPassword){
        btnValidation.disabled = false;
    }
    else {
        btnValidation.disabled = true;
    }


    function validateConfirmPassword(inputPwd, inputConfirmPwd){
        if(inputPwd.value == inputConfirmPwd.value){
            inputConfirmPwd.classList.add("is-valid");
            inputConfirmPwd.classList.remove("is-invalid");
            return true;
        }
        else{
            inputConfirmPwd.classList.add("is-invalid");
            inputConfirmPwd.classList.remove("is-valid");
            return false;
        }
    }
 function validatePassword(input){
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
        const passwordUser = input.value;
        if(passwordUser.match(passwordRegex)){
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            return true;
        } 
        else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            return false;
        }
}

function validateEmail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        inputMail.classList.add('is-valid');
        inputMail.classList.remove('is-invalid');
        return true;
    } 
    else {
        inputMail.classList.remove('is-valid');
        inputMail.classList.add('is-invalid');
        return false;
    }
}

function validateRequired(input){
    if (input.value != ''){
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    }
    else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }

}

