class Shapes {
    constructor(desiredShape, color, initials, textColor) {
        this.desiredShape = desiredShape;
        this.color = color;
        this.initials = initials;
        this.textColor = textColor;
        this.drawShape =function (){
            if (this.parent.desiredShape === 'triangle') {
                return `<svg width="100" height="100">
                <polygon points="50,0 0,100 100,100" style="fill:${this.color};stroke:${this.color};stroke-width:1"/>
                </svg>`;
            } else if (this.desiredShape === 'square') {
                return `<svg width="100" height="100">
                <rect width="100" height="100" style="fill:${this.color};stroke:${this.color};stroke-width:1"/>
                </svg>`;
            } else if (this.desiredShape === 'circle') {
                return `<svg width="100" height="100">
                <circle cx="50" cy="50" r="50" style="fill:${this.color};stroke:${this.color};stroke-width:1"/>
                </svg>`;
            }
        };
    }
}

module.exports = {Shapes};