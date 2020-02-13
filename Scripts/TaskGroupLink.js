import { TaskGroup } from "./TaskGroup";

export class TaskGroupLink
{
    constructor(taskGroupId,isActive)
    {
        this.TaskGroupId = taskGroupId;
        this.IsActive = isActive;
    }

    CreateTaskGroup()
    {
        return new TaskGroup("",[])
    }

}