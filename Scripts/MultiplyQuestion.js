import { Task } from './Task.js'

function id(taskgroupId,a,b)
{
    return `${taskgroupId}.MultiplyQuestion.[${a}.${b}]`;
}

export class MultiplyQuestion extends Task
{
    constructor(a,b,taskGroupId,roundId)
    {
        super(id(taskGroupId,a,b),taskGroupId,roundId)
        this.A = a;
        this.B = b;
        this.Id = this.taskId;
       
    }

  //current Attempts

    attempt(input)
    {
        let attempt = new Attempt(this.taskId,this.taskGroupId,this.roundId , input == (this.A * this.B));
        this.Attempts.push(attempt);
        return attempt;
    }


}







