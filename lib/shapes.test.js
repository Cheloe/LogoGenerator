const Shapes = require('./shapes.js').Shapes;

describe('Shapes', () => {
        it('should take in a desired shape, color, initials, and textColor', () => {
            const triangle = new Shapes('triangle','red', 'cll', 'white');
            expect(triangle.desiredShape).toEqual('triangle');
            expect(triangle.color).toEqual('red');
            expect(triangle.initials).toEqual('CLL');
            expect(triangle.textColor).toEqual('white');
        })
});

describe('Shapes', () => {
    describe('drawShape', () => {
        it('should return a triangle', () => {
            const triangle = new Shapes('triangle','red', 'cll', 'white');
            expect(triangle.drawShape()).toEqual(`
<svg version="1.1" 
width="200" height="200"
xmlns="http://www.w3.org/2000/svg">

<polygon points="95,0 0,170 190,170" style="fill:#F94144;"/>

<text x="94" y="125" font-size="20" text-anchor="middle" fill="#E9D8A6" style="font: bold 42px sans-serif;">CLL</text>
</svg>`);
        })
    })
});