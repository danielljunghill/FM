import { MultiplyTableLink } from "./MultiplyTableLink.js";

export class TaskGroupLinks
{
    constructor(links)
    {
        this.Links = links
    }
}


export function multiplyTableLinks()
{
    let links = [];
    let i = {};
    for(i = 1; i <= 10; i++)
    {   
        let link = new MultiplyTableLink(i);
        links.push(link);
    }  
    return new TaskGroupLinks(links);
}