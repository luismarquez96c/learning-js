import MediaPlayer from 'luismarquez96c-mediaplayer96c';
import AutoPlay from 'luismarquez96c-mediaplayer96c/lib/plugins/AutoPlay';
import AutoPause from 'luismarquez96c-mediaplayer96c/lib/plugins/AutoPause';
import AdsPlugin from 'luismarquez96c-mediaplayer96c/lib/plugins/adds/index';

const video = document.querySelector('video');
const btnPlay:HTMLElement = document.querySelector('#playButton');
const btnMute:HTMLElement = document.querySelector('#muteButton');

const player = new MediaPlayer({el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
    new AdsPlugin(),
]});

btnPlay.onclick = () => player.togglePlay();
btnMute.onclick = () => player.toggleMute();