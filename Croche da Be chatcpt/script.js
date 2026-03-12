const menuToggle = document.querySelector('.menu-toggle'); // Seleciona o botão de abrir/fechar menu mobile.
const nav = document.querySelector('.nav'); // Seleciona o bloco de navegação para alternar visibilidade.

if (menuToggle && nav) { // Verifica se botão e menu existem antes de adicionar comportamento.
  menuToggle.addEventListener('click', () => { // Escuta clique no botão de menu.
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true'; // Lê estado atual de acessibilidade do botão.
    menuToggle.setAttribute('aria-expanded', String(!expanded)); // Atualiza atributo aria-expanded para novo estado.
    nav.classList.toggle('is-open'); // Alterna classe visual que abre/fecha menu mobile.
  }); // Finaliza evento de clique do botão.

  nav.querySelectorAll('a').forEach((link) => { // Percorre todos os links dentro do menu.
    link.addEventListener('click', () => { // Escuta clique em cada link de navegação.
      nav.classList.remove('is-open'); // Fecha o menu após escolher uma seção.
      menuToggle.setAttribute('aria-expanded', 'false'); // Ajusta atributo de acessibilidade para fechado.
    }); // Finaliza evento de clique de cada link.
  }); // Finaliza iteração dos links do menu.
} // Finaliza lógica do menu mobile.

const revealItems = document.querySelectorAll('.reveal'); // Seleciona elementos que terão efeito de fade-in ao rolar.

const observer = new IntersectionObserver((entries) => { // Cria observador para detectar entrada de elementos na tela.
  entries.forEach((entry) => { // Percorre cada elemento observado que mudou de estado.
    if (entry.isIntersecting) { // Verifica se elemento está visível na viewport.
      entry.target.classList.add('visible'); // Adiciona classe que dispara animação de entrada.
    } // Finaliza condição de visibilidade.
  }); // Finaliza percurso dos elementos observados.
}, { threshold: 0.2 }); // Define gatilho quando 20% do elemento estiver visível.

revealItems.forEach((item) => observer.observe(item)); // Inicia observação de todos os elementos com animação.