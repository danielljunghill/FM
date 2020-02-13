import { Attempt } from "./Attempt.js"

export function attemptStore()
{
    let store = new Map()
    let add = function(attempt)
    {
        if(store.has(attempt.taskGroupId))
        {
            store.get(attempt.taskGroupId).push(attempt.taskGroupId,attempt);
        }
    }
}