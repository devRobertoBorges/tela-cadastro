document.getElementById('formCadastro').addEventListener('submit', async (e) => {
    e.preventDefault();


    const nome = document.getElementById("name").value.trim();
    const senha = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();
    const emailVerificacao = document.getElementById("emailConfirm").value.trim();

    if (!nome || !email || !senha) {
        alert('Prencha todos os campos!');
        return;
    }

    if (email !== emailVerificacao){
        alert("Digite o e-mail correto.")
        return
    }

    const res = await fetch('/cadastro', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({nome, email, senha})
    });

    const data = await res.json();
    alert(data.message);
})