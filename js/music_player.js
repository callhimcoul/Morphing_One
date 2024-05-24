document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const trackTitle = document.getElementById('track-title');
    const playerWrapper = document.querySelector('.audio-player-wrapper');
    const footer = document.querySelector('footer');

    const tracks = [
        {
            src: "https://audio.jukehost.co.uk/UrmOVAHGZbD8FSbwN4dcF7ANgvOCW1a4",
            title: "A. Kurzak & Vienna Morphing Quintet - F. Cilea"
        },
        {
            src: "https://audio.jukehost.co.uk/utBtC6wJMz2K4qrQ1bIqffG5ZuCg90ZG",
            title: "Arvo Pärt - Fratres"
        },
        {
            src: "https://audio.jukehost.co.uk/GcZ8vEY5YrPQdHSKqDtXTGteiZXfJHUW",
            title: "Astor Piazzolla - Invierno porteño"
        }
    ];
    let currentTrackIndex = 0;

    const loadTrack = (index) => {
        audioPlayer.src = tracks[index].src;
        trackTitle.textContent = tracks[index].title;
        audioPlayer.load();
    };

    const playTrack = () => {
        audioPlayer.play().catch(error => {
            console.error('Playback error:', error);
        });
    };

    document.getElementById('prev-track').addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
        playTrack();
    });

    document.getElementById('next-track').addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
        playTrack();
    });

    loadTrack(currentTrackIndex);

    audioPlayer.addEventListener('play', () => {
        console.log('Playback started!');
    });

    audioPlayer.addEventListener('pause', () => {
        console.log('Playback paused.');
    });

    audioPlayer.addEventListener('ended', () => {
        console.log('Playback ended.');
    });

    audioPlayer.addEventListener('volumechange', () => {
        console.log(`Volume changed to ${audioPlayer.volume}`);
    });

    // Использовать IntersectionObserver для скрытия плеера при достижении футера
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                playerWrapper.classList.add('hidden');
            } else {
                playerWrapper.classList.remove('hidden');
            }
        });
    });

    observer.observe(footer);
});
