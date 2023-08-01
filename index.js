// const Shapes = require('./lib/shapes.js').Shape;
const Triangle = require('./lib/shapes.js').Triangle;
const Square = require('./lib/shapes.js').Square;
const Circle = require('./lib/shapes.js').Circle;

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What shape should your logo be?',
            choices: ['triangle', 'square', 'circle'],
            name: 'desiredShape'
        },
        {
            type: 'list',
            message: 'What color should your logo be?',
            choices: ['red', 'orange', 'yellow', 'green', 'blue','black', 'white'],
            name: 'color'
        },
        {   
            type: 'input',
            message: 'What are your initials (first, middle, last)?',
            name: 'initials'
        },
        {
            type: 'list',
            message: 'What color should the text be?',
            choices: ['red', 'orange', 'yellow', 'green', 'blue','black', 'white'],
            name: 'textColor'
        },
    ])

        .then((response) => {
            if (response.desiredShape === 'triangle') {
                let logo = new Triangle(response.color, response.initials, response.textColor);
                writeFile(response.initials, logo.drawLogo());
            } else if (response.desiredShape === 'square') {
                let logo = new Square(response.color, response.initials, response.textColor);
                writeFile(response.initials, logo.drawLogo());
            } else if (response.desiredShape === 'circle') {
                let logo = new Circle(response.color, response.initials, response.textColor);
                writeFile(response.initials, logo.drawLogo());
            }
        });


function writeFile(initials, logo) {
    const fileName = `./logos/${initials.toUpperCase()}_logo.svg`;

    fs.writeFile(fileName, logo, (err) => {
        if (err) throw err;
        console.log(`Logo for initials "${initials}" has been saved as "${fileName}"!`);
    });
}

    

