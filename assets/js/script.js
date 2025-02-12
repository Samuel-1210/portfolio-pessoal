const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
  try {
    const dadosPerfil = await fetch(`https://api.github.com/users/Samuel-1210`);
    const perfil = await dadosPerfil.json();

    let conteudo = `
    <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}" />

        <article id="about-texto" class="about-texto">
          <h2>Sobre mim</h2>
          <p>
            Sou um desenvolvedor Full Stack em formação, com experiência em
            JavaScript, React, Node.js, SQL. Apaixonado(a) por resolver
            problemas e construir aplicações que fazem a diferença. Meu foco
            está em aprendizado contínuo e desenvolvimento de projetos reais.
          </p>
          <div id="about_github" class="flex about_github">
            <a
              href="${perfil.html_url}"
              target="_blank"
              class="botao"
            >
              Github
            </a>
            <p>${perfil.followers} Seguidores</p>
            <p>${perfil.public_repos} Repositórios</p>
          </div>
        </article>
    `;

    sobre.innerHTML += conteudo;
  } catch (error) {
    console.error(error);
  }
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoNome = document.querySelector("#nome");
  const txtNome = document.querySelector("#txtNome");
  const campoEmail = document.querySelector("#email");
  const campoAssunto = document.querySelector("#assunto");
  const txtAssunto = document.querySelector("#txtAssunto");

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = "O nome deve ter no mínimo 3 caracteres";
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = "";
  }
  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um e-mail válido.";
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = "";
  }

  if (campoAssunto.value.length < 5) {
    txtAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres.";
    campoAssunto.focus();
    return;
  } else {
    txtAssunto.innerHTML = "";
  }
  formulario.submit();
});

getApiGithub();