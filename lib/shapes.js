class Shapes {
    constructor(desiredShape, color, initials, textColor) {
        this.desiredShape = desiredShape;
        this.color = color;
        this.initials = initials;
        this.textColor = textColor;
    }
    drawShape() {
        let shape = '';
        if (this.desiredShape === 'triangle') {
            shape = `<polygon points="50,0 0,100 100,100" style="fill:${this.color};"/>`;
        }
        else if (this.desiredShape === 'square') {
            shape = `<rect width="100" height="100" style="fill:${this.color};"/>`;
        }
        else if (this.desiredShape === 'circle') { 
            shape = `<circle cx="50" cy="50" r="50" style="fill:${this.color};"/>`;
        }

        return `
<svg version="1.1" 
width="100" height="100"
xmlns="http://www.w3.org/2000/svg">

${shape}

<text x="50" y="65" font-size="20" text-anchor="middle" fill="${this.textColor}" style="font: 28px Poppins sans-serif;">${this.initials}</text>
</svg>`;
    }
}

module.exports = {Shapes};
