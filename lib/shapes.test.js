const Shape = require('./shapes.js').Shape;
const Triangle = require('./shapes.js').Triangle;
const Square = require('./shapes.js').Square;
const Circle = require('./shapes.js').Circle;

describe('Shape', () => {
        it('should take in color, initials, and textColor', () => {
            const triangle = new Shape('red', 'cll', 'white');
            expect(triangle.color).toEqual('red');
            expect(triangle.initials).toEqual('CLL');
            expect(triangle.textColor).toEqual('white');
        });
});

describe('Triangle', () => {
    it('should take in color, initials, and textColor', () => {
        const triangle = new Triangle('red', 'cll', 'white');
        expect(triangle.color).toEqual('red');
        expect(triangle.initials).toEqual('CLL');
        expect(triangle.textColor).toEqual('white');
    }
    );
});

describe('Square', () => {
    it('should take in color, initials, and textColor', () => {
        const square = new Square('red', 'cll', 'white');
        expect(square.color).toEqual('red');
        expect(square.initials).toEqual('CLL');
        expect(square.textColor).toEqual('white');
    }
    );
});

describe('Circle', () => {
    it('should take in color, initials, and textColor', () => {
        const circle = new Circle('red', 'cll', 'white');
        expect(circle.color).toEqual('red');
        expect(circle.initials).toEqual('CLL');
        expect(circle.textColor).toEqual('white');
    }
    );
});

