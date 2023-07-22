// Funcoes pra tocar os audios quando passa o mouse em cima do animeFav especifico

const audioData = {};

function playSound(audioPath) {
    if (audioData[audioPath]) {
        const { audio, currentTime } = audioData[audioPath];
        audio.currentTime = currentTime;
        audio.play();
    } else {
        const audio = new Audio(audioPath);
        audio.play();
        audioData[audioPath] = { audio, currentTime: 0 };
    }
}

function stopSound(audioPath) {
    if (audioData[audioPath]) {
        const { audio } = audioData[audioPath];
        if (!audio.paused) {
            audioData[audioPath].currentTime = audio.currentTime;
        }
        audio.pause();
    }
}

function updatePlaybackTime(audioPath) {
    if (audioData[audioPath]) {
        const { audio } = audioData[audioPath];
        audioData[audioPath].currentTime = audio.currentTime;
    }
}

const cardsFavs = document.querySelectorAll('.flip-card-container');
cardsFavs.forEach(cardFav => {
    const audioPath = cardFav.getAttribute('data-audiopath');
    cardFav.addEventListener('mouseenter', function () {
        playSound(audioPath);
    });

    // Quando o mouse sair do elemento
    cardFav.addEventListener('mouseleave', function () {
        updatePlaybackTime(audioPath);
        stopSound(audioPath);
    });
})

// card naruto
const fav1 = document.querySelector('.card.current--card');

const audioPath2 = fav1.getAttribute('data-audiopath')
fav1.addEventListener('mouseenter', function () {
    playSound(audioPath2);
});
fav1.addEventListener('mouseleave', function () {
    updatePlaybackTime(audioPath2);
    stopSound(audioPath2);
});
//card death note
const fav2 = document.querySelector('.card.next--card');
const audioPath3 = fav2.getAttribute('data-audiopath')
fav2.addEventListener('mouseenter', function () {
    playSound(audioPath3);
});
fav2.addEventListener('mouseleave', function () {
    updatePlaybackTime(audioPath3);
    stopSound(audioPath3);
});
//card one piece
const fav3 = document.querySelector('.card.previous--card');
console.log(fav3);
const audioPath4 = fav3.getAttribute('data-audiopath')
fav3.addEventListener('mouseenter', function () {
    playSound(audioPath4);
});
fav3.addEventListener('mouseleave', function () {
    updatePlaybackTime(audioPath4);
    stopSound(audioPath4);
});