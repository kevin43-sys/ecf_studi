const mailInput = document.getElementById('EmailInput');
const passwordInput = document.getElementById('PasswordInput');
const btnSingin = document.getElementById('btnSignin');

btnSingin.addEventListener('click', checkCredentials);

function checkCredentials() {
    
    //Ici, il faudra appeler l'API pour vérifier les crédentials en BDD

    if (mailInput.value == "test@mail.com" && passwordInput.value == "123") {
        alert("Connexion réussie");
        const token = "giokjldmglsglmdjgdqlikgjkolpgrdgqdmgerqg";
        setToken(token);

        setCookie(RoleCookieName, "client", 7);
        window.location.replace ("/");

    }
    else {
        mailInput.classList.add('is-invalid');
        passwordInput.classList.add('is-invalid');
        alert("Identifiants incorrects");
    }
}