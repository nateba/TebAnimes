const dicionario = {
    1735: "narutinpng.png",
    1535: "deathpng.png",
    31964: "bokupng.png",
    22535: "parasytepng.png",
    21: "zoropng.png",
    44511: "chainsawpng.png",
    11061: "hxhpng.png",
    35507: "ayapng.png",
    36098: "pancreaspng.png",
    40748: "sukunapng.png",
    32281: "your2png.png",
    31043: "erasedpng.png",
    28851: "silenciopng.png",
    34498: "firepng.png",
    38000: "demonpng (2).png",
    42249: "tokyopng.png",
    16498: "titanpng.png",
    38826: "weatherpng.png",
    52211: "mashepng.png",
    37779: "neverpng.png",
};

let listaAnimes = [1735, 1535, 31964, 21, 22535, 16498, 38000, 42249, 35507, 44511, 31043, 40748, 11061, 32281, 38826, 36098, 28851, 34498, 52211, 37779];

let cards = '';

const promises = listaAnimes.map(id => {
    return fetch(`https://api.jikan.moe/v4/anime/${id}`)
        .then(response => response.json());
});

Promise.all(promises)
    .then(resultados => {
        resultados.forEach((retorno, i) => {
            let imgPng = dicionario[listaAnimes[i]] || '';
            let animeId = listaAnimes[i];

            cards += construirCard(retorno, imgPng, animeId);


            if (i === listaAnimes.length - 1) {
                document.getElementById('tela').innerHTML = cards;
            }
        });
    })
    .catch(erro => {
        console.error(erro);
    });

function construirCard(retorno, imgPng, animeId) {
    let genres = retorno.data.genres.map(genre => genre.name).join(', ');
    let episodes = retorno.data.episodes || 'Em andamento';

    let card = "";

    if (retorno.data.genres.length == 1) {
        cards += `<a href="https://myanimelist.net/anime/${retorno.data.mal_id}"><section>
<div class="card1">
<div class="wrapper">
    <img src="${retorno.data.images.jpg.large_image_url}" class="cover-image" />
    <div class="overlay"></div>
</div>
<h1>
    <p class="nota">${retorno.data.score}</p>
</h1>
<img class="title" src="./images/estrela.png" alt="">
<h1 class="infosAnime">${retorno.data.title_english}</h1>
<p class="infosAnime3"> ${retorno.data.genres[0].name}</p>
<p class="infosAnime2">Eps: ${retorno.data.episodes} <i class="fa-solid fa-film"></i> </p>
<img src="images/${imgPng}" class="character" />
</div>
</section></a>`;
    } else if (retorno.data.genres.length == 2) {
        cards += `<a href="https://myanimelist.net/anime/${retorno.data.mal_id}"><section>
<div class="card1">
<div class="wrapper">
    <img src="${retorno.data.images.jpg.large_image_url}" class="cover-image" />
    <div class="overlay"></div>
</div>

<h1>
    <p class="nota">${retorno.data.score}</p>
</h1>
<img class="title" src="./images/estrela.png" alt="">
<h1 class="infosAnime">${retorno.data.title_english}</h1>
<p class="infosAnime3"> ${retorno.data.genres[0].name}, ${retorno.data.genres[1].name} </p>
<p class="infosAnime2">Eps: ${retorno.data.episodes} <i class="fa-solid fa-film"></i></p>
<img src="images/${imgPng}" class="character" />
</div>
</section></a>`;
    }
    if (animeId === 38000) {
        card += `<a href="https://myanimelist.net/anime/${retorno.data.mal_id}"><section>
<div class="card1">
<div class="wrapper">
    <img src="${retorno.data.images.jpg.large_image_url}" class="cover-image" />
    <div class="overlay"></div>
</div>
<h1>
    <p class="nota">${retorno.data.score}</p>
</h1>
<img class="title" src="./images/estrela.png" alt="">
<h1 class="infosAnime">${retorno.data.title}</h1>
<p class="infosAnime3"> ${retorno.data.genres[0].name}</p>
<p class="infosAnime2">Eps: ${retorno.data.episodes} <i class="fa-solid fa-film"></i></p>
<img src="images/${imgPng}" class="character" />
</div>
</section></a>`;
    } else if (animeId === 32281) {
        card += `<a href="https://myanimelist.net/anime/${retorno.data.mal_id}"><section>
<div class="card1">
<div class="wrapper">
    <img src="${retorno.data.images.jpg.large_image_url}" class="cover-image" />
    <div class="overlay"></div>
</div>
<h1>
    <p class="nota">${retorno.data.score}</p>
</h1>
<img class="title" src="./images/estrela.png" alt="">
<h1 class="infosAnime">${retorno.data.title}</h1>
<p class="infosAnime3"> ${retorno.data.genres[0].name}, ${retorno.data.genres[1].name}</p>
<p class="infosAnime2">Eps: ${retorno.data.episodes} <i class="fa-solid fa-film"></i></p>
<img src="images/${imgPng}" class="character" />
</div>
</section></a>`;
    } else if (animeId === 16498) {
        card += `<a href="https://myanimelist.net/anime/${retorno.data.mal_id}"><section>
<div class="card1">
<div class="wrapper">
    <img src="${retorno.data.images.jpg.large_image_url}" class="cover-image" />
    <div class="overlay"></div>
</div>
<h1>
    <p class="nota">${retorno.data.score}</p>
</h1>
<img class="title" src="./images/estrela.png" alt="">
<h1 class="infosAnime">${retorno.data.title}</h1>
<p class="infosAnime3"> ${retorno.data.genres[0].name}, ${retorno.data.genres[1].name},
    ${retorno.data.genres[2].name}</p>
<p class="infosAnime2">Eps: ${retorno.data.episodes} <i class="fa-solid fa-film"></i></p>
<img src="images/${imgPng}" class="character" />
</div>
</section></a>`;
    } else if (animeId === 38826) {
        card += `<a href="https://myanimelist.net/anime/${retorno.data.mal_id}">
            <section>
<div class="card1">
<div class="wrapper">
    <img src="${retorno.data.images.jpg.large_image_url}" class="cover-image" />
    <div class="overlay"></div>
</div>
<h1>
    <p class="nota">${retorno.data.score}</p>
</h1>
<img class="title" src="./images/estrela.png" alt="">
<h1 class="infosAnime">${retorno.data.title}</h1>
<p class="infosAnime3"> ${retorno.data.genres[0].name}, ${retorno.data.genres[1].name},
    ${retorno.data.genres[2].name}</p>
<p class="infosAnime2">Eps: ${retorno.data.episodes} <i class="fa-solid fa-film"></i></p>
<img src="images/${imgPng}" class="character" />
</div>
</section></a>`;
    } else {
        card += `<a href="https://myanimelist.net/anime/${retorno.data.mal_id}">
<section>
<div class="card1">
    <div class="wrapper">
        <img src="${retorno.data.images.jpg.large_image_url}" class="cover-image" />
        <div class="overlay"></div>
    </div>
    <h1><p class="nota">${retorno.data.score}</p></h1>
    <img class="title" src="./images/estrela.png" alt="">
    <h1 class="infosAnime">${retorno.data.title_english || retorno.data.title}</h1>
    <p class="infosAnime3">${genres}</p>
    <p class="infosAnime2">Eps: ${episodes} <i class="fa-solid fa-film"></i></p>
    <img src="images/${imgPng}" class="character" />
</div>
</section>
</a>`;
    }

    return card;
}




