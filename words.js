const words = {
  biblical: [
    { word: "Adão", clue: "Primeiro homem criado por Deus" },
    {
      word: "Eva",
      clue: "Primeira mulher, criada a partir da costela de Adão",
    },
    {
      word: "Caim",
      clue: "Primeiro filho de Adão e Eva, conhecido pelo primeiro assassinato",
    },
    {
      word: "Abel",
      clue: "Segundo filho de Adão e Eva, vítima de assassinato por Caim",
    },
    { word: "Noé", clue: "Construtor da arca para sobreviver ao dilúvio" },
    { word: "Abraão", clue: "Pai das nações e exemplo de fé" },
    { word: "Sara", clue: "Esposa de Abraão e mãe de Isaac" },
    { word: "Isaac", clue: "Filho de Abraão, pai de Jacó e Esaú" },
    { word: "Rebeca", clue: "Esposa de Isaac e mãe de Jacó e Esaú" },
    { word: "Jacó", clue: "Renomeado Israel, pai das doze tribos de Israel" },
    {
      word: "Esaú",
      clue: "Irmão gêmeo de Jacó, conhecido por vender sua primogenitura",
    },
    {
      word: "José",
      clue: "Filho de Jacó, vendido como escravo e se tornou governador do Egito",
    },
    {
      word: "Moisés",
      clue: "Libertador dos israelitas do Egito, recebeu os Dez Mandamentos",
    },
    {
      word: "Arão",
      clue: "Irmão de Moisés, primeiro sumo sacerdote de Israel",
    },
    { word: "Miriã", clue: "Irmã de Moisés e Arão, profetisa" },
    {
      word: "Josué",
      clue: "Sucessor de Moisés, liderou os israelitas na conquista de Canaã",
    },
    {
      word: "Raabe",
      clue: "Prostituta de Jericó que ajudou os espiões israelitas",
    },
    { word: "Débora", clue: "Profetisa e juíza de Israel" },
    {
      word: "Sansão",
      clue: "Juiz de Israel, famoso por sua força e sua relação com Dalila",
    },
    {
      word: "Davi",
      clue: "Segundo rei de Israel, conhecido por derrotar Golias",
    },
    { word: "Golias", clue: "Gigante filisteu derrotado por Davi" },
    {
      word: "Salomão",
      clue: "Filho de Davi, conhecido por sua sabedoria e construção do Templo",
    },
    { word: "Elias", clue: "Profeta que desafiou os profetas de Baal" },
    { word: "Eliseu", clue: "Sucessor de Elias, realizou muitos milagres" },
    { word: "Jonas", clue: "Profeta engolido por um grande peixe" },
    { word: "Isaías", clue: "Profeta que previu a vinda do Messias" },
    { word: "Jeremias", clue: "Profeta conhecido como 'o profeta chorão'" },
    { word: "Ezequiel", clue: "Profeta que teve visões de Deus e do futuro" },
    { word: "Daniel", clue: "Profeta que sobreviveu na cova dos leões" },
    {
      word: "Nabucodonosor",
      clue: "Rei da Babilônia, conhecido por sua relação com Daniel",
    },
    { word: "JoãoBatista", clue: "Pregador que batizou Jesus no rio Jordão" },
    { word: "Maria", clue: "Mãe de Jesus, virgem escolhida por Deus" },
    { word: "José", clue: "Pai terreno de Jesus, carpinteiro" },
    { word: "Pedro", clue: "Discípulo de Jesus, também conhecido como Simão" },
    { word: "Paulo", clue: "Apóstolo que espalhou o cristianismo aos gentios" },
    {
      word: "Marta",
      clue: "Irmã de Lázaro e Maria, conhecida por sua hospitalidade",
    },
    { word: "Lázaro", clue: "Amigo de Jesus, ressuscitado dos mortos" },
    {
      word: "MariaMadalena",
      clue: "Seguidora de Jesus, presente na sua crucificação e ressurreição",
    },
    {
      word: "Pilatos",
      clue: "Governador romano que condenou Jesus à crucificação",
    },
    {
      word: "Tomé",
      clue: "Discípulo de Jesus, conhecido por sua dúvida sobre a ressurreição",
    },
    { word: "Mateus", clue: "Discípulo de Jesus, autor de um dos evangelhos" },
    { word: "Marcos", clue: "Autor do segundo evangelho" },
    { word: "Lucas", clue: "Autor do terceiro evangelho e do livro de Atos" },
    {
      word: "João",
      clue: "Discípulo de Jesus, autor do quarto evangelho e do Apocalipse",
    },
    { word: "Barnabé", clue: "Companheiro de viagem missionária de Paulo" },
    { word: "Timóteo", clue: "Jovem discípulo de Paulo" },
    {
      word: "Tito",
      clue: "Discípulo de Paulo, destinatário de uma das cartas pastorais",
    },
    { word: "Filipe", clue: "Um dos primeiros diáconos e evangelista" },
    { word: "Estevão", clue: "Primeiro mártir cristão" },
    {
      word: "Apolo",
      clue: "Pregador eloquente que ajudou a igreja em Corinto",
    },
    { word: "Priscila", clue: "Colaboradora de Paulo, esposa de Áquila" },
    { word: "Áquila", clue: "Colaborador de Paulo, esposo de Priscila" },
    { word: "Lídia", clue: "Primeira convertida ao cristianismo na Europa" },
    { word: "Eunice", clue: "Mãe de Timóteo, conhecida por sua fé" },
    { word: "Lois", clue: "Avó de Timóteo, conhecida por sua fé" },
    { word: "Tiago", clue: "Irmão de Jesus, líder da igreja em Jerusalém" },
    { word: "Judas", clue: "Discípulo que traiu Jesus" },
    { word: "Simão", clue: "O zelote, um dos doze discípulos" },
    { word: "Joaquim", clue: "Pai de Maria, avô de Jesus" },
    { word: "Ana", clue: "Profetisa idosa que viu Jesus no templo" },
    { word: "Nicodemos", clue: "Fariseu que visitou Jesus à noite" },
    { word: "Zaqueu", clue: "Coletor de impostos que encontrou Jesus" },
    { word: "Gabriel", clue: "Anjo que anunciou o nascimento de Jesus" },
  ],
  diversas: [
    { word: "abacaxi", clue: "Fruta tropical" },
    { word: "elefante", clue: "Animal de grande porte com tromba longa" },
    { word: "computador", clue: "Dispositivo eletrônico" },
    { word: "girafa", clue: "Animal alto, com pescoço longo" },
    { word: "chocolate", clue: "Doce feito de cacau" },
    { word: "piano", clue: "Instrumento musical com teclas" },
    { word: "tigre", clue: "Felino selvagem" },
    { word: "esmeralda", clue: "Tipo de pedra preciosa" },
    { word: "navio", clue: "Embarcação no mar" },
    { word: "telefone", clue: "Dispositivo de comunicação" },
    { word: "floresta", clue: "Área com muitas árvores" },
    { word: "quadrado", clue: "Figura geométrica de quatro lados" },
    { word: "foguete", clue: "Veículo espacial" },
    { word: "sorvete", clue: "Doce gelado" },
    { word: "bicicleta", clue: "Veículo de duas rodas" },
    { word: "avião", clue: "Meio de transporte aéreo" },
    { word: "macaco", clue: "Primate arbóreo" },
    { word: "raios", clue: "Descargas elétricas na atmosfera" },
    { word: "montanha", clue: "Elevação natural da terra" },
    { word: "vela", clue: "Objeto para iluminação" },
  ],
  animals: [
    { word: "Elefante", clue: "O maior mamífero terrestre" },
    { word: "Girafa", clue: "O animal mais alto do mundo" },
    { word: "Cachorro", clue: "Conhecido como o melhor amigo do homem" },
    { word: "Gato", clue: "Animal de estimação popular, adora caçar" },
    { word: "Tigre", clue: "Grande felino listrado" },
    { word: "Leão", clue: "Considerado o rei da selva" },
    {
      word: "Zebra",
      clue: "Animal conhecido por suas listras em preto e branco",
    },
    {
      word: "Cavalo",
      clue: "Animal domesticado usado para transporte e trabalho",
    },
    {
      word: "Camelo",
      clue: "Animal adaptado para viver em desertos, possui corcovas",
    },
    {
      word: "Canguru",
      clue: "Mamífero marsupial que salta e carrega seus filhotes em uma bolsa",
    },
    { word: "Lobo", clue: "Animal canídeo selvagem que vive em matilhas" },
    {
      word: "Rinoceronte",
      clue: "Grande mamífero com um ou dois chifres no focinho",
    },
    {
      word: "Panda",
      clue: "Urso nativo da China, conhecido por sua pelagem preta e branca",
    },
    {
      word: "Urso",
      clue: "Grande mamífero onívoro, encontrado em diversas regiões do mundo",
    },
    { word: "Raposa", clue: "Animal conhecido por sua astúcia e cauda peluda" },
    {
      word: "Macaco",
      clue: "Primata conhecido por sua inteligência e habilidades de escalada",
    },
    {
      word: "Golfinho",
      clue: "Mamífero aquático inteligente, conhecido por sua comunicação e saltos",
    },
    { word: "Baleia", clue: "O maior mamífero marinho" },
    {
      word: "Tubarão",
      clue: "Peixe predador conhecido por suas várias fileiras de dentes",
    },
    { word: "Polvo", clue: "Animal marinho com oito tentáculos" },
    { word: "Tartaruga", clue: "Réptil conhecido por sua carapaça dura" },
    {
      word: "Jacaré",
      clue: "Réptil encontrado em regiões tropicais, com uma mandíbula poderosa",
    },
    {
      word: "Pinguim",
      clue: "Ave marinha que não voa, encontrada em regiões frias",
    },
    {
      word: "Flamingo",
      clue: "Ave conhecida por sua plumagem rosa e pernas longas",
    },
    {
      word: "Papagaio",
      clue: "Ave colorida, famosa por sua capacidade de imitar sons",
    },
    {
      word: "Coruja",
      clue: "Ave de rapina noturna, conhecida por seu voo silencioso",
    },
    {
      word: "Águia",
      clue: "Ave de rapina diurna, símbolo de força e liberdade",
    },
    {
      word: "Pavão",
      clue: "Ave conhecida por suas penas coloridas e cauda exuberante",
    },
    {
      word: "Coelho",
      clue: "Pequeno mamífero conhecido por suas longas orelhas e rápida reprodução",
    },
    {
      word: "Hamster",
      clue: "Pequeno roedor popular como animal de estimação",
    },
  ],
  fruits: [
    { word: "Maçã", clue: "Fruta associada a Adão e Eva" },
    { word: "Banana", clue: "Fruta amarela e curva" },
    { word: "Banana", clue: "Fruta amarela e curva" },
    { word: "Laranja", clue: "Fruta cítrica rica em vitamina C" },
    { word: "Uva", clue: "Pequena fruta usada para fazer vinho" },
    { word: "Manga", clue: "Fruta tropical doce e suculenta" },
    {
      word: "Morango",
      clue: "Pequena fruta vermelha com sementes na superfície",
    },
    {
      word: "Abacaxi",
      clue: "Fruta tropical com casca espinhosa e polpa amarela",
    },
    { word: "Cereja", clue: "Pequena fruta vermelha com caroço" },
    {
      word: "Pêra",
      clue: "Fruta doce e suculenta, com formato característico",
    },
    { word: "Kiwi", clue: "Fruta peluda por fora e verde por dentro" },
    {
      word: "Melancia",
      clue: "Grande fruta com polpa vermelha e sementes pretas",
    },
    { word: "Melão", clue: "Fruta grande com polpa doce e casca amarela" },
    { word: "Limão", clue: "Fruta cítrica azeda, usada em sucos e temperos" },
    {
      word: "Mamão",
      clue: "Fruta tropical com polpa laranja e sementes pretas",
    },
    { word: "Maracujá", clue: "Fruta com polpa azeda e sementes pretas" },
    { word: "Framboesa", clue: "Pequena fruta vermelha e suculenta" },
    {
      word: "Amora",
      clue: "Pequena fruta preta ou roxa, parecida com a framboesa",
    },
    { word: "Pêssego", clue: "Fruta com casca aveludada e polpa suculenta" },
    { word: "Nectarina", clue: "Fruta similar ao pêssego, mas com casca lisa" },
    { word: "Caju", clue: "Fruta tropical com castanha na extremidade" },
    {
      word: "Jabuticaba",
      clue: "Pequena fruta preta que cresce diretamente no tronco da árvore",
    },
    { word: "Ameixa", clue: "Fruta pequena e redonda, com polpa suculenta" },
    { word: "Figo", clue: "Fruta doce e macia, com sementes minúsculas" },
    { word: "Tâmara", clue: "Fruta doce e seca, comum no Oriente Médio" },
    { word: "Caqui", clue: "Fruta laranja com polpa doce e suculenta" },
    {
      word: "Graviola",
      clue: "Fruta tropical com polpa branca e sabor agridoce",
    },
    { word: "Pitaya", clue: "Fruta exótica, conhecida como fruta do dragão" },
    { word: "Carambola", clue: "Fruta amarela em forma de estrela" },
    { word: "Romã", clue: "Fruta com muitas sementes vermelhas e suculentas" },
    { word: "Lichia", clue: "Fruta pequena com casca áspera e polpa doce" },
  ],
};

export default function getWord(type) {
  const wordsOfType = words[type];
  const index = Math.floor(Math.random() * wordsOfType.length);
  return wordsOfType[index];
}
