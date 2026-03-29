// =========================
// SELEÇÃO DOS ELEMENTOS
// =========================

// Pega o ícone do menu (botão que o usuário clica)
const menuIcon = document.getElementById('marca');

// Pega o menu (lista que vai aparecer/desaparecer)
const menu = document.getElementById('menu');   


// =========================
// EVENTO DE CLIQUE
// =========================

// Quando o usuário clicar no ícone...
menuIcon.addEventListener('click', () => {

    // Aqui acontece a lógica:
    // Verifica como o menu está agora

    // Se o display for 'block' (ou seja, visível)
    // então muda para 'none' (esconde)
    // Caso contrário (se estiver escondido),
    // muda para 'block' (mostra)

    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

});

