
import { DependableItem } from './DependableItem.js'
import { Attempts } from './Attempts.js'
import { Attempt } from './Attempt.js'

export class Task extends DependableItem
{
    
    constructor(taskId,taskGroupId,evalfunction)
    {        
        this.Attempts = []
        this.taskId = taskId;
        this.taskGroupId = taskGroupId;
        this.evalFunction = evalfunction;     
    }

    attempt(input, roundId)
    {
        let attempt = new Attempt(this.taskId,this.taskGroupId,roundId, this.evalFunction(input));
        this.Attempts.push(attempt);
        return attempt;
    }

    completed(roundId)
    {
        let roundAttempts = this.Attempts.filter(attempt => attempt.roundId == roundId);
        if(roundAttempts.length == 0)
        {
            return false;
        }
        return roundAttempts[roundAttempts.length - 1].correct;
    }

    completed()
    {
        
    }
}

