const nationsQuiz = [
    {
      number: 1,
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "Japan", "South Korea", "Vietnam"],
      correctAnswer: "Japan"
    },
    {
      number: 2,
      question: "In which continent is Egypt located?",
      options: ["Asia", "Europe", "Africa", "South America"],
      correctAnswer: "Africa"
    },
    {
      number: 3,
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
      correctAnswer: "Ottawa"
    },
    {
      number: 4,
      question: "Which country is famous for its pyramids?",
      options: ["Italy", "Greece", "Mexico", "Egypt"],
      correctAnswer: "Egypt"
    },
    {
      number: 5,
      question: "What is the official language of Brazil?",
      options: ["Spanish", "Portuguese", "French", "Italian"],
      correctAnswer: "Portuguese"
    },
    {
      number: 6,
      question: "Which nation is located in the southern hemisphere?",
      options: ["Germany", "India", "Australia", "Canada"],
      correctAnswer: "Australia"
    },
    {
      number: 7,
      question: "The Acropolis is located in which country?",
      options: ["Italy", "Greece", "Turkey", "Spain"],
      correctAnswer: "Greece"
    },
    {
      number: 8,
      question: "Which country is known as the 'Land of a Thousand Lakes'?",
      options: ["Canada", "Sweden", "Finland", "Norway"],
      correctAnswer: "Finland"
    },
    {
      number: 9,
      question: "What is the currency of South Africa?",
      options: ["Rand", "Dollar", "Euro", "Pound"],
      correctAnswer: "Rand"
    },
    {
      number: 10,
      question: "In which continent is Argentina located?",
      options: ["Asia", "Europe", "North America", "South America"],
      correctAnswer: "South America"
    }
  ];
  
  // // Example usage:
  // nationsQuiz.forEach((q) => {
  //   console.log(`${q.number}. ${q.question}`);
  //   console.log("Options:", q.options);
  //   console.log("Correct Answer:", q.correctAnswer);
  //   console.log("\n");
  // });

  // input();
let count=1
  function startquiz() {
    document.getElementById("startquiz").style.display="none";
    document.getElementById("tittel").style.display="none";

    for (const key in nationsQuiz) {

      console.log(key)
        
        if (Object.hasOwnProperty.call(nationsQuiz, key)) {
            if(count == key){
         
                const element = nationsQuiz[count];
                console.log(element)
               
              
                document.getElementById("quizdiv").innerHTML= `<h1>${element.question}</h1`;
                let option= element.options;
                option.forEach(element2 => {
                   document.getElementById("quizdiv").innerHTML+=
                   `<div class="alternatives" id="alternatives">
                   <label fpr="">${element2}</label>
                   <input type="radio" name="${ element.question}"id="ein">
                   </div>`
                });
                document.getElementById("quizdiv").innerHTML+=`<button id="next" onclick="next()">next</button>`;
                
                input(element)
    
            }
        }
      }
            }
           
function highscore1(){
  document.getElementById("quizdiv").style.display="none";
  document.getElementById("highscore").innerHTML+=
  `<div >
  <h1 id="highscore2"> your score is ${highscore}</h1>
  </div>`
  localStorage.setItem(" highscore", highscore);
  localStorage.getItem("highscore");
  document.getElementById('highscore').innerHTML += `
        <h1>High Scores</h1>`;
        

  


          
}
function next() {
    console.log("ey")
    count++;
    console.log(count)

    startquiz();
    if(count==10){
      highscore1()
    }

}

highscore=0
function input(element){
  // document.getElementById("quizdiv")
  var quizdiv = document.getElementById('quizdiv');


  quizdiv.addEventListener('click', function (event) {
    console.log(event)

    let answer = event.target.innerHTML;
    let inputTarget = event.target;
    console.log(event.target.localName)
    if(event.target.localName=="label"){
      if(answer== element.correctAnswer){
        inputTarget.setAttribute("class","correctAnswer");
        highscore++;
        highscore++;
        highscore++;
        highscore++;
        highscore++;
        highscore++;
        highscore++;
        highscore++;
        highscore++;
        highscore++;
        console.log(highscore)
      } else {
        inputTarget.setAttribute("class","failAnswer");
      }
        console.log(element.correctAnswer)
        console.log(element.failanswer)
          
         
    
   
  }
  });
}
function saveHighScore(highscore) {
  let highscores = JSON.parse(localStorage.getItem('highscore')) || [];
  highscores.push(highscore);
  highscores.sort((a, b) => b - a);
  localStorage.setItem('highscores', JSON.stringify(highscores.slice(0, 10)));
}

function displayHighScores() {
  const highscores = JSON.parse(localStorage.getItem('highscore')) || [];
  const highScoreList = document.getElementById('highScoreList'); 
  // highScoreList.innerHTML = ''; 
  highscores.forEach((score, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${index + 1}. ${score}`;
      highScoreList.appendChild(listItem);
  });
}
