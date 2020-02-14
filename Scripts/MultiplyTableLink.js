import { MultiplyTable } from './MultiplyTable.js'
import { TaskGroupLink  } from './TaskGroupLink.js'

export class MultiplyTableLink extends TaskGroupLink
{
    constructor(tableNr)
    {
        super(`MultiplyTableLink.${tableNr}`,true)
        this.TableNr = tableNr;
    }

    CreateTaskGroup()
    {
        return new MultiplyTable(this.TableNr);
    }
}