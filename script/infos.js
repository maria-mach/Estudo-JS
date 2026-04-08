let conteudos = [
    {
        nome: 'Protagonistas de jujutsu',
        descricao: "Em 'Jujutsu Kaisen', seguimos a jornada de Yuji Itadori, um adolescente com uma força sobre-humana que leva uma vida normal até se envolver em um mundo sombrio e perigoso. Sua vida muda drasticamente quando ele encontra um artefato amaldiçoado – um dedo de Sukuna, um dos espíritos mais poderosos e malignos conhecidos. Após ingerir o dedo, Yuji se torna o receptáculo de Sukuna, o que o coloca em uma situação extremamente perigosa. Para controlar essa nova ameaça e proteger os outros, Yuji é levado a uma escola de feiticeiros, onde aprende a lutar contra as maldições e enfrentar outros desafios sobrenaturais. A trama explora temas de amizade, sacrifício e a luta contra forças que ameaçam a humanidade.",
        imagem: './imagens/app4.png'
    },
    {
        nome: 'Feiticeiro panda de jujutsu',
        descricao: "Os feiticeiros em 'Jujutsu Kaisen' são indivíduos altamente treinados que dedicam suas vidas a combater as maldições, seres sobrenaturais formados por emoções humanas negativas, como raiva, ódio e medo. Esses feiticeiros possuem habilidades especiais, chamadas de 'técnicas de maldição', que lhes permitem manipular energia amaldiçoada de diversas maneiras. A maioria dos feiticeiros estuda em escolas como a Tokyo Metropolitan Magic Technical College, onde são treinados por mestres experientes. O treinamento envolve não apenas o desenvolvimento de habilidades físicas e mágicas, mas também o fortalecimento da mente e da ética, já que eles lidam com forças extremamente perigosas. Personagens como Satoru Gojo, um dos feiticeiros mais poderosos, mostram que, mesmo no combate às maldições, há uma constante batalha interna e moral.",
        imagem: './imagens/panda.webp'
    },
    {
        nome: 'Maldições de jujutsu',
        descricao: "As maldições em 'Jujutsu Kaisen' são entidades sobrenaturais criadas por emoções humanas negativas e se manifestam como espíritos perigosos. Elas podem assumir várias formas, desde pequenas criaturas até monstros gigantescos, e são extremamente hostis, alimentando-se do sofrimento e medo das pessoas. A maioria das maldições é invisível aos olhos humanos comuns, mas os feiticeiros têm o poder de senti-las e combatê-las usando suas habilidades especiais. A maior ameaça entre as maldições é Sukuna, conhecido como o 'Rei das Maldições', que foi uma figura temida mesmo durante sua vida humana, antes de ser banido para o corpo de Yuji. As maldições são um reflexo das emoções mais sombrias da humanidade, e a luta contra elas se torna uma batalha não só contra essas entidades, mas também contra os próprios demônios internos dos personagens.",
        imagem: './imagens/jogo.webp'
    }
];


let infos = [
    {
        img: './imagens/itadori2.png',
        name: 'Itadori Yuji',
        idade: '16',
        especie: 'Humano',
        genero: 'Masculino',
        fis: 'Forte e atlético',
        persin: 'Determinado e corajoso'
    },
    {
        img: './imagens/sukuna2.png', // Imagem do Sukuna
        name: 'Ryomen Sukuna',
        idade: '1.000+',
        especie: 'Espírito',
        genero: 'Masculino',
        fis: 'Imensamente forte',
        persin: 'Cruel e manipulador'
    },
    {
        img: './imagens/megumi2.png',
        name: 'Fushiguro Megumi',
        idade: '17',
        especie: 'Humano',
        genero: 'Masculino',
        fis: 'Alto e magro',
        persin: 'Calmo e sério'
    },
    {
        img: './imagens/nobara2.png',
        name: 'Nobara Kugisaki',
        idade: '16',
        especie: 'Humano',
        genero: 'Feminino',
        fis: 'Estatura média e cabelo curto',
        persin: 'Confiante e impulsiva'
    },
    {
        img: './imagens/gojo3.png',
        name: 'Satoru Gojo',
        idade: '28',
        especie: 'Humano',
        genero: 'Masculino',
        fis: 'Alto e musculoso',
        persin: 'Carismático e sarcástico'
    }
];

let clas = [
    {
        pag: 'O Clã Kamo é conhecido por sua habilidade exclusiva de manipulação de sangue, uma técnica amaldiçoada incrivelmente versátil e perigosa. Este clã tem uma história marcada por controvérsias, incluindo sua associação com Noritoshi Kamo, um feiticeiro do passado considerado um dos mais sombrios da história do jujutsu devido a seus experimentos antiéticos com maldições e humanos. Na atualidade, Noritoshi Kamo (um descendente com o mesmo nome) busca restaurar a honra do clã, usando sua habilidade de manipulação de sangue para lutar contra maldições e proteger os inocentes. Apesar de seu potencial, o clã ainda carrega as sombras de seu passado, lutando para equilibrar tradição e redenção. O Clã Kamo representa uma combinação de habilidade excepcional e um passado conturbado, destacando os desafios de manter um legado enquanto busca redenção.'
    },
    {
        pag: 'O Clã Zenin é uma família tradicionalista e extremamente influente no mundo jujutsu, sendo conhecida por sua obsessão por linhagem e pureza de sangue. Eles dão grande valor à habilidade inata de seus membros e frequentemente desconsideram aqueles que não nascem com técnicas amaldiçoadas poderosas. Apesar de sua reputação, o clã enfrenta divisões internas. Maki Zenin, uma das principais personagens, foi rejeitada pela família por não possuir energia amaldiçoada, mas sua habilidade excepcional com armas a coloca como uma combatente temida. Por outro lado, Naoya Zenin, outro membro de destaque, representa a facção mais conservadora e arrogante do clã. O Clã Zenin simboliza a tensão entre tradição e inovação, com conflitos que moldam profundamente seu legado.'
    },
    {
        pag: 'O Clã Gojo é uma das três grandes famílias do mundo jujutsu e é amplamente reconhecido por sua supremacia em combate. Este clã é conhecido por abrigar os herdeiros da técnica amaldiçoada mais poderosa, a Técnica da Limitação Infinita, e por transmitir os Seis Olhos, uma habilidade rárissima que amplifica imensamente o controle de energia amaldiçoada. O membro mais destacado do clã é Satoru Gojo, o feiticeiro mais poderoso da atualidade. Sua combinação de habilidades torna-o praticamente invencível, sendo um pilar essencial na luta contra maldições. O Clã Gojo simboliza poder absoluto, mas também enfrenta o desafio de lidar com as responsabilidades e rivalidades que acompanham esse prestígio.'
    }
]

