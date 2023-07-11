 
const questions = [
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'Javascript',
        'c': 'Java',
        'd': 'C++',
        'correct': 'a',
    },
    {
        'que': 'In what year javascript launched ES6',
        'a': '1996',
        'b': '1989',
        'c': '2001',
        'd': '2015',
        'correct': 'd',
    },
    {
        'que': 'What does CSS stands for ',
        'a': 'Cascading Style Sheets',
        'b': 'Boboo',
        'c': 'Hypertext Transfer protocol',
        'd': 'duduuus',
        'correct': 'a',
    },
];
let right=0;
let wrong=0;
let index = 0;
let total=questions.length;
let data;
const ques = document.getElementById("ques-Box");
const inputOptions=document.querySelectorAll(".options");



const loadQuestion = () => {
    if(index===total){
        return endQuiz();
    }
    reset();
    data = questions[index];
    ques.innerText=`${index+1}) ${data.que}`;
    inputOptions[0].nextElementSibling.innerText=data.a;
    inputOptions[1].nextElementSibling.innerText=data.b;
    inputOptions[2].nextElementSibling.innerText=data.c;
    inputOptions[3].nextElementSibling.innerText=data.d;
}
 
  
const submitQuiz=()=>{
    const ans= getAnswer();
    if(ans.value==data.correct){
        right++;
    }else{
        wrong++;
    }
    
    index++;
    if(index===total){
        return endQuiz();
    }
    loadQuestion();
}

const getAnswer=()=>{
   let answer;
   for(let input of inputOptions){
     if(input.checked){
       answer=input;
       break;
     }
   }
   return answer;
}

const reset = () => {
    for (const input of inputOptions) {
        if (input.checked) {
            input.checked = false;
        }
    }
    return null; // Return a default value if no option is selected
}
 
const endQuiz= ()=>{
    document.getElementById("box").innerHTML = `<h3>Thank you for playing the quiz</h3>
    <h2>${right} / ${total} are correct</h2>`;
}

loadQuestion();
