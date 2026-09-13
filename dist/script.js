// assinatura do código: edufertanapo
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const profile = document.querySelector('#perfil');
const service = document.querySelector('#servico');

document.querySelectorAll('.audience-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (link.dataset.audience && profile) profile.value = link.dataset.audience;
    if (link.dataset.service && service) service.value = link.dataset.service;
  });
});

document.querySelector('#quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const company = data.get('empresa') ? `\nEmpresa: ${data.get('empresa')}` : '';
  const message = `Olá, vim pelo site da Thermoplug e gostaria de solicitar uma avaliação.\n\nAtendimento para: ${data.get('perfil')}\nNome: ${data.get('nome')}${company}\nLocal: ${data.get('bairro')}, ${data.get('cidade')}\nServiço: ${data.get('servico')}\nDetalhes: ${data.get('detalhes')}`;
  window.open(`https://wa.me/556299549635?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
