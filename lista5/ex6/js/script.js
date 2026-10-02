users = localStorage.getItem("users");
if (users == null)
    document.write('<p>Não há usuários cadastrados</p>');
else
    users = JSON.parse("users");

for (i=0 < users.usuarios.length; i++;);
    document.write('<p>${users.usuarios[i].usuarios}</p>');