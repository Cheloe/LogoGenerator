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
            expect(triangle.drawShape()).toEqual(`<svg width="100" height="100">
            <polygon points="50,0 0,100 100,100" style="fill:${this.color};stroke:${this.color};stroke-width:1"/>
            </svg>`);
        })
    })
});