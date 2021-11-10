const Bonjour= {
    template:`
        <div>
            <h1>Vue 3 dit Bonjour au monde ! </h1>
        </div>
    `
};


const BonjourPlug = {
    install: (app, options)=>{
        app.component('bonjour',Bonjour)
    }
}