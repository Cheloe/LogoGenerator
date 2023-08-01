
class Shape {
    constructor(color, initials, textColor) {
        this.color = color;
        this.initials = initials.toUpperCase();
        this.textColor = textColor;
    }

    renderColor(colorValue) {
        switch (colorValue) {
            case 'red':
                return '#F94144';
            case 'yellow':
                return '#F9C74F';
            case 'blue':
                return '#577590';
            case 'green':
                return '#90BE6D';
            case 'orange': 
                return '#F3722C';
            case 'black':
                return '#001219';
            case 'white':
                return '#E9D8A6';
            default:
                return '#000000';
        }
    }
}

class Square extends Shape {
    constructor(color, initials, textColor) {
        super(color, initials, textColor);
    }

    drawLogo() {
        this.textColor = this.renderColor(this.textColor);
        this.color = this.renderColor(this.color);

        return `
<svg version="1.1"
width="200" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="150" height="150" style="fill:${this.color};"/>

<text x="75" y="94" font-size="20" text-anchor="middle" fill="${this.textColor}" style="font: bold 42px sans-serif;">${this.initials}</text>
</svg>`;
    }
}


class Triangle extends Shape {
    constructor(color, initials, textColor) {
        super(color, initials, textColor);
    }

    drawLogo() {
        this.textColor = this.renderColor(this.textColor);
        this.color = this.renderColor(this.color);

        return `
<svg version="1.1"
width="200" height="200"
xmlns="http://www.w3.org/2000/svg">

<polygon points="95,0 0,170 190,170" style="fill:${this.color};"/>

<text x="94" y="125" font-size="20" text-anchor="middle" fill="${this.textColor}" style="font: bold 42px sans-serif;">${this.initials}</text>
</svg>`;
    }
}

class Circle extends Shape {
    constructor(color, initials, textColor) {
        super(color, initials, textColor);
    }

    drawLogo() {
        this.textColor = this.renderColor(this.textColor);
        this.color = this.renderColor(this.color);

        return `
<svg version="1.1"
width="200" height="200"
xmlns="http://www.w3.org/2000/svg">

<circle cx="80" cy="80" r="80" style="fill:${this.color};"/>

<text x="80" y="94" font-size="20" text-anchor="middle" fill="${this.textColor}" style="font: bold 42px sans-serif;">${this.initials}</text>
</svg>`;
    }
}

const newSquare = new Square(
    'red',
    'abc',
    'blue'
);

const newTriangle = new Triangle(
    'yellow',
    'abc',
    'black'
);

const newCircle = new Circle(
    'green',
    'abc',
    'white'
);

module.exports = { Shape, Square, Triangle, Circle };   