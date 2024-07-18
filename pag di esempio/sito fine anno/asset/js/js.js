function controllo() {
    if (document.registrazione.name.value == ""){
        alert("Inserire un nome");
        return false;
    }
    if (document.registrazione.fname.value == ""){
        alert("Inserire un cognome");
        return false;
    }
    if (document.registrazione.email.value == ""){
        alert("Inserire una email");
        return false;
    }
    if (document.registrazione.password.value == ""){
        alert("Inserire una password");
        return false;
    }
    if (document.registrazione.passwordc.value == ""){
        alert("Inserire la password di controllo");
        return false;
    }
    if (document.registrazione.password.value != document.registrazione.passwordc.value){
        alert("Le password non coincidono");
        return false;
    }
    if (document.registrazione.anni.value == ""){
        alert("inserire un'età");
        return false;
    }
    alert("I dati sono stati inseriti correttamente")
    return true;
}

function controlloA() {
    if (document.registrazione.email.value == ""){
        alert("Inserire una email");
        return false;
    }
    if (document.registrazione.password.value == ""){
        alert("Inserire una password");
        return false;
    }
    alert("I dati sono stati inseriti correttamente")
    return true;
}
