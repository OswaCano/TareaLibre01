
const muscleGroup = document.getElementById('muscle-group');
const routine = document.querySelector(".routine");
const links = document.querySelector(".links");
const generate = document.querySelector(".gymSubmit");

function getRoutine() {

    const selectedMuscle = muscleGroup.value;

    routine.innerHTML = '';
    links.innerHTML = '';

    // Cambio // crear un objeto por musculo

    const pushRoutine = [
        {
        exercise: "Press Inclinado con mancuerna",
        text: "4 series subiendo peso," +
            "primera serie 15 repeticiones, segunda 12 repeticiones, tercera 10 repeticiones, cuarta 6-8 repeticiones.",
        image: "img/pressInclinado.png",
        link: "https://example.com/pecho-link",
        },
        {
        exercise: "Press plano con barra",
        text: "3 series mismo peso moderado," +
            "10 repeticiones por serie, cada repeticion bajas en 4 segundos y subes explosivamente.",
        image: "img/benchPress.jpg",
        link: "https://example.com/pecho-link",
        },
        {
        exercise: "Pec Fly en maquina",
        text: "3 series mismo peso moderado," +
            "10-12 repeticiones por serie, cada repeticion mantienes dos segundos apretando al frente.",
        image: "img/pecFly.png",
        link: "https://example.com/pecho-link",
        },

    ];

    const pullRoutine = [
        {
        exercise: "Jalon al pecho en polea",
        text: "4 series subiendo peso," +
        "primera serie 15 repeticiones, segunda 12 repeticiones, tercera 10 repeticiones, cuarta 6-8 repeticiones.",
        image: "img/jalonAPecho.jpg",
        link: "https://example.com/espalda-link"
        },
        {
        exercise: "Remo con barra agarre supino",
        text: "4 series subiendo peso," +
        "primera serie 15 repeticiones, segunda 12 repeticiones, tercera 10 repeticiones, " +
            "cuarta serie haces 10 repeticiones y empiezas a bajar el peso que subiste, llegando casi al fallo en cada peso.",
        image: "img/remoBarra.jpg",
        link: "https://example.com/espalda-link"
        },
        {
        exercise: "Remo de piso con barra agarre neutro",
        text: "4 series peso fijo," +
        "12-15 repeticiones por serie, mantener 2 segundos de pausa en el punto de mayor contraccion.",
        image: "img/remoPiso.jpg",
        link: "https://example.com/espalda-link"
        },
    ];

    const armRoutine = [
        {
        exercise: "Curl bayesian",
        text: "4 series peso fijo," +
            "12 repeticiones por serie, mantener 2 segundos de pausa en el punto de mayor flexion.",
        image: "img/curlBayesian.webp",
        link: "https://example.com/espalda-link"
        },
        {
        exercise: "Copa en polea baja",
        text: "4 series peso fijo," +
            "12 repeticiones por serie, mantener 2 segundos de pausa en el punto de mayor extension.",
        image: "img/copa.jpg",
        link: "https://example.com/espalda-link"
        },
    ];

    const quadRoutine = [
        {
        exercise: "Sentadilla libre",
        text: "4 series subiendo peso," +
            "primera serie 15 repeticiones, segunda 12 repeticiones, tercera 10 repeticiones, cuarta 6-8 repeticiones.",
        image: "img/squad.webp",
        link: "https://example.com/cuadriceps-link"
        },
        {
        exercise: "Extensiones de cuadriceps",
        text: "4 series con dos pesos," +
            "primero 12 repeticiones pesadas, despues bajamos peso esperando sacar otras 8-10 repeticiones.",
        image: "img/extCuadri.jpg",
        link: "https://example.com/cuadriceps-link"
        },

    ];

    const femoralRoutine = [
        {
        exercise: "Peso muerto",
        text: "4 series subiendo peso," +
            "primera serie 15 repeticiones, segunda 12 repeticiones, tercera 10 repeticiones, cuarta 6-8 repeticiones.",
        image: "img/pesoMuerto.webp",
        link: "https://example.com/femoral-link"
        },
        {
            exercise: "extension de femoral acostado",
            text: "4 series bajando peso," +
                "primera serie 8 repeticiones, segunda 10 repeticiones, tercera 12 repeticiones, cuarta repeticiones al fallo.",
            image: "img/FemoSentado.webp",
            link: "https://example.com/femoral-link"
        },
    ];


    const routines = {
        push: pushRoutine,
        pull: pullRoutine,
        arm: armRoutine,
        quad: quadRoutine,
        femoral: femoralRoutine,
    };
    const selectedRoutine = routines[selectedMuscle] || null;

    //const selectedRoutine = muscleRoutineData[selectedMuscle];

    if (selectedRoutine && selectedRoutine.length > 0) {
        selectedRoutine.forEach((exerciseData) => {
            const { exercise, text, image, link } = exerciseData;

            // Crear y añadir los elementos al DOM
            const exerciseElement = document.createElement('h2');
            exerciseElement.textContent = exercise;
            routine.appendChild(exerciseElement);

            const textElement = document.createElement('p');
            textElement.textContent = text;
            routine.appendChild(textElement);

            const imageElement = document.createElement('img');
            imageElement.src = image;
            imageElement.alt = `Imagen para ${selectedMuscle}`;
            imageElement.style.maxWidth = "500px";
            routine.appendChild(imageElement);

            const linkElement = document.createElement('a');
            linkElement.href = link;
            linkElement.textContent = "Videotutorial";
            linkElement.target = "_blank"; // Abrir en nueva pestaña
            routine.appendChild(linkElement);
        });
    } else {
        routine.textContent = "No se encontró una rutina para el grupo muscular seleccionado.";
    }

}

generate.addEventListener('click', getRoutine);