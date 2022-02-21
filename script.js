const quizData = [  
    {  
     question: "Que signifie HTML",  
     a: "Hyper Text Markup Language",  
     b: "Hyper Text Mark Language",  
     c: "Hyper Textuel Markup Language",  
     d: "Hyperet Text Markup Language", 
     correct: "a",  
    },
    {  
      question: "A quoi sert le HTML",  
      a: "l'interface",  
      b: " la structure",  
      c: "la présentation",  
      d: "mettre en forme", 
      correct: "c",  
     },
     {  
      question: "Que signifie CSS",  
      a: "CSS signifie Cascading StyleSheets,",  
      b: "CSS signifie Cascad StyleSheets,",  
      c: "CSS signifie Cascading Style,",  
      d: "Aucun", 
      correct: "a",  
     },
     {  
      question: "A quoi sert le CSS",  
      a: "l'interface",  
      b: " la structure",  
      c: "la présentation",  
      d: "mettre en forme", 
      correct: "d",  
     },
     {  
      question: "JavaScript est le langage de ...... côté client le plus populaire et le plus utilisé. ",  
      a: "html",  
      b: "script",  
      c: "css",  
      d: "rien", 
      correct: "a", 
     },
     {  
      question: "A quoi sert le JAVASCRIPT",  
      a: " modifier le contenu d'une page Web en ajoutant ou en supprimant des éléments.",  
      b: "faire la structure du page",  
      c: "seulement faire du style",  
      d: "rien d'important", 
      correct: "a", 
     }, 
     {  
      question: "Il existe généralement... façons d'ajouter JavaScript à une page Web.",  
      a: "1",  
      b: "2",  
      c: "3",  
      d: "4", 
      correct: "c", 
     }, 
     {  
      question: " HTML est le langage de ............. standard pour la création de pages Web",  
      a: "structure",  
      b: "  balisage",  
      c: "contenu",  
      d: "création", 
      correct: "b",
     },
     {  
      question: "Qu'est-ce qu'un élément HTML ?",  
      a: "Un élément HTML est défini par une balise de début, du contenu et une balise de fin",  
      b: "Un élément HTML est est une structure de controle",  
      c: "Un élément HTML est Un élément  css ",  
      d: "Un élément HTML est rien", 
      correct: "a", 
     },
     {  
      question: " L'attribut src de <img> spécifie le .................. à l'image à afficher.",  
      a: "strucure",  
      b: "contenue",  
      c: "chemin d'accès",  
      d: "Aucun", 
      correct: "c", 
     },
     {  
      question: " L'attribut href de <a> spécifie ....... vers laquelle le lien va.",  
      a: "css",  
      b: " html",  
      c: "L'attribut",  
      d: "l'URL de la page", 
      correct: "d", 
     },
     {  
      question: "JavaScript prend désormais en charge ...... types de boucles différents ",  
      a: "5",  
      b: "6",  
      c: "7",  
      d: "8", 
      correct: "a", 
     },
     {  
      question: "Les opérateurs logiques sont utilisés pour déterminer la...... entre les variables ou les valeurs.",  
      a: " logique",  
      b: " type",  
      c: " boucle",  
      d: "rien", 
      correct: "a", 
     },  
   {  
    question: "Les instructions conditionnelles sont utilisées pour effectuer différentes............ en fonction de différentes conditions. ",  
    a: "l'interface",  
    b: " la structure",  
    c: " actions",  
    d: "mettre en forme", 
    correct: "c",  
   },
   {  
    question: "Object, Array et Function (qui sont tous des types d'objets) sont des ........................",  
    a: "types de données composites",  
    b: " types de données primitifs",  
    c: "types de données spéciaux",  
    d: "Aucun", 
    correct: "a",  
   },
   {  
    question: "les ........................... (ou primaires ), composites (ou de référence ) et spéciaux . String, Number et Boolean sont des types de données primitifs",  
    a: "types de données primitifs",  
    b: " types de données composites",  
    c: "types de données spéciaux",  
    d: "Aucun", 
    correct: "a",  
   },
   {  
    question: "Alors que Undefined et Null sont des .........................",  
    a: "types de données primitifs",  
    b: " types de données composites",  
    c: "types de données spéciaux",  
    d: "Aucun", 
    correct: "c",  
   },
   {  
    question: "Un tableau est un type d'objet utilisé pour stocker plusieurs .......... dans une seule variable. ",  
    a: "interface",  
    b: " structure",  
    c: "numero",  
    d: "valeurs", 
    correct: "c",  
   },
   {  
    question: "L'index du tableau commence par :",  
    a: "1",  
    b: " 2",  
    c: "3",  
    d: "0", 
    correct: "c",  
   },
   {  
    question: "Il existe 3 manière de déclarer une variable en JavaScript : ",  
    a: "var, let et const",  
    b: " var, sum et const",  
    c: "var, let et constant",  
    d: "variable, let et const", 
    correct: "a",  
   },
  ]; 
   const quiz = document.getElementById("quiz");  
   const answerElements = document.querySelectorAll(".answer");  
   const questionElement = document.getElementById("question");  
   const a_text = document.getElementById("a_text");  
   const b_text = document.getElementById("b_text");  
   const c_text = document.getElementById("c_text");  
   const d_text = document.getElementById("d_text");  
   const submitButton = document.getElementById("submit");  
   let currentQuiz = 0;  
   let score = 0; 
    
   const deselectAnswers = () => {  
    answerElements.forEach((answer) => (answer.checked = false));  
   };  
   const getSelected = () => {  
    let answer;  
    answerElements.forEach((answerElement) => {  
     if (answerElement.checked) answer = answerElement.id;  
    });  
    return answer;  
   };  
   const loadQuiz = () => {  
    deselectAnswers();  
    const currentQuizData = quizData[currentQuiz];  
    questionElement.innerText = currentQuizData.question;  
    a_text.innerText = currentQuizData.a;  
    b_text.innerText = currentQuizData.b;  
    c_text.innerText = currentQuizData.c;  
    d_text.innerText = currentQuizData.d;  
   };  
   loadQuiz();  
   submitButton.addEventListener("click", () => {  
    const answer = getSelected();  
    if (answer) {  
     if (answer === quizData[currentQuiz].correct) score++;  
     currentQuiz++;  
     if (currentQuiz < quizData.length) loadQuiz();  
     else {  
      quiz.innerHTML = `  
         <h2>Tu as répondu ${score}/${quizData.length}questions correctement</h2>  
         <button onclick="history.go(0)">Rejouer</button>  
       `   
     }  
    }  
   });