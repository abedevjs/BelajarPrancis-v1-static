'use strict';


const audioPlayer = document.createElement('audio');

const descBox = document.querySelector('.description');

const waveSVG = document.querySelector('.waveSVG');
const waveStatus = document.querySelector('.waveStatus');
const waveTitle = document.querySelector('.waveTitle');
const waveEbook = document.querySelector('.waveEbook');
const ebookLink = document.getElementById('ebookLink');

const digit__current = document.querySelector('.slider__current');
const slider__seek = document.querySelector('.slider__seek');
const volume__seek = document.querySelector('.volume__seek');
const digit__total = document.querySelector('.slider__total');

const btn__random = document.querySelector('.track__random');
const btn__prev = document.querySelector('.track__prev');
const btn__playpause = document.querySelector('.track__playpause');
const btn__next = document.querySelector('.track__next');
const btn__repeat = document.querySelector('.track__repeat');



const markupPlay = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor"
    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z" />
</svg>`
const markupPause = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
<path fill="currentColor"
    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z" />
</svg>`;

const markupRandom = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor"
    d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596l53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551l53.333-57.143l-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z" />
</svg>`;
const markupSequence = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<path fill="currentColor" d="M3 5h18v4H3V5m0 5h18v4H3v-4m0 5h18v4H3v-4Z" />
</svg>`;

const musicList = [
    {
        episode: 'Episode 1',
        music: 'https://anchor.fm/s/172a4088/podcast/play/11253582/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-2-19%2F57460555-44100-2-69dd4d8999ac5.mp3',
        ebook: 'https://drive.google.com/file/d/1B8wIJyoegXH8zz-JwMOETbOV1zFeF8D_/view?usp=sharing'
    },
    {
        episode: 'Episode 2',
        music: 'https://anchor.fm/s/172a4088/podcast/play/11841741/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-3-1%2F60737975-44100-2-24a58704ac0b5.mp3',
        ebook: 'https://drive.google.com/file/d/1RarugxEQYrakKO1OlgsG3jeUI6k5lovZ/view?usp=sharing'
    },
    {
        episode: 'Episode 3',
        music: 'https://anchor.fm/s/172a4088/podcast/play/12138635/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-3-7%2F62592672-44100-2-1b9fd464458b3.mp3',
        ebook: 'https://drive.google.com/file/d/19DQAyT59oNZ4DLryscJdoRqmX6auPQH3/view?usp=sharing'
    },
    {
        episode: 'Episode 4',
        music: 'https://anchor.fm/s/172a4088/podcast/play/12405800/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-3-14%2F64422689-44100-2-bbed460c5523e.mp3',
        ebook: 'https://drive.google.com/file/d/1oJHnft3Jic8SxRUyWcC07KHc7Ulsk2hy/view?usp=sharing'
    },
    {
        episode: 'Episode 5',
        music: 'https://anchor.fm/s/172a4088/podcast/play/12716799/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-3-21%2F66355756-44100-2-4bba22b405db.mp3',
        ebook: 'https://drive.google.com/file/d/11GceJFlQQUgvwaGpE9BU0YCRXNXcC_Xb/view?usp=sharing'
    },
    {
        episode: 'Episode 6',
        music: 'https://anchor.fm/s/172a4088/podcast/play/13020401/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-3-28%2F68354259-44100-1-037bee3b78a75.mp3',
        ebook: 'https://drive.google.com/file/d/1gy7pooz5PGmUaBUYKW-lBvthX4X7Syjv/view?usp=sharing'
    },
    {
        episode: 'Episode 7',
        music: 'https://anchor.fm/s/172a4088/podcast/play/13313756/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-4-5%2F70335206-44100-1-11b3e05f2888f.mp3',
        ebook: 'https://drive.google.com/file/d/1kylz4duwylZYY1L4P_Izf1-DUyzOhnpI/view?usp=sharing'
    },
    {
        episode: 'Episode 8',
        music: 'https://anchor.fm/s/172a4088/podcast/play/13631340/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-4-12%2F72386344-44100-1-ae21d8c8d6235.mp3',
        ebook: 'https://drive.google.com/file/d/1AcK2QYZHHTk5NZq83sWxhVFnz7x1X5gZ/view?usp=sharing'
    },
    {
        episode: 'Episode 9',
        music: 'https://anchor.fm/s/172a4088/podcast/play/13976084/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-4-19%2F74641357-44100-1-bdd16bcda36fb.mp3',
        ebook: 'https://drive.google.com/file/d/18-mQ_DSrNUgQRkL2JdxGoA-ews97-GxB/view?usp=sharing'
    },
    {
        episode: 'Episode 10',
        music: 'https://anchor.fm/s/172a4088/podcast/play/14292612/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-4-26%2F76677619-44100-1-a3c71b72d143.mp3',
        ebook: 'https://drive.google.com/file/d/1_kmkAMb4LdHZm-u151Q1iuvR6QySj4wk/view?usp=sharing'
    },
    {
        episode: 'Episode 11',
        music: 'https://anchor.fm/s/172a4088/podcast/play/14632379/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-2%2F78842379-44100-1-1886f4bffd7cc.mp3',
        ebook: 'https://drive.google.com/file/d/1DhZqZy1MEzgjBWRU7AfctFp9y4XTynhU/view?usp=sharing'
    },
    {
        episode: 'Episode 12',
        music: 'https://anchor.fm/s/172a4088/podcast/play/14940433/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-9%2F80756883-44100-1-b376b547b62fe.mp3',
        ebook: 'https://drive.google.com/file/d/1DPUgGwKo8VxshL18Hu3_bLSJziFuFbDp/view?usp=sharing'
    },
    {
        episode: 'Episode 13',
        music: 'https://anchor.fm/s/172a4088/podcast/play/15252623/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-16%2F82654361-44100-1-44c535a15a9fa.mp3',
        ebook: 'https://drive.google.com/file/d/1-HcVcigZdp8YtV5YoEHVcpGpx5w9LzUP/view?usp=sharing'
    },
    {
        episode: 'Episode 14',
        music: 'https://anchor.fm/s/172a4088/podcast/play/15578132/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-23%2F84562813-44100-1-a1bec3a615e4c.mp3',
        ebook: 'https://drive.google.com/file/d/10Z2BZzGZUB-EUrCmyz8Dzg3EppSwwUFi/view?usp=sharing'
    },
    {
        episode: 'Episode 15',
        music: 'https://anchor.fm/s/172a4088/podcast/play/15907700/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fproduction%2F2020-5-30%2F86422850-44100-1-e368d4e9b42e3.mp3',
        ebook: 'https://drive.google.com/file/d/1-hkL36lVkydcjKzgQYfyywFzcYiTNw2z/view?usp=sharing'
    },
    {
        episode: 'Episode 16',
        music: 'https://anchor.fm/s/172a4088/podcast/play/16553102/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-6-14%2Fc0baa00f-11a8-fa9d-c784-0517f3c91dd4.mp3',
        ebook: 'https://drive.google.com/file/d/1ZE0l8rKNuVNobiXAQMah-UosPbyE63LE/view?usp=sharing'
    },
    {
        episode: 'Episode 17',
        music: 'https://anchor.fm/s/172a4088/podcast/play/16904993/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-6-21%2F9b2a74b7-3773-f006-f6fb-d43a1ea95438.mp3',
        ebook: 'https://drive.google.com/file/d/1tHUEu3xlbdWZwaKIwh_X3_aMyFtWaIge/view?usp=sharing'
    },
    {
        episode: 'Episode 18',
        music: 'https://anchor.fm/s/172a4088/podcast/play/17248866/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-6-29%2Fed9c0b28-9e5f-32dc-cb7f-b2700d8743e0.mp3',
        ebook: 'https://drive.google.com/file/d/1r7cGE-wqlneUM-9DRYL87k4NpXbP-cr1/view?usp=sharing'
    },
    {
        episode: 'Episode 19',
        music: 'https://anchor.fm/s/172a4088/podcast/play/17531618/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-7-4%2F99bb2529-8acb-94bd-3490-b4e8f872aab2.mp3',
        ebook: 'https://drive.google.com/file/d/16EVCrrCoCYVc2ZaVwxaHQftMrG3Tg9iB/view?usp=sharing'
    },
    {
        episode: 'Episode 20',
        music: 'https://anchor.fm/s/172a4088/podcast/play/17929545/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-7-12%2F44038d7a-6b9c-2037-171b-26404e80943e.mp3',
        ebook: 'https://drive.google.com/file/d/1s99PBnLD5u92Sy6F5QZTm_N1rjn382kz/view?usp=sharing'
    },
    // {
    //     episode: 'Episode 21',
    //     music: '',
    //     ebook: ''
    // },
    // {
    //     episode: 'Episode 22',
    //     music: '',
    //     ebook: ''
    // },
    // {
    //     episode: 'Episode 23',
    //     music: '',
    //     ebook: ''
    // },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////
class Boxes {
    constructor() {
        this.boxes = document.querySelectorAll('.description__container');
        this.classActive = 'description__container--active'
    }

    activateEpisode() {
        const episodeNumber = mp3Player.getTrackNumber();
        const descriptionBox = document.querySelector(`.description__container--${episodeNumber}`);

        this.disactivateEpisode();

        descriptionBox.classList.add(this.classActive);
    }

    disactivateEpisode() {

        this.boxes.forEach((box) => {
            box.classList.remove(this.classActive)
        })
    }

    playEpisode(n) {
        mp3Player.loadTrack(n);
        mp3Player.playTrack();
    }


}

class Player {
    constructor() {
        this.trackNumber;
        this.updateTimer;

        this.isPlaying = false;
        this.isRandom = false;
    };

    loadTrack(n) {
        this.trackNumber = n;
        clearInterval(this.updateTimer);
        this.reset();

        audioPlayer.src = musicList[this.trackNumber].music;
        audioPlayer.load();

        this.updateTimer = setInterval(this.setUpdate, 1000);
    }

    playPause() {
        this.isPlaying ? this.pauseTrack() : this.playTrack();
    }

    playTrack() {
        audioPlayer.play();
        this.isPlaying = true;

        waveSVG.classList.add('rotate');
        waveTitle.textContent = waveEbook.textContent = `${musicList[this.trackNumber].episode}`;
        waveStatus.textContent = 'Playing...';
        let ebook = `${musicList[this.trackNumber].ebook}`
        ebookLink.href = ebook;

        btn__playpause.innerHTML = markupPause;
        episode.activateEpisode();

    };

    pauseTrack() {
        audioPlayer.pause();
        this.isPlaying = false;

        waveSVG.classList.remove('rotate');
        waveStatus.textContent = 'Paused';

        btn__playpause.innerHTML = markupPlay;
    };

    nextTrack() {
        if (this.isPlaying === false) return;

        if (this.trackNumber < musicList.length - 1 && this.isRandom === false) this.trackNumber += 1;
        else if (this.trackNumber < musicList.length - 1 && this.isRandom === true) this.trackNumber = Number.parseInt(Math.random() * musicList.length);
        else this.trackNumber = 0;

        this.loadTrack(this.trackNumber);
        this.playTrack();
    }

    prevTrack() {
        if (this.isPlaying === false) return;

        if (this.trackNumber > 0) this.trackNumber -= 1;
        else this.trackNumber = musicList.length - 1;

        this.loadTrack(this.trackNumber);
        this.playTrack();
    }

    repeatTrack() {
        this.loadTrack(this.trackNumber);
        this.playTrack();
        episode.activateEpisode();
    }

    randomTrack() {
        this.isRandom ? this.playSequent() : this.playRandom();
    }

    playSequent() {
        this.isRandom = false;
        btn__random.innerHTML = markupSequence;
    }

    playRandom() {
        this.isRandom = true;
        btn__random.innerHTML = markupRandom;
    }

    reset() {
        digit__current.textContent = '00:00';
        digit__total.textContent = '00:00';
        slider__seek.value = 0;
    }

    seekTo() {
        let seekto = audioPlayer.duration * (slider__seek.value / 100);
        audioPlayer.currentTime = seekto;
    }

    setVolume() {
        audioPlayer.volume = volume__seek.value / 100;
    }

    setUpdate() {
        let seekPosition = 0;
        if (!isNaN(audioPlayer.duration)) {
            seekPosition = audioPlayer.currentTime * (100 / audioPlayer.duration);
            slider__seek.value = seekPosition;

            let currentMinutes = Math.floor(audioPlayer.currentTime / 60);
            let currentSeconds = Math.floor(audioPlayer.currentTime - currentMinutes * 60);
            let durationMinutes = Math.floor(audioPlayer.duration / 60);
            let durationSeconds = Math.floor(audioPlayer.duration - durationMinutes * 60);

            if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
            if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
            if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
            if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

            digit__current.textContent = currentMinutes + ":" + currentSeconds;
            digit__total.textContent = durationMinutes + ":" + durationSeconds;
        }
    }

    getTrackNumber() {
        return this.trackNumber + 1;
    }
};

const mp3Player = new Player();
const episode = new Boxes();

mp3Player.loadTrack(Math.floor(Math.random() * musicList.length + 1));
// mp3Player.loadTrack(Math.floor(0));
audioPlayer.addEventListener('ended', () => {
    mp3Player.loadTrack(mp3Player.trackNumber);
    mp3Player.nextTrack();
});

descBox.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target.closest('.description__container');
    episode.playEpisode(target.dataset.episode - 1);
})

btn__playpause.addEventListener('click', () => {
    mp3Player.playPause();
});

btn__next.addEventListener('click', () => {
    mp3Player.nextTrack();
});

btn__prev.addEventListener('click', () => {
    mp3Player.prevTrack();
})

btn__repeat.addEventListener('click', () => {
    mp3Player.repeatTrack();
})

btn__random.addEventListener('click', () => {
    mp3Player.randomTrack();
})

volume__seek.addEventListener('click', () => {
    mp3Player.setVolume();
})

slider__seek.addEventListener('click', () => {
    mp3Player.seekTo();
});

///////////////////////////////////////////////////////////////////////////////////////////
//!GOOGLE SRIPT for sending Contact Form to my Spread Sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbw94sQoZCs0rZfLU-TdmruvNrnA9PtT3oasPvWnZyM3GQsLzH5r9VBAHDwFkGuOMjfL/exec'
const form = document.forms['prancis-wa-grup']
const inputNama = document.querySelector('.inputNama');
const inputTelpon = document.querySelector('.inputTelpon');
const mediaRightLink = document.querySelector('.mediaRight__link');
// const sectionMedia = document.getElementById('section-media');

// sectionMedia.scrollIntoView({ behavior: "smooth" });

mediaRightLink.addEventListener('click', (e) => {
    e.preventDefault();
});

const hideAlert = () => {
    const el = document.querySelector('.alert');

    if (el) el.parentElement.removeChild(el);
};

const showAlert = (type, msg) => {//Alert klo usr salah kasi msuk pass
    hideAlert();

    const markup = `<div class="alert alert--${type}">${msg}</div>`;

    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

    window.setTimeout(hideAlert, 5000);//hide alert after 5sec
};

form.addEventListener('submit', e => {
    e.preventDefault();


    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) return showAlert('success', 'Pesan terkirim 😃');
        })
        .catch(error => {
            return showAlert('error', 'Pesan tidak terkirim 😕, coba beberapa saat lagi!')
        })

    inputNama.value = inputTelpon.value = '';
});