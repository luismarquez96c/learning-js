const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const showLog = () => {
    console.group("Reporte");
    console.log("Numero total de elementos: " + reporte.numElements);
    console.log("Numero total de elementos cargados: " + reporte.numRenders);
    console.groupEnd();
}

const completeImageLoad = (event) => {
    reporte.addRender();
    showLog();

    event.target.removeEventListener('load', completeImageLoad);
}

const loadImage = (entry) => {
    
    const container = entry.target;
    // const imagen = container.querySelector('img');
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    
    imagen.src = url;
    observer.unobserve(container);

    if(Boolean(imagen.complete)){
        reporte.addRender();
        showLog();
    }else{
        imagen.addEventListener('load', completeImageLoad)
    }
} 

const observer = new IntersectionObserver( (entries)=>{
    entries
        .filter( isIntersecting )
        .forEach(loadImage)
} );

const reporte = {
    numElements: 0,
    numRenders: 0,
    addElement: function () {
        return ++this.numElements;
    },

    addRender: function () {
        return ++this.numRenders;
    },
    reset: function(){
        this.numElements = 0;
        this.numRenders = 0;
    }
}

export const registerImage = (image) => {
    observer.observe(image);
    reporte.addElement();
    showLog();
}


export const cleanObserver = () => {
    observer.lenght = 0;
}

export const cleanReport = () => {
    reporte.reset();
}