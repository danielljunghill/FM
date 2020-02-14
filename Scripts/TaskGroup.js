import { Task } from './Task.js'


export class TaskGroup 
{
    constructor(taskGroupId,tasks)
    {
    
        this.Tasks = tasks;
        this.TaskGroupId = taskGroupId;
        
    }
    
    completed()
    {
        //kontrollera om samtliga tasks (questions) är klara
        if(this.tasks.map((x) => x.completed()).includes(false))
        { 
            return false;
        }
        return true;
    }


    isActive()
    {
        return true;// !(this.dependentOn.map((d) => d.completed()).includes(false))
    }

}