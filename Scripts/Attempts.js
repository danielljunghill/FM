import { Attempt } from './Attempt.js'

export class Attempts
{
    constructor()
    {
       this.items = [];
    }

    add(correct)
    {
        this.items.push(new Attempt(correct));
    }

    current()
    {
        return this.items[this.items.length - 1]
    }

    isEmpty()
    {
        return this.items.length == 0;
    }  

}