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
        // {
        //     type: 'input',
        //     message: 'What shape would you like your shape to be?',
        //     name: 'desiredShape'
        // },
        {
            type: 'input',
            message: 'What color would you like your shape to be?',
            name: 'color'
        },
        {   
            type: 'input',
            message: 'What are your initial (first, middle, last)?',
            name: 'initials'
        },
        {
            type: 'input',
            message: 'What color would you like your initials to be?',
            name: 'textColor'
        },
    ])
        .then((response) => {
            let logo = new Shapes(response.desiredShape,response.color, response.initials, response.textColor);
            console.log(logo);
            //logo.drawShape();
            writeFile(logo.drawShape());
        })
        // .then(() => {
        //     logo = JSON.stringify(logo);
        //     fs.writeFile('logo.svg', logo, (err) => {
        //         if (err) throw err;
        //         console.log('The file has been saved!');
        //     });
        // });


function writeFile(logo) {
    //logo = JSON.stringify(logo);
    fs.writeFile('logo.svg', logo, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        }   
    )
}

    

