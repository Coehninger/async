// FOR FUN SELECTED CHARACTER CODE
const charactersSoundMap = [
  { name: "ryu", file: "assets/hadouken.mp3" },
  { name: "ken", file: "assets/shoryuken.mp3" },
  { name: "chun-li", file: "assets/kikoken.mp3" },
];

function addCharacterHandlers() {
  const characterElements = [
    ...document.getElementsByClassName("character-section"),
  ];
  characterElements.forEach((e) => {
    e.addEventListener("click", (event) => onClickCharacter(event));
  });
}

function onClickCharacter(event) {
  const clickedCharacterName = event.target.id;
  const clickedCharacterSound = charactersSoundMap.find(
    (e) => e.name === clickedCharacterName
  ).file;
  const audio = new Audio(clickedCharacterSound);
  audio.play();
}

addCharacterHandlers();
// END FOR FUN CODE

// 0 - rickRollingUser() una funcion
// que dado un tiempo redirija al
// usuario a:
// https://www.youtube.com/watch?v=dQw4w9WgXcQ

// function rickRollingUser() {
//   setTimeout(function () {
//     window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
//   }, 5000);
// }
// rickRollingUser();

// 1 - cambiar el titulo de la página por "80' game 🎮 " , "insert 🪙 "

// let isFirstTitle = true;
// let currentTitle;

// function changeTitle() {
//   const firsTitle = "80' game 🎮 ";
//   const secondTitle = "insert 🪙 ";

//   if (isFirstTitle) {
//     currentTitle = firsTitle;
//   } else {
//     currentTitle = secondTitle;
//   }
//   document.title = currentTitle;

//   isFirstTitle = !isFirstTitle;
// }
// setInterval(changeTitle), 2000;


// 2 -  Cambiar el titulo de la pagina por
// "80' game 🎮 ", "insert 🪙 "  y "🥔 You won!"

// let iterator = 0;

// function changeTitle() {
//   console.log("interator: ", iterator);
//   const titleCollection = ["80' game 🎮", "insert 🪙", "🥔 You won!"];
//   const titleIndex = iterator % titleCollection.length;
//   const newTitle = titleCollection[titleIndex];
//   document.title = newTitle;
//   iterator++;
// }

// setInterval(changeTitle, 1000);


// 3 - annoyingMessage() hacer una funcion que
// cada 5 segundos aparezca un alert con el mensaje " 🥔 You won!"

// function annoyingMessage() {
//   setInterval(() => {
//     window.alert(" 🥔 You won!");
//   }, 5000);
// }
// annoyingMessage()

// 4 - Hacer intermitente el mensaje de "Please, insert coin 🪙..."
// tip: utilizar las clases de css fadeIn fadeOut

// 5 - Implementar la funcion fetchScores()
// traer los datos de la tabla de posiciones
// utilizando fetch(), puede ser desde un json
// server o de alguna fake api. se provee db.json de ejemplo
let scores = [];

const url = "http://localhost:3000/scores";

async function fetchScores() {
    try {
        const response = await fetch(url, { method: "GET"});
        const data = await response.json();

        if (JSON.stringify(data) === JSON.stringify(scores)) {
            deleteOldScores(),
        
        }

        scores = data;
        console.log("scores in fetch: ", scores);

    } catch (error) {
        console.log("Error fetching data: ", error);

    }
}


// 6 - Actualizar constantemente el scoreboard
// de la pagina utilizando polling.
