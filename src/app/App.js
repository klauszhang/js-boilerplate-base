export default class App {
    constructor() {
        this.template = `{{$ctrl.text}}`;
        this.controller = AppCtrl;
    }
}

class AppCtrl {
    constructor() {
        this.text = 'hello world!'
    }
}