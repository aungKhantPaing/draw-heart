const prompt = require('prompt');

const drawHeart = require('./draw-heart');

const properties = [
    {
        name: 'n',
        validator: /^[0-9]|q$/,
        warning: 'Input must be integer from 0 to 9'
    },
];

prompt.start();

const askForN = () => {
    console.log('Input \'n\' value to draw heart. [q to quit]')
    prompt.get(properties, function (err, result) {
        if (err) { return console.error(err); }
        if (result.n === 'q') {
            console.log('Program Exited')
            process.exit();
        } else {
            drawHeart(result.n);
            askForN();
        }
    });
}

askForN();