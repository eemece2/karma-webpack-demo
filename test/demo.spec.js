//var assert = chai.assert;

//var assert = require('chai').assert;
//var expect = require('chai').expect;
//import { assert } from 'chai';
//import { expect } from 'chai';
import { assert, expect } from 'chai';

// Funciona con webpack (en browser) (karma: $ npm run test)
import demo from '../src/demo';

// Funciona con mocha (en node.js) ($ mocha test)
// Tambien funciona con webpack en browser (karma)
//var demo = require('../src/demo');

describe('with babel', () => {

    it('should work template strings', () => {
        var name = "Edu", time = "today";
        var o = `Hello ${name}, how are you ${time}?`;
        const t = "Hello Edu, how are you today?";
        assert.equal(o, t);
    });

    it('should work destructuring', () => {
        var [a, ,b] = [1,2,3];
        assert.equal(1, 1);
    });

});

describe('with es2015 modules', () => {
    it('should load module', () => {
        assert.equal(demo.getInside(), 55555);
    });

    it('should work babel inside module', () => {
        var name = "Edu", time = "today";
        const t = "Hello Edu, how are you today?";
        let o = demo.template(name, time);
        assert.equal(o, t);
    });
});
