import { expect } from 'chai';
import { describe } from 'mocha';
import fs from 'fs';
import jsdom from 'jsdom'

describe('this initial test', () => {
    it('should pass', () => {
        expect(true).to.eq(true);
    })
})

describe('index.html', () => {
    it('should say application is loading', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, (err, window) => {
            const h1 = window.document.getElementsByTagName('spl-app')[0];
            expect(h1.innerHTML).contains('Application is now loading...');
            done();
            window.close();
        })
    })
})