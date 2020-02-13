import { MultiplyTable } from './MultiplyTable.js'





export class QuestionsSelector {
    constructor(hide)
    {
        this.hide = hide;
    }
}

export class MultiplyTables extends QuestionsSelector {
    constructor(max,hide) {
        super(hide);
        let result = [];
        let i = {};

        for (i = 1; i <= max; i++) 
        { 
            result.push(new MultiplyTable(i))
        };
        this.items = result;
        this.max = 10;
               
      }

  }

  export function GetDisplay(multiplyTables)
  {

        let result = [];
        let counter = 0;
        result.push([]);
        for(let table of multiplyTables.items)
        {
            counter++;
            result[result.length - 1].push(table);
            if(counter % 3 == 0)
            {
                result.push([])
            }

        }
        return result;

  }