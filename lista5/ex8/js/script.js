document.getElementById('btnCad').addEventListener("click", function storeUser() {
    user = document.getElementById('usuario');
    password = document.getElementById('senha');
    dataUser = {user: user.value, password: password.value};
    vetUser = JSON.parse(localStorage.getItem('users')) || [];

    if(vetUser.length == 0) {
        vetUser.push(dataUser);
        localStorage.setItem('users', JSON.stringify(vetUser));
        alert("usuário cadastrado");
    }else{
        igual = false;
        for(i = 0; i < vetUser.length; i++) {
            if(dataUser.user == vetUser[i].user) {
                alert("esse usuário já existe");
                igual = true;
                break;
            }
        }
        if(!igual) {
            vetUser.push(dataUser);
            localStorage.setItem('users', JSON.stringify(vetUser));
            alert("usuário cadastrado");
        }
    }
});