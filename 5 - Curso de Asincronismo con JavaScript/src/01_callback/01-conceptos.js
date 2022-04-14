1. Memoria heap: espacio de memoria compartido para toda la aplicación.Memoria
2. Pila de ejecución: pila donde las funciones se ponen en ejecución.Memoria
3. Event loop: se encarga de gestionar todo. Pregunta si la pila de ejecución está vacía para 
    entonces resolver las funciones que están en la cola de tareas (pasarlas a ejecución).
4. Cola de tareas: son las tareas asincronas que han sido encoladas.

Cómo recomendación se tiene que no se deben de crear funciones muy pesadas que puedan saturar
la pila de ejecución y por ende impedir que se llegue a resolver los procesos de la cola de tareas.Cola

5. Listado de APIS públicas: https://github.com/public-apis/public-apis

