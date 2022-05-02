import MediaPlayer from "./MediaPlayer";
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const btnPlay:HTMLElement = document.querySelector('#playButton');
const btnMute:HTMLElement = document.querySelector('#muteButton');

const player = new MediaPlayer({el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
]});

btnPlay.onclick = () => player.togglePlay();
btnMute.onclick = () => player.toggleMute();