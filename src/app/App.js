import apptemp from './app.html';

export default class App {
    constructor() {
        this.template = apptemp;
        this.controller = AppCtrl;
    }
}

export class AppCtrl {
    constructor() {
        this.text = 'hello world'
    }
}