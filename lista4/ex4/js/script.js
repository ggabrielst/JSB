document.getElementById("btnCad").addEventListener("click", function () {
    txtUser = document.getElementById("txtUser");
    txtPassword = document.getElementById("txtPassword");

    user = {usuario: txtUser.value, senha: txtPassword.value};
    localStorage.setItem("user", JSON.stringify(user));
})