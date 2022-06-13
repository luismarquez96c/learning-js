//API MEDIA ELEMENT: https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement

class MediaPlayer {

    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor({ el , plugins = [] }) {
        this.media = el;
        this.plugins = plugins;
        this.initPlayer();
        this.initPlugins();
    }
    
    private initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode?.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    togglePlay() {
        this.media.paused
            ? this.play()
            : this.pause();
    }
    toggleMute() {
        this.media.muted
            ? this.unmute()
            : this.mute();
    }
}


export default MediaPlayer;