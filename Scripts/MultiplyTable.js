
import { MultiplyQuestion, multiplyQuestionsCreator } from './Question.js'
import { newQuestionState } from './state.js';

function GetMultiplyQuestions(from, to)
{
    //cache för questions
    //flytta attempts en hack
    let questions = [];
    let j = {};
    let i = {};
    for (i = from; i <= to; i++) {
    for(j = 1; j <= 10; j++)
    {   
        let question = multiplyQuestionsCreator(i,j);
        question.addNewAttempts();
        questions.push(question);
    }
    }
    return questions;
}



export class MultiplyTable {
 
    constructor(tableNr)
    {
      this.tableNr = tableNr;
      this.active = tableNr == 8;
    }
  

    getQuestions()
    {
        return GetMultiplyQuestions(this.tableNr,this.tableNr);;
    }

    isCorrect()
    {

    }

}