const Shapes = require('./shapes.js').Shapes;

describe('Shapes', () => {
        it('should take in a desired shape, color, initials, and textColor', () => {
            const triangle = new Shapes('triangle','red', 'cll', 'white');
            expect(triangle.desiredShape).toEqual('triangle');
            expect(triangle.color).toEqual('red');
            expect(triangle.initials).toEqual('cll');
            expect(triangle.textColor).toEqual('white');
        })
});

describe('Shapes', () => {
    describe('drawShape', () => {
        it('should return a triangle', () => {
            const triangle = new Shapes('triangle','red', 'cll', 'white');
            expect(triangle.drawShape()).toEqual(`
<svg version="1.1" 
width="100" height="100"
xmlns="http://www.w3.org/2000/svg">

<polygon points="50,0 0,100 100,100" style="fill:red;"/>

<text x="50" y="65" font-size="20" text-anchor="middle" fill="white" style="font: 28px Poppins sans-serif;">cll</text>
</svg>`);
        })
    })
});