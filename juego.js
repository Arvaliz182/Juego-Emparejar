let nivelActual;
let modoJuego = false; // Variable para controlar si está en Modo Juego
let erroresPermitidos;
let erroresActuales = 0;

// Arrays de pares para cada nivel
let paresNivel1 = [
    // Pares del nivel 1
    {
        termino: "Derivada",
        definicion: "Límite del cociente incremental cuando h tiende a cero."
    },
    {
        termino: "Continuidad",
        definicion: "Una función es continua en un punto si es derivable allí."
    },
    {
        termino: "Punto Crítico",
        definicion: "Punto donde la derivada es cero o no existe."
    },
    {
        termino: "Regla de la Cadena",
        definicion: "Método para derivar funciones compuestas."
    },
    {
        termino: "Teorema de Rolle",
        definicion: "Si f(a) = f(b), existe c donde f'(c) = 0."
    },
    {
        termino: "Máximo Local",
        definicion: "Valor más alto de una función en un intervalo cercano."
    },
    {
        termino: "Concavidad",
        definicion: "Propiedad que indica si una función es cóncava hacia arriba o hacia abajo."
    },
    {
        termino: "Punto de Inflexión",
        definicion: "Punto donde la concavidad de una función cambia."
    },
    {
        termino: "Derivada de \\( \\sen(x) \\)",
        definicion: "Es igual a \\( \\cos(x) \\)."
    },
    {
        termino: "Derivada de \\( \\cos(x) \\)",
        definicion: "Es igual a \\( -\\sen(x) \\)."
    },
    {
        termino: "Función Creciente",
        definicion: "Función donde al aumentar x, f(x) también aumenta."
    },
    {
        termino: "Función Decreciente",
        definicion: "Función donde al aumentar x, f(x) disminuye."
    },
    {
        termino: "Derivada de \\( e^{x} \\)",
        definicion: "Es igual a \\( e^{x} \\)."
    },
    {
        termino: "Derivada de \\( \\ln(x) \\)",
        definicion: "Es igual a \\( \\dfrac{1}{x} \\)."
    },
    {
        termino: "Criterio de la Primera Derivada",
        definicion: "Sirve para determinar extremos locales analizando f'."
    },
    {
        termino: "Criterio de la Segunda Derivada",
        definicion: "Determina concavidad y puntos de inflexión usando f''."
    },
    {
        termino: "Derivada de una Constante",
        definicion: "Siempre es cero."
    },
    {
        termino: "Función Constante",
        definicion: "Su derivada es cero en todos los puntos."
    },
    {
        termino: "Función Polinómica",
        definicion: "Función formada por sumas y restas de potencias de x."
    },
    {
        termino: "Derivabilidad",
        definicion: "Propiedad de una función que puede ser derivada en un punto."
    }
];

let paresNivel2 = [
    // Nivel 2: Funciones y sus gráficas
    {
        funcion: "\\( f(x) = x^2 \\)",
        grafica: "grafica1.png"
    },
    {
        funcion: "\\( f(x) = \\sen(x) \\)",
        grafica: "grafica2.png"
    },
    {
        funcion: "\\( f(x) = \\cos(x) \\)",
        grafica: "grafica3.png"
    },
    {
        funcion: "\\( f(x) = e^{x} \\)",
        grafica: "grafica4.png"
    },
    {
        funcion: "\\( f(x) = \\ln(x) \\)",
        grafica: "grafica5.png"
    },
    {
        funcion: "\\( f(x) = \\sqrt{x} \\)",
        grafica: "grafica6.png"
    },
    {
        funcion: "\\( f(x) = |x| \\)",
        grafica: "grafica7.png"
    },
    {
        funcion: "\\( f(x) = \\tan(x) \\)",
        grafica: "grafica8.png"
    },
    {
        funcion: "\\( f(x) = \\dfrac{1}{x} \\)",
        grafica: "grafica9.png"
    },
    {
        funcion: "\\( f(x) = \\arctan(x) \\)",
        grafica: "grafica10.png"
    },
    {
        funcion: "\\( f(x) = \\sinh(x) \\)",
        grafica: "grafica11.png"
    },
    {
        funcion: "\\( f(x) = \\cosh(x) \\)",
        grafica: "grafica12.png"
    },
    {
        funcion: "\\( f(x) = x^3 \\)",
        grafica: "grafica13.png"
    },
    {
        funcion: "\\( f(x) = e^{-x} \\)",
        grafica: "grafica14.png"
    },
    {
        funcion: "\\( f(x) = \\ln(-x) \\)",
        grafica: "grafica15.png"
    }
];

let paresNivel3 = [
    // Nivel 3: Funciones y sus puntos críticos
    {
        funcion: "\\( f(x) = x^2 \\)",
        puntosCriticos: "Punto crítico en \\( x = 0 \\)"
    },
    {
        funcion: "\\( f(x) = x^3 - 3x \\)",
        puntosCriticos: "Puntos críticos en \\( x = -1 \\), \\( x = 1 \\)"
    },
    {
        funcion: "\\( f(x) = x^4 - 8x^2 \\)",
        puntosCriticos: "Puntos críticos en \\( x = -2 \\), \\( x = 0 \\), \\( x = 2 \\)"
    },
    {
        funcion: "\\( f(x) = \\dfrac{1}{3}x^3 - x \\)",
        puntosCriticos: "Puntos críticos en \\( x = -1 \\), \\( x = 1 \\)"
    },
    {
        funcion: "\\( f(x) = x^5 - 5x^3 \\)",
        puntosCriticos: "Puntos críticos en \\( x = -1 \\), \\( x = 0 \\), \\( x = 1 \\)"
    },
    {
        funcion: "\\( f(x) = e^{-x^2} \\)",
        puntosCriticos: "Punto crítico en \\( x = 0 \\)"
    },
    {
        funcion: "\\( f(x) = \\ln(x) - x \\)",
        puntosCriticos: "Punto crítico en \\( x = 1 \\)"
    },
    {
        funcion: "\\( f(x) = \\sen(x) \\)",
        puntosCriticos: "Puntos críticos en \\( x = \\dfrac{\\pi}{2} + n\\pi \\), \\( n \\in \\mathbb{Z} \\)"
    },
    {
        funcion: "\\( f(x) = \\cos(x) \\)",
        puntosCriticos: "Puntos críticos en \\( x = n\\pi \\), \\( n \\in \\mathbb{Z} \\)"
    },
    {
        funcion: "\\( f(x) = \\arctan(x) \\)",
        puntosCriticos: "Punto crítico en \\( x = 0 \\)"
    }
];

let paresNivel4 = [
    // Nivel 4: Funciones y sus Series de Taylor
    {
        funcion: "\\( f(x) = e^{x} \\)",
        serieTaylor: "\\( 1 + x + \\dfrac{x^{2}}{2!} + \\dfrac{x^{3}}{3!} + \\dfrac{x^{4}}{4!} + \\cdots \\)"
    },
    {
        funcion: "\\( f(x) = \\sen(x) \\)",
        serieTaylor: "\\( x - \\dfrac{x^{3}}{3!} + \\dfrac{x^{5}}{5!} - \\dfrac{x^{7}}{7!} + \\cdots \\)"
    },
    {
        funcion: "\\( f(x) = \\cos(x) \\)",
        serieTaylor: "\\( 1 - \\dfrac{x^{2}}{2!} + \\dfrac{x^{4}}{4!} - \\dfrac{x^{6}}{6!} + \\cdots \\)"
    },
    {
        funcion: "\\( f(x) = \\ln(1 + x) \\)",
        serieTaylor: "\\( x - \\dfrac{x^{2}}{2} + \\dfrac{x^{3}}{3} - \\dfrac{x^{4}}{4} + \\cdots \\), \\( |x| < 1 \\)"
    },
    {
        funcion: "\\( f(x) = \\dfrac{1}{1 - x} \\)",
        serieTaylor: "\\( 1 + x + x^{2} + x^{3} + x^{4} + \\cdots \\), \\( |x| < 1 \\)"
    },
    {
        funcion: "\\( f(x) = \\arctan(x) \\)",
        serieTaylor: "\\( x - \\dfrac{x^{3}}{3} + \\dfrac{x^{5}}{5} - \\dfrac{x^{7}}{7} + \\cdots \\), \\( |x| \\leq 1 \\)"
    }
];

let totalPares;
let paresRestantes;
let pares;
let elementoArrastrado;

// Función para iniciar el juego
function iniciarJuego(modo) {
    modoJuego = (modo === 'juego');
    document.getElementById('inicio').style.display = 'none';

    if (modoJuego) {
        nivelActual = 1;
        iniciarNivel(nivelActual);
    } else {
        document.getElementById('seleccion-nivel').style.display = 'block';
    }
}

// Función para iniciar un nivel
function iniciarNivel(nivel) {
    nivelActual = nivel;
    document.getElementById('seleccion-nivel').style.display = 'none';
    document.getElementById('juego').style.display = 'block';
    document.getElementById('resultado').textContent = '';
    erroresActuales = 0;

    if (nivelActual === 1) {
        document.getElementById('titulo-nivel').innerText = 'Nivel 1: Términos y Definiciones';
        pares = [...paresNivel1];
        erroresPermitidos = modoJuego ? 15 : Infinity;
        iniciarJuegoNivel1();
    } else if (nivelActual === 2) {
        document.getElementById('titulo-nivel').innerText = 'Nivel 2: Funciones y Gráficas';
        pares = [...paresNivel2];
        erroresPermitidos = modoJuego ? 12 : Infinity;
        iniciarJuegoNivel2();
    } else if (nivelActual === 3) {
        document.getElementById('titulo-nivel').innerText = 'Nivel 3: Funciones y Puntos Críticos';
        pares = [...paresNivel3];
        erroresPermitidos = modoJuego ? 9 : Infinity;
        iniciarJuegoNivel3();
    } else if (nivelActual === 4) {
        document.getElementById('titulo-nivel').innerText = 'Nivel 4: Funciones y Series de Taylor';
        pares = [...paresNivel4];
        erroresPermitidos = modoJuego ? 6 : Infinity;
        iniciarJuegoNivel4();
    }

    actualizarContadorErrores();
}

// Función para actualizar el contador de errores
function actualizarContadorErrores() {
    const contadorErrores = document.getElementById('contador-errores');
    if (erroresPermitidos !== Infinity) {
        contadorErrores.textContent = `Errores: ${erroresActuales}/${erroresPermitidos}`;
    } else {
        contadorErrores.textContent = '';
    }
}

// Función para regresar al inicio
function regresarInicio() {
    document.getElementById('juego').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
    erroresActuales = 0;
    actualizarContadorErrores();
}

// Función para reiniciar el nivel actual
function reiniciarNivel() {
    iniciarNivel(nivelActual);
}

// Funciones para iniciar cada nivel
function iniciarJuegoNivel1() {
    // Lógica del Nivel 1: Términos y Definiciones
    prepararNivel('termino', 'definicion', 'Términos', 'Definiciones');
}

function iniciarJuegoNivel2() {
    // Lógica del Nivel 2: Funciones y Gráficas
    prepararNivel('funcion', 'grafica', 'Funciones', 'Gráficas');
}

function iniciarJuegoNivel3() {
    // Lógica del Nivel 3: Funciones y Puntos Críticos
    prepararNivel('funcion', 'puntosCriticos', 'Funciones', 'Puntos Críticos');
}

function iniciarJuegoNivel4() {
    // Lógica del Nivel 4: Funciones y Series de Taylor
    prepararNivel('funcion', 'serieTaylor', 'Funciones', 'Series de Taylor');
}

// Función para preparar el nivel
function prepararNivel(tipoIzquierdo, tipoDerecho, tituloIzquierdo, tituloDerecho) {
    mezclarArray(pares);

    let elementosIzquierdos = pares.map(par => par[tipoIzquierdo]);
    let elementosDerechos = pares.map(par => par[tipoDerecho]);

    // Mezclar elementos por separado
    mezclarArray(elementosIzquierdos);
    mezclarArray(elementosDerechos);

    totalPares = pares.length;
    paresRestantes = totalPares;

    let contenedorIzquierdo = document.getElementById('contenedor-izquierdo');
    let contenedorDerecho = document.getElementById('contenedor-derecho');

    contenedorIzquierdo.innerHTML = `<h3>${tituloIzquierdo}</h3>`;
    contenedorDerecho.innerHTML = `<h3>${tituloDerecho}</h3>`;

    // Limpiar eventos anteriores
    contenedorIzquierdo.replaceWith(contenedorIzquierdo.cloneNode(true));
    contenedorDerecho.replaceWith(contenedorDerecho.cloneNode(true));

    contenedorIzquierdo = document.getElementById('contenedor-izquierdo');
    contenedorDerecho = document.getElementById('contenedor-derecho');

    elementosIzquierdos.forEach(elemento => {
        let div = document.createElement('div');
        div.classList.add('elemento');
        div.draggable = true;
        div.innerHTML = elemento;
        div.dataset.tipo = tipoIzquierdo;
        div.dataset.id = obtenerIdDesdeContenido(tipoIzquierdo, elemento);
        div.addEventListener('dragstart', dragStart);
        contenedorIzquierdo.appendChild(div);
    });

    elementosDerechos.forEach(elemento => {
        let div = document.createElement('div');
        div.classList.add('elemento');
        div.draggable = true;
        if (tipoDerecho === 'grafica') {
            let img = document.createElement('img');
            img.src = 'imagenes/' + elemento; // Asegúrate de colocar las imágenes en la carpeta 'imagenes'
            img.alt = 'Gráfica de la función';
            div.appendChild(img);
            div.addEventListener('dblclick', toggleImagenSize);
        } else {
            div.innerHTML = elemento;
        }
        div.dataset.tipo = tipoDerecho;
        div.dataset.id = obtenerIdDesdeContenido(tipoDerecho, elemento);
        div.addEventListener('dragstart', dragStart);
        contenedorDerecho.appendChild(div);
    });

    // Añadir eventos de arrastre y soltado
    contenedorIzquierdo.addEventListener('dragover', dragOver);
    contenedorDerecho.addEventListener('dragover', dragOver);
    contenedorIzquierdo.addEventListener('drop', drop);
    contenedorDerecho.addEventListener('drop', drop);

    // Renderizar las expresiones matemáticas con MathJax
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

// Función para obtener un identificador único desde el contenido
function obtenerIdDesdeContenido(tipo, contenido) {
    if (tipo === 'grafica') {
        return contenido; // El nombre del archivo de la gráfica
    } else {
        // Para términos, definiciones, funciones, puntos críticos, serieTaylor
        // Podemos usar el contenido sin espacios y sin caracteres especiales
        return contenido.replace(/\\\(.+?\\\)/g, '').replace(/\s+/g, '').replace(/[^\w]/g, '').toUpperCase();
    }
}

// Función para iniciar el arrastre
function dragStart(e) {
    elementoArrastrado = e.target;
    e.dataTransfer.setData('text/plain', e.target.dataset.id);
    setTimeout(() => {
        e.target.classList.add('dragging');
    }, 0);
}

// Función para permitir el arrastre sobre el contenedor
function dragOver(e) {
    e.preventDefault();
}

// Función para manejar la caída del elemento
function drop(e) {
    e.preventDefault();
    const elementoDestino = e.target.closest('.elemento');

    if (elementoDestino && elementoArrastrado !== elementoDestino) {
        const tipoOrigen = elementoArrastrado.dataset.tipo;
        const tipoDestino = elementoDestino.dataset.tipo;

        const idOrigen = elementoArrastrado.dataset.id;
        const idDestino = elementoDestino.dataset.id;

        if ((tipoOrigen !== tipoDestino)) {

            let parCorrecto = false;

            if (nivelActual === 1) {
                const termino = tipoOrigen === 'termino' ? idOrigen : idDestino;
                const definicion = tipoOrigen === 'definicion' ? idOrigen : idDestino;
                parCorrecto = pares.find(par => obtenerIdDesdeContenido('termino', par.termino) === termino && obtenerIdDesdeContenido('definicion', par.definicion) === definicion);
            } else if (nivelActual === 2) {
                const funcion = tipoOrigen === 'funcion' ? idOrigen : idDestino;
                const grafica = tipoOrigen === 'grafica' ? idOrigen : idDestino;
                parCorrecto = pares.find(par => obtenerIdDesdeContenido('funcion', par.funcion) === funcion && par.grafica === grafica);
            } else if (nivelActual === 3) {
                const funcion = tipoOrigen === 'funcion' ? idOrigen : idDestino;
                const puntosCriticos = tipoOrigen === 'puntosCriticos' ? idOrigen : idDestino;
                parCorrecto = pares.find(par => obtenerIdDesdeContenido('funcion', par.funcion) === funcion && obtenerIdDesdeContenido('puntosCriticos', par.puntosCriticos) === puntosCriticos);
            } else if (nivelActual === 4) {
                const funcion = tipoOrigen === 'funcion' ? idOrigen : idDestino;
                const serieTaylor = tipoOrigen === 'serieTaylor' ? idOrigen : idDestino;
                parCorrecto = pares.find(par => obtenerIdDesdeContenido('funcion', par.funcion) === funcion && obtenerIdDesdeContenido('serieTaylor', par.serieTaylor) === serieTaylor);
            }

            if (parCorrecto) {
                // Eliminar ambos elementos
                elementoArrastrado.remove();
                elementoDestino.remove();

                paresRestantes--;

                if (paresRestantes === 0) {
                    if (modoJuego && nivelActual < 4) {
                        document.getElementById('resultado').textContent = "¡Bien hecho! Avanzas al siguiente nivel.";
                        setTimeout(() => {
                            iniciarNivel(nivelActual + 1);
                        }, 2000);
                    } else if (modoJuego && nivelActual === 4) {
                        document.getElementById('resultado').textContent = "¡Felicidades! Has completado el juego.";
                    } else {
                        document.getElementById('resultado').textContent = "¡Felicidades! Has completado el nivel.";
                    }
                }
            } else {
                // Indicar que el par es incorrecto
                elementoArrastrado.classList.add('elemento-incorrecto');
                elementoDestino.classList.add('elemento-incorrecto');

                setTimeout(() => {
                    elementoArrastrado.classList.remove('elemento-incorrecto');
                    elementoDestino.classList.remove('elemento-incorrecto');
                }, 1000);

                erroresActuales++;
                actualizarContadorErrores();

                if (erroresActuales >= erroresPermitidos) {
                    if (modoJuego) {
                        if (nivelActual > 1) {
                            document.getElementById('resultado').textContent = "Has excedido el número de errores. Regresas al nivel anterior.";
                            setTimeout(() => {
                                iniciarNivel(nivelActual - 1);
                            }, 2000);
                        } else {
                            document.getElementById('resultado').textContent = "Has excedido el número de errores. Regresas al inicio.";
                            setTimeout(() => {
                                regresarInicio();
                            }, 2000);
                        }
                    } else {
                        document.getElementById('resultado').textContent = "Has excedido el número de errores. Reiniciando nivel.";
                        setTimeout(() => {
                            iniciarNivel(nivelActual);
                        }, 2000);
                    }
                }
            }
        }

        if (elementoArrastrado) {
            elementoArrastrado.classList.remove('dragging');
            elementoArrastrado = null;
        }
    }
}
// Función para mostrar las instrucciones
function mostrarInstrucciones() {
    document.getElementById('instrucciones').style.display = 'block';
}

// Función para ocultar las instrucciones
function ocultarInstrucciones() {
    document.getElementById('instrucciones').style.display = 'none';
}

// Función para mostrar los recursos
function mostrarRecursos() {
    document.getElementById('recursos').style.display = 'block';
}

// Función para ocultar los recursos
function ocultarRecursos() {
    document.getElementById('recursos').style.display = 'none';
}

// Función para alternar el tamaño de la imagen de la gráfica
function toggleImagenSize(e) {
    const elemento = e.currentTarget;
    elemento.classList.toggle('expanded');
}

// Función para mezclar un array usando Fisher-Yates
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = getRandomInt(0, i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para obtener un número aleatorio entre min y max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
