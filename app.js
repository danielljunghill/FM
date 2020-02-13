//Add dependendencies between multiply tables
import { MultiplyTables} from './Scripts/MultiplyTables.js'
import { GetDisplay} from './Scripts/MultiplyTables.js'
import { randomInteger } from './Scripts/Math.js'
import { MultiplyQuestion } from './Scripts/question.js'
import { 
    newQuestionState, 
    selectQuestionsState } from './Scripts/state.js'

//skapa tabeller
let tables = new MultiplyTables(10,false)
let display = GetDisplay(tables);
//handle för skapande av nästa fråga   
let createQuestion = {}
//handle för nästa fråga
let nextQuestionInteval = {};
//handler för konsumerad tid
let timerInterval = {}

function setTime(state)
{
    console.log(state.seconds)
    state.seconds = state.seconds + 1;
}

let stopped = false;

function nextQuestion(app)
{
    clearInterval(nextQuestionInteval);
    let next = createQuestion();
    app.state = next.state;
    if(!next.completed)
    {
      timerInterval = setInterval(() => setTime(app.state),1000);
      app.question = next.question;
    }
}


function startNextQuestion(app,interval)
{
    clearInterval(timerInterval);
    nextQuestionInteval = setInterval(() => nextQuestion(app),interval);
}



function getQuestions(tableNr)
{

    let questions = tables.items[tableNr - 1].getQuestions();
  
    function notAnsweredQuestion(question)
    {
       
        return !question.isCorrect();
    }

    function notAsweredQuestions(questions)
    {
        console.log(questions.length + " questions")
        return questions.filter(notAnsweredQuestion);
    }

    return function()
    {
        console.log("all questions length " + questions.length)
        let selection = notAsweredQuestions(questions);
        console.log(selection.length + " not answered questions");
        let index = randomInteger(1,selection.length);
        let question = selection[index - 1];
        let state = newQuestionState();
        if(selection.length == 0)
        {
            console.log("no question found")
            clearInterval(timerInterval)
            state = selectQuestionsState();
            //dummy question
            question = new MultiplyQuestion(1,2,[]);
        }
        return  { question: question , state: state ,completed: (selection.length == 0)} ;
    }

}

function nextQestion(app)
{
    if(stopped)
    {
        let next = createQuestion();
        app.state = next.state;
        app.question = next.question;
    }
    stopped = false;
}


new Vue({
  el:'#vue-app',
  data:{
      state : selectQuestionsState(),
      selection: display,
      question: {},
    },
  methods: {
    verifyAnswer:function(){
        //kontrollerar svar
        this.state = this.question.evaluate(this.state.answer);
        let interval = 3000;
        if(this.state.correct)
        { 
            interval = 500; 
        }
        if(this.state.hideCompleted)
        {
            startNextQuestion(this,interval);
        }
        
    },
    skipErrorPresentation: function()
    {
        nextQuestion(this);
    },
    nextQuestion: function()
    {
        let next = createQuestion();
        this.state = next.state;
        this.question = next.question;
    },
    selectionChange: function(tableNr)
    {
       createQuestion =  getQuestions(tableNr)
       let next = createQuestion();
       this.state = next.state;
       timerInterval = setInterval(() => setTime( this.state),1000);
       this.question = next.question;
    }
  }
});

