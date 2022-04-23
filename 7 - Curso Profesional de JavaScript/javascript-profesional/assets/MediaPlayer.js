//API MEDIA ELEMENT: https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement

function MediaPlayer({el, plugins = []}) {
    this.media = el;
    this.plugins = plugins;

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {

    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted(){
            return this.media.muted;
        },
        set muted(val){
            this.media.muted = Boolean(val);
        }
        
    }

    this.plugins.forEach( plugin => {
        plugin.run(player);
    } )
}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}

MediaPlayer.prototype.togglePlay = function () {
    this.media.paused
        ? this.play()
        : this.pause();
}

MediaPlayer.prototype.toggleMute = function () {
    this.media.muted
        ? this.unmute()
        : this.mute();
}

export default MediaPlayer;