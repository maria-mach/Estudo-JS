// obj de topico que irão ser manipulados
const obj_topicos = document.querySelectorAll(".topico"); 
const obj_area_conteudo = document.querySelector("#conteudo-p"); 
const obj_img_universo = document.querySelector("#imagem-universo"); 

// Manipulação da tabela
const obj_card_ant = document.querySelector('#card_ant');
const obj_card_prox = document.querySelector('#card_prox');
const obj_name = document.querySelector('#name');
const obj_img_tb = document.querySelector('#img-tb');
const obj_idade = document.querySelector('#idade');
const obj_especie = document.querySelector('#especie');
const obj_genero = document.querySelector('#genero');
const obj_persin = document.querySelector('#persin');
const obj_fis = document.querySelector('#fis');
const imgItadori = document.querySelector('#img-tb'); 
const link_img = document.querySelector('#link_img')

let num_card = 0;  // tabela
let num_tp = 0;    // topicos
let personagemAtual = 0; // 0 - ita, 1 -suku

// Manipulação do texto dos clas
const obj_img_clas = document.querySelectorAll('.img_clas')
const obj_p_clas = document.querySelector('#p_clas')

// manipulção video e voz do formulario
const nomePersonagem = document.getElementById("nome-personagem");
const video = document.getElementById("video");
const videoSrc = document.getElementById("video-src");
const audio = document.getElementById("audio");
const obj_form = document.getElementById("comentario-form")


// manipulaçao menu do mobile
const obj_menu = document.querySelector('.menu_mobile');
const obj_navMenu = document.querySelector('nav ul');


// Eventos
// chama as funções de navegação de cards
obj_card_ant.addEventListener('click', funCardAnterior);
obj_card_prox.addEventListener('click', funProximoCard);

// chama a função a partir do topico clicado
for (let i = 0; i < obj_topicos.length; i++) {
    obj_topicos[i].addEventListener('click', function () {
        funExibeConteudo(i); 
    });
}

//chama a função a partir da imagem clicada
for (let i = 0; i < obj_img_clas.length; i++) {
    obj_img_clas[i].addEventListener('click', function () {
        funPCla(i); 
    });
}

// o menu todo não sumir qnd voltar pra tela grande
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        obj_navMenu.style.display = '';  
    }
});

// sumir os textos em mudança de tamanho de tela para não bugar
window.addEventListener('resize', function () {
    for (let i = 0; i < obj_img_clas.length; i++) {
        const pTexto = obj_img_clas[i].querySelector('p');
        if (pTexto) {
            pTexto.style.display = 'none'; 
        }
        obj_img_clas[i].classList.remove('press'); 
        obj_p_clas.innerHTML = '';
    }
});

// Fecha o menu mobile ao clicar em um link
const linksNav = document.querySelectorAll('nav ul li a');
linksNav.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            obj_navMenu.style.display = 'none';
        }
    });
});

// chama o alert feito a partir do comentário
obj_form.addEventListener("submit", enviarFormulario);

// evento e função, dois eventos que fazem o sukuna aparecer ou sumir acionado pelo mouse
function inicializarEventosHover() {
    // Quando passar o mouse por cima e tirar
    imgItadori.addEventListener('mouseover', trocarParaSukuna);
    imgItadori.addEventListener('mouseout', voltarParaItadori);
}
inicializarEventosHover();

// evento e função, chama com clique e faz aparecer a barra de navegação do mobile em lista
obj_menu.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
        if (obj_navMenu.style.display === 'flex') {
            obj_navMenu.style.display = 'none';
        } else {
            obj_navMenu.style.display = 'flex';
        }
    }
});


// Funções

// ambas funçóes servem para pular o sukuna durante a a passagem de tabelas
function funCardAnterior() {
    num_card = (num_card - 1 + infos.length) % infos.length;
    if (num_card === 1) num_card--; // corta o sukuna
    funExibeCard(num_card);
}

function funProximoCard() {
    num_card = (num_card + 1) % infos.length;
    if (num_card === 1) num_card++; // corta o sukuna
    funExibeCard(num_card);
}

// exibe as informações da tabela, de acordo com as setas de prox e anterior, e o indice de infos
function funExibeCard(par_ind) {
    link_img.setAttribute('href', infos[par_ind].img);
    obj_img_tb.setAttribute('src', infos[par_ind].img);
    obj_img_tb.setAttribute('alt', infos[par_ind].name);
    obj_img_tb.setAttribute('title', infos[par_ind].name);
    obj_name.innerHTML = infos[par_ind].name;
    obj_idade.innerHTML = infos[par_ind].idade;
    obj_especie.innerHTML = infos[par_ind].especie;
    obj_genero.innerHTML = infos[par_ind].genero;
    obj_persin.innerHTML = infos[par_ind].persin;
    obj_fis.innerHTML = infos[par_ind].fis;


    personagemAtual = par_ind;
}

funExibeCard(num_card);

// funcao para o itadori trocar para o sukuna
function trocarParaSukuna() {
    if (obj_name.innerHTML === 'Itadori Yuji') { 
        funExibeCard(1); 
    }
}

// volta para o itadori somente se o sukuna estiver aparecendo
function voltarParaItadori() {
    if (obj_name.innerHTML === 'Ryomen Sukuna') {
        funExibeCard(0); 
    }
}

// Vai carregar os dados do mobile, porém escondidos
function funCarregaTextoAbaixoImgClas() {
    for (let i = 0; i < obj_img_clas.length; i++) {
        const obj_p_novo = document.createElement('p');
        obj_p_novo.textContent = clas[i].pag; 
        obj_img_clas[i].appendChild(obj_p_novo);
        obj_p_novo.style.display = 'none';
    }
}
funCarregaTextoAbaixoImgClas();


// semelhante a função exibeconteudo, porem modifica dependendo do tipo de tela 
function funPCla(par_ind) {
    for (let i = 0; i < obj_img_clas.length; i++) {
        obj_img_clas[i].classList.remove('press');

        if (i !== par_ind) {
            const pTexto = obj_img_clas[i].querySelector('p');
            if (pTexto) {
                pTexto.style.display = 'none'; 
            }
        }
    }

    if (window.innerWidth >= 1024) {

        if (obj_p_clas.innerHTML === '') {
            obj_img_clas[par_ind].classList.add('press');
            obj_p_clas.innerHTML = clas[par_ind].pag;
            obj_p_clas.classList.add('press');
            
        } else {
            obj_p_clas.innerHTML = ''; 
            obj_img_clas[par_ind].classList.remove('press');
            obj_p_clas.classList.remove('press');
        }
        } else {
            const obj_p_novo = obj_img_clas[par_ind].querySelector('p'); 
            if (obj_p_novo) {
                obj_img_clas[par_ind].classList.add('press');
                if (obj_p_novo.style.display === 'none') {
                    obj_p_novo.style.display = 'block'; // Exibe o texto
                } else {
                    obj_p_novo.style.display = 'none';
                    obj_img_clas[par_ind].classList.remove('press'); 
                }                
            }
        }
}

// exibe o conteudo de acordo com o topico selecionado
function funExibeConteudo(par_ind) {
    for (let i = 0; i < obj_topicos.length; i++) {
        obj_topicos[i].classList.remove('ativo');
    }

    obj_topicos[par_ind].classList.add('ativo');

    obj_area_conteudo.innerHTML = conteudos[par_ind].descricao;
    obj_img_universo.setAttribute('src', conteudos[par_ind].imagem);
    obj_img_universo.setAttribute('alt', conteudos[par_ind].nome);
    obj_img_universo.setAttribute('title', conteudos[par_ind].nome);
}
funExibeConteudo(num_tp);


// Mostra audio e video de acordo com o personagem
function mostrarPersonagem(personagem) {
    document.getElementById("personagem-conteudo").style.display = 'block';

    nomePersonagem.textContent = personagem.toUpperCase();

    if (personagem === 'toji') {
        videoSrc.src = "../videos_audio/toji.mp4";
        audio.src = "../videos_audio/toji.m4a";
    } else if (personagem === 'sukuna') {
        videoSrc.src = "../videos_audio/sukuna.mp4";
        audio.src = "../videos_audio/sukuna.m4a";
    } else if (personagem === 'gojo') {
        videoSrc.src = "../videos_audio/gojo.mp4";
        audio.src = "../videos_audio/gojo.m4a";
    }

    
    video.load();
    audio.load();
}

//Envia alert com os dados escritos no formulario
function enviarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;

    alert(`Comentário enviado por ${nome}: ${comentario}`);
}


window.onload = function() {
    const audioElement = document.getElementById("audio");
    if (audioElement) {
        audioElement.volume = 0.5;  // Define o volume para 50% ao carregar a página
    }

    const videoElement = document.getElementById("video");
    if (videoElement) {
        videoElement.volume = 0.2; 
    }

    // Event listeners para os botões de personagem (separando do HTML)
    const botoesPersonagem = document.querySelectorAll('.personagem button');
    botoesPersonagem.forEach(botao => {
        botao.addEventListener('click', () => {
            const personagem = botao.getAttribute('data-personagem');
            mostrarPersonagem(personagem);
        });
    });
};
