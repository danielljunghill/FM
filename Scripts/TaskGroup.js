import { MultiplyTable } from './Task.js'
import { DependableItem } from './DependableItem.js'

export class TaskGroup extends DependableItem
{
    constructor(tasks, dependentOn)
    {
        this.tasks = tasks
        this.dependentOn = dependentOn;
    }
    
    completed(roundId)
    {
        //kontrollera om samtliga tasks (questions) är klara
        if(this.tasks.map((x) => x.completed(roundId)).includes(false))
        { 
            return false;
        }
        return true;
    }

    completed()
    {
        
    }


    isActive()
    {
        return !(this.dependentOn.map((d) => d.completed()).includes(false))
    }

}