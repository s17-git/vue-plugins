const GreetingPlug = {
    install: (app, options) => {
        app.mixin({
            mounted() {
                this.sayHello()
            },

            methods: {
                sayHello: () =>{
                    return "Salut forlan from plugin"
                }
            }
        })
    }
}