import { describe } from 'mocha';
import { expect } from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';
import { AppCtrl } from './App';


describe('app.html', () => {
    it('should contains hello world', (done) => {

        const html = fs.readFileSync('./src/app/app.html', 'utf-8');
        jsdom.env(html, (err, window) => {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.eq('{{$ctrl.text}}');
            done();
            window.close();
        })
    })
})


describe('App.js', () => {
    var appCtrl = new AppCtrl();
    it('should have text property with hello world', () => {
        expect(appCtrl.text).contain('hello world');
    })
})