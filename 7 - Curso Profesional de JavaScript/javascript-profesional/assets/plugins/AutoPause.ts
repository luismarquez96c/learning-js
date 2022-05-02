import MediaPlayer from "../MediaPlayer";

class AutoPause {

    private threshold: number;
    private player: MediaPlayer;

    constructor(){
        this.threshold = 0.25;//UMBRAL
        this.player = null;
        this.handlerIntersection = this.handlerIntersection.bind(this)
    }

    run (player){
        this.player = player;

        //El observer recibe el manejador cuando se cruce el umbral y también
        //un objeto configuración
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,//configurando umbra
            //también se puede configurar el ancestro del elemento observado
        });

        observer.observe(player.media);//Registrando objeto observado
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]) {//entries solo contiene el unico objeto observado
        const entry = entries[0];
        const isVisible = entry.intersectionRatio > this.threshold;

        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }

    }
}

export default AutoPause;