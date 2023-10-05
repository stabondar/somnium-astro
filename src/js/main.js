// import Scroll from "./Scroll";

// const scroll = new Scroll()



export default class main
{
    constructor()
    {
        const callAll = () => 
        {
            setTimeout(async () => 
            {
                const scroll = await import('./Scroll.js').then(module => new module.default)
            }, 13000) 
        }
        
        callAll()
    }
}