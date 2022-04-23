import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video');
const btnPlay = document.querySelector('#playButton');
const btnMute = document.querySelector('#muteButton');

const player = new MediaPlayer({el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
]});

btnPlay.onclick = () => player.togglePlay();
btnMute.onclick = () => player.toggleMute();