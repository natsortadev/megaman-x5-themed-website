var popup = document.getElementById('popup');

function alertaLogin() {
    if(document.getElementById('email').value.length != 0 && document.getElementById('senha').value.length != 0 && document.getElementById('nome').value.length != 0) {
        var nome = document.getElementById('nome').value;
        window.alert(`Login efetuado com sucesso! Bem-vindo(a) à base, Maverick Hunter ${nome}.`);
        closePopup();
        document.getElementById('nome').value = "";
        document.getElementById('email').value = "";
        document.getElementById('senha').value = "";
    } else {
        window.alert(`Insira seu nome, email e senha antes de submeter seus dados.`);
    } 
}

function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
}