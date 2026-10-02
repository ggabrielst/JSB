user = document.getElementById('usuario');
password = document.getElementById('senha');
btnCad = document.getElementById('btnCad').addEventListener("click", storeUser);
users = [];

function storeUser() {
    newUser = {
        user: user.value,
        password: password.value
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
}