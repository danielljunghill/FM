export class MultiplyQuestion extends Task
{
    constructor(a,b)
    {
        super(id(a,b))
        this.A = a;
        this.B = b;
        this.Attempts = [];
    }

    id()
    {
        return `MultiplyQuestion.${this.A}.${this.B}`
    }    //current Attempts
    currentAttempts()
    {
        return this.Attempts[this.Attempts.length - 1];
    }

    answer()
    {
        return multiply(this.A)(this.B);
    }

    isCorrect()
    {
        console.log(this.currentAttempts())
        //kontroll om frågan är besvarad
        if(this.currentAttempts().isEmpty())
        {
            return false;
        }
        //kontroll om svaret var korrekt
        return (this.currentAttempts().current().correct)
    }

    //lägg state hantering utanför
    //denna metod
    evaluate(answer)
    {
        let attempt = new Attempt()
        let correct = answer == this.answer();
        this.currentAttempts().add(correct);
        if(correct)
        {
            return correctAnswerState(answer)
        }
        else
        {
            return wrongAnswerState(answer,this.answer())
        }
    }

    addNewAttempts()
    {
        this.Attempts.push(new Attempts());
    }

    static Create()
    {
        let cache = new Map();
        return function(a,b)
        {
            let hash = a + " " + b;
            if(!cache.has(hash))
            {
                cache.set(hash,new MultiplyQuestion(a,b,[]))
            }
            let q = cache.get(hash);
            return q;
        }
    }

}