const BonjourPlug = {

    install: (app, options) => {
        app.config.globalProperties.greeting = msg =>{
            return ` Bonjour ${msg}`;
        }
    }
}