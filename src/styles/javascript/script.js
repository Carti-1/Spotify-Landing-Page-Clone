$(document).ready(function(){
    // Menu Mobile
    $('#mobile_btn').on('click', function (){
        $('#mobile_menu').toggleClass('active'); 
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const planDetails = {
        individual: {
            title: 'Plano Individual',
            description: 'Este plano é perfeito para você curtir suas músicas e podcasts favoritos sem interrupções. Faça o upgrade e aproveite o melhor do Spotify.',
            features: [
                'Cancele quando quiser.',
                'Qualidade de som incrível.',
                'Viaje para o exterior sem perder suas músicas.'
            ]
        },
        duo: {
            title: 'Plano Duo',
            description: 'Duas contas Premium para um casal que mora junto. Aproveitem músicas sem anúncios, offline e uma playlist feita para os dois.',
            features: [
                'Música sem anúncios para duas pessoas.',
                'Downloads para ouvir offline.',
                'Playlist Duo Mix, atualizada regularmente.'
            ]
        },
        familia: {
            title: 'Plano Família',
            description: 'Até 6 contas Premium para familiares que moram no mesmo endereço. Inclui o app Spotify Kids e a possibilidade de bloquear músicas com conteúdo explícito.',
            features: [
                '6 contas com acesso total ao Premium.',
                'Bloqueio de músicas com conteúdo explícito.',
                'Acesso ao Spotify Kids, um app separado para crianças.'
            ]
        },
        universitario: {
            title: 'Plano Universitário',
            description: 'Um desconto especial para estudantes universitários elegíveis. Aproveite todos os benefícios do Premium por um preço que cabe no seu bolso.',
            features: [
                'Ouça músicas sem anúncios.',
                'Faça download para ouvir quando e onde quiser.',
                'Cancele a qualquer momento, sem burocracia.'
            ]
        }
    };

    const modal = $('#info-modal');

    // Quando clicar em qualquer botão com a classe .btn-plano 
    $('.btn-plano').on('click', function() {
        // Pega o valor do atributo 'data-plan' do botão clicado
        const planKey = $(this).data('plan');
        
        // Busca os detalhes do plano correspondente no objeto
        const details = planDetails[planKey];

        if (details) {
            // Atualiza o conteúdo do modal
            $('#modal-title').text(details.title);
            $('#modal-description').text(details.description);

            const featuresList = $('#modal-features');
            featuresList.empty();

            details.features.forEach(feature => {
                featuresList.append(`<li>${feature}</li>`);
            });

            modal.css('display', 'flex');
        }
    });


    $('#close-modal').on('click', function() {
        modal.css('display', 'none');
    });

    // Carrossel
const slider = document.querySelector('.image-carousel');
const btnPrevious = document.getElementById('prev-slide');
const btnNext = document.getElementById('next-slide');
const content = document.querySelector('.image-carousel');

const slideProps = {
    scroll: 0,
    width: content.children[0].offsetWidth + 15, 
};

const controlSlide = (e) => {
    const id = e.currentTarget.id;
    const contentWidth = content.scrollWidth;

    switch (id) {
        case 'next-slide':
            if (slideProps.scroll + slideProps.width < contentWidth) {
                slideProps.scroll += slideProps.width;
            }
            slider.scrollLeft = slideProps.scroll;
            break;

        case 'prev-slide':
            slideProps.scroll = slideProps.scroll - slideProps.width < 0 ? 0 : slideProps.scroll - slideProps.width;
            slider.scrollLeft = slideProps.scroll;
            break;

        default:
            break;
    }
    setCurrentDot();
};

const setCurrentDot = () => {
    const dots = document.querySelector('.length-dots');
    const currentDot = Math.round(slideProps.scroll / slideProps.width);

    for (let i = 0; i < dots.children.length; i++) {
        dots.children[i].classList.remove('active');
    }
    dots.children[currentDot].classList.add('active');
};

window.onload = () => {
    const contentChildrensLength = content.children.length;
    const dots = document.querySelector('.length-dots');

    for (let index = 0; index < contentChildrensLength -1; index++) {
        const newDot = dots.querySelector('.dot').cloneNode();
        dots.appendChild(newDot);
    }
    setCurrentDot();
};

btnNext.addEventListener('click', controlSlide);
btnPrevious.addEventListener('click', controlSlide);
});