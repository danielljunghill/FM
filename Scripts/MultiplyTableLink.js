import { MultiplyTable } from './MultiplyTable.js'
import { TaskGroupLink  } from './TaskGroupLink.js'

export class MultiplyTableLink extends TaskGroupLink
{
    constructor(tableNr)
    {
        super(`MultiplyTable.[${tableNr}].Link`,true)
        this.TableNr = tableNr;
    }

    CreateTaskGroup()
    {
        Console.log(`this.tableNr ${this.TableNr}`)
        return new MultiplyTable(this.TableNr);
    }
}