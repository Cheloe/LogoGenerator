const Shapes = require('./lib/shapes.js').Shapes;
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
            let logo = new Shapes(response.desiredShape,response.color, response.initials, response.textColor);
            console.log(logo);
            writeFile(logo.drawShape());
        })

function writeFile(logo) {
    //logo = JSON.stringify(logo);
    fs.writeFile('./logos/newLogo.svg', logo, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        }   
    )
}

    

