class Shapes {
    constructor(desiredShape, color, initials, textColor) {
        this.desiredShape = desiredShape;
        this.color = color;
        this.initials = initials.toUpperCase(initials);
        this.textColor = textColor;
    }
    // 
    //write a method that takes in the user's chosen string color or text color and returns the hex code for that color
    renderColor(colorValue) {
        switch 
        (colorValue) {
            case 'red':
                return'#F94144';
            case 'yellow':
                return'#F9C74F';
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
        }};

    drawShape() {
        this.textColor = this.renderColor(this.textColor);
        this.color = this.renderColor(this.color);

        console.log(this.textColor);
        let shape = '';
        let textCoordinates = '';
        if (this.desiredShape === 'triangle') {
            shape = `<polygon points="95,0 0,170 190,170" style="fill:${this.color};"/>`;
            textCoordinates = `x="94" y="125"`;
        }
        else if (this.desiredShape === 'square') {
            shape = `<rect width="150" height="150" style="fill:${this.color};"/>`;
            textCoordinates = `x="75" y="94"`;
        }
        else if (this.desiredShape === 'circle') { 
            shape = `<circle cx="80" cy="80" r="80" style="fill:${this.color};"/>`;
            textCoordinates = `x="80" y="94"`;
        }    
        return `
<svg version="1.1" 
width="200" height="200"
xmlns="http://www.w3.org/2000/svg">

${shape}

<text ${textCoordinates} font-size="20" text-anchor="middle" fill="${this.textColor}" style="font: bold 42px sans-serif;">${this.initials}</text>
</svg>`;
    }
}

module.exports = {Shapes};
