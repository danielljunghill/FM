import { MultiplyTables } from './MultiplyTables.js'
import { GetDisplay } from './MultiplyTables.js'



export class State
  {
      hideCompleted = true;
      hideQuestion = true;
      hideSelection = true;
      hideDisplayCorrectAnswer = true;
      hideDisplayWrongAnswer = true;
      correct = false;
      seconds = 0;
      answer = "";
      correctAnswer = "";
  }

 
  export function correctAnswerState(answer)
  {
      let state = new State();
      state.hideDisplayCorrectAnswer = true;
      state.hideDisplayWrongAnswer = true;
      state.hideQuestion = false;
      state.correct = true
      state.answer = answer;
      state.correctAnswer = answer;
      return state;
  }

  export  function wrongAnswerState(answer,correctAnswer)
  {
      let state = new State();
      state.hideDisplayCorrectAnswer = true;
      state.hideDisplayWrongAnswer = false;
      state.hideQuestion = true;
      state.correct = false
      state.answer = answer;
      state.correctAnswer = correctAnswer;
      return state;
  }


  export function newQuestionState()
  {
      let state = new State();
      state.hideQuestion = false;
      return state;
  }

  export function completedState()
  {
      let state = new State();
      state.hideCompleted = false;
      state.hideQuestion = true;
      state.correct = false;
      return state;
  }

  
  export function selectQuestionsState()
  {
      let state = new State();
      state.hideSelection= false;
      return state;

  }