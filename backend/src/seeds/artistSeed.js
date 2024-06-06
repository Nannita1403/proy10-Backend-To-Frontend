const artistEvents = [
    {
      name: 'Pulp',
    img: 'https://media.gq.com.mx/photos/5be9fc5984b96ec569941c3a/master/w_1600%2Cc_limit/el_ultimo_concierto_de_pulp_en_cine_5516.jpg',
    description: 'Pulp es un grupo creado en Sheffield, Inglaterra, a finales de los 70, aunque su primer disco se editó en 1983. Del grupo destaca su carismático líder, Jarvis Cocker,uno de los estandartes del britpop.',
    },
    {
      name: 'Lana del Rey',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/LDR2019-cr.jpg/220px-LDR2019-cr.jpg',
    description: 'Elizabeth Woolridge Grant, conocida artísticamente como Lana Del Rey, es una cantante, compositora, modelo, actriz, escritora, productora y poetisa estadounidense.    Su música se distingue por su calidad cinematográfica, su estilo retro y su exploración del romance trágico, el glamur y la melancolía.',
    },
    {
      name: 'SZA',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SZA_CTRL_Tour_Toronto_2017_10_%28cropped%29.jpg/220px-SZA_CTRL_Tour_Toronto_2017_10_%28cropped%29.jpg',
    description: 'Solána Imani Rowe, conocida profesionalmente como SZA, (siglas para «Sovereign Zig-Zag Allah» o «Savior Zig-Zag Allah»), es una cantante y compositora estadounidense. a música de SZA ha sido descrita como R&B alternativo, con elementos de soul, hip hop, R&B minimalista, indie rock, cloud rap, witch house y chillwave.',
    },
    {
      name: 'Dua Lipa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DuaLipaO2020522_%28101_of_110%29_%2852052470251%29_%28cropped%29.jpg/220px-DuaLipaO2020522_%28101_of_110%29_%2852052470251%29_%28cropped%29.jpg',
    description: 'Dua Lipa es una cantante, compositora y modelo angloalbanesa. ',
    },
    {
      name: 'Perl Jam',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/PearlJam-Oakland-2013.JPG/300px-PearlJam-Oakland-2013.JPG',
    description: 'Pearl Jam es un grupo de grunge formado en Seattle, Estados Unidos, en el año 1990, con integrantes de las bandas Mother Love Bone y Temple of the Dog.Junto a Nirvana, Alice in Chains, Stone Temple Pilots y Soundgarden están considerados como una de las bandas más grandes e influyentes de toda la escena del movimiento Grunge.',
    },
    {
      name: 'Maneskin',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Maneskin_2018.jpg/300px-Maneskin_2018.jpg',
    description: 'Måneskin (del danés; «luz de la luna») es una banda italiana formada en 2016 en Roma. ',
    },
    {
      name: 'The Killers',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/KillersBrixton120917-47.jpg/280px-KillersBrixton120917-47.jpg',
    description: 'The Killers es una banda de indie rock estadounidense formada en 2001 en Las Vegas (Nevada) por el vocalista, teclista y bajista Brandon Flowers y el guitarrista Dave Keuning.',
    },
    {
      name: 'Massive Attack',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Massive_Attack_composite.jpg/250px-Massive_Attack_composite.jpg",
    description: 'Massive Attack es un grupo musical formado en la ciudad portuaria de Bristol, Inglaterra. Considerados como los padres del denominado trip hop, pese a que siempre han renegado de esa etiqueta, este estilo puede clasificarse como hip hop experimental, aunque combina elementos del dub, jazz, soul, música alternativa, y contando con una potente influencia de la música electrónica en sus vertientes más oscuras',
    },
    {
      name: 'Grace Jones',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Grace_Jones_at_Carriageworks_%28Vivid%29_-_1st_June_2015_08.jpg/250px-Grace_Jones_at_Carriageworks_%28Vivid%29_-_1st_June_2015_08.jpg',
    description: 'Grace Beverly Jones es una cantante, compositora, modelo, productora y actriz jamaiquinoestadounidense.',
    },
    {
      name: 'Residente',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Rene_Perez_Residente_2.jpg/250px-Rene_Perez_Residente_2.jpg',
    description: 'René Pérez Joglar, conocido artísticamente como Residente, es un cantante, compositor, productor discográfico y activista puertorriqueño. Su música alberga principalmente estilos como el hiphop, el reguetón o de música del mundo. El contenido de sus letras comúnmente están relacionados con temas sociales, políticos o contingentes.',
    },
    {
      name: 'Hot Chip',
    img: 'https://stoneyroads.com/wp-content/uploads/2019/06/Hot-Chip-1200x630.jpg',
    description: 'Hot Chip es una banda británica de indietronica. La banda se formó en el año 2000. El grupo también destaca por sus actuaciones en vivo y sus remixes de otros temas.',
    },
    {
      name: 'Avril Lavigne',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Avril_Lavigne_performing_at_Caesars_Windsor%2C_2022-05-12_01.jpg/220px-Avril_Lavigne_performing_at_Caesars_Windsor%2C_2022-05-12_01.jpg',
    description: 'Avril Ramona Lavigne, es una cantante y compositora canadiense de pop punk. Críticos de revistas como Billboard la denominan «la Princesa del Pop Punk».',
    },
    {
      name: 'The Smashing Pumpkins',
    img: 'https://rock4spain.com/wp-content/uploads/2017/11/smashingpumpkinsog.jpg',
    description: 'The Smashing Pumpkins es una banda estadounidense de rock alternativo formada en Chicago en 1988. Fundada en un inicio por el vocalista Billy Corgan (voz, guitarra) y James Iha (guitarra)',
    },
    {
      name: 'Amaral',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Amaral_-_La_Marea.jpg/250px-Amaral_-_La_Marea.jpg',
    description: 'Amaral es un grupo musical español de pop rock y rock originario de Zaragoza formado por Eva Amaral y Juan Aguirre',
    },
    {
      name: 'Aitana',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Aitana_Madrid2.jpg/220px-Aitana_Madrid2.jpg',
    description: 'Aitana Ocaña Morales, conocida simplemente como Aitana, es una cantante, compositora, actriz y disc-jockey española. Se dio a conocer a raíz de su participación en la novena edición del talent show español Operación Triunfo (2017), donde obtuvo el segundo puesto',
    },
    {
      name: 'Yandel',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Yandel2_%28cropped%29.jpg/220px-Yandel2_%28cropped%29.jpg',
    description: 'Llandel Veguilla Malavé, conocido artísticamente como Yandel, es un cantante, compositor y productor musical puertorriqueño. También es conocido por formar parte del dúo Wisin & Yandel.',
    },
    {
      name: 'Lola Indigo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mimi_Doblas_con_sam_vazquez_biskaia_arena_24-6-18.jpg/220px-Mimi_Doblas_con_sam_vazquez_biskaia_arena_24-6-18.jpg',
    description: 'Miriam Doblas Muñoz, conocida como Lola Índigo, es una cantante y bailarina española, que saltó a la fama después de concursar en OT 2017, alcanzando en su primer sencillo post-concurso doble certificación de platino. Desde ese momento es una de las personas españolas más escuchadas globalmente con éxitos que superan las más de 250 millones de reproducciones.',
    },
    {
      name: 'Pixies',
    img: "https://happymag.tv/wp-content/uploads/2019/08/pixies-3.jpg",
    description: "Pixies es una banda de rock alternativo formada en 1986 en la ciudad de Boston, Estados Unidos. El grupo se desintegró en 1993, pero se reunió nuevamente en 2004. Fue una de las bandas más influyentes del rock alternativo",
    },
    {
      name: 'Mikel Izal',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Izal_3.jpg/300px-Izal_3.jpg",
    description: "IZAL fue un grupo de música indie pop español que estaba formado por Mikel Izal (vocalista y compositor), encabezando una formación que completaban Alejandro Jordá (batería), Emanuel Pérez «Gato» (bajo), Alberto Pérez (guitarras) e Iván Mella (teclados). Se originó en la ciudad de Madrid en 2010."
  },
    {
      name: 'The Offspring',
    img: 'http://images5.fanpop.com/image/photos/29200000/The-Offspring-the-offspring-29252472-1280-800.jpg',
    description: "The Offspring es una banda de punk rock estadounidense, formada en Huntington Beach, California, en 1984 bajo el nombre de Manic Subsidal. La banda ha sido una de las más influyentes en el resurgir del punk en la escena mainstream, abanderando la escena californiana de dichos géneros junto a Bad Religion, Rancid y NOFX a comienzos y mediados de los años 1990",
},
    {
      name: 'Fall Out Boy',
    img: "https://wallsdesk.com/wp-content/uploads/2016/11/fall-out-boy-Wallpaper-.jpg",
    description: "Fall Out Boy es una banda de rock estadounidense formada en Wilmette, Illinois, un suburbio de Chicago, en 2001. La banda se originó en la escena de hardcore punk de Chicago y fue formada por Wentz y Trohman como un proyecto paralelo de pop punk; Stump se unió poco después."
    },
    {
      name: 'Limp Bizkit',
    img: "https://www.nme.com/wp-content/uploads/2023/12/limp-bizkit-fred-durst-jim-dyson.jpg", 
    description:"Limp Bizkit es una banda estadounidense de nu metal y rap metal formada en la ciudad de Jacksonville, Florida, en 1994. Sus creadores fueron el líder y vocalista Fred Durst y el bajista Sam Rivers. La banda ha vendido hasta la fecha más de 40 millones de copias en todo el mundo."
    }
  ];
  
  module.exports = artistEvents;