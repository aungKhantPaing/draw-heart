const prompt = require('prompt');

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

const drawHeart = (n) => {
    console.log("For input", n, ":");
    for (let i = -n; i <= n * 2; i++) {
        // -3-2-10123456
        let print = "";
        // 012321-1-2-3
        const h = n - Math.abs(i);
        // -3-2-10123210
        const b = n - Math.abs(i - n);
        const sZero = i % n === 0 || i > n ? "" : "0";
        const wing = getPLine(h);
        const lWing = 0 + wing + sZero;
        const rWing = sZero + wing + (i === n * 2 ? "" : "0");

        let bot;
        if (i < 0) bot = getSpace(n * 2 - h * 2 - 1);
        else if (i === 0) bot = "0";
        else bot = getPLine(b);

        print += getSpace(Math.abs(i)) + lWing + bot + rWing;

        console.log(...print);
    }
};

const getPLine = (lineNo) => {
    let line = "";
    for (let i = -(lineNo - 1); i < lineNo; i++) {
        line += lineNo - Math.abs(i);
    }
    return line;
};

const getSpace = (total) => {
    let space = "";
    for (let i = 0; i < total; i++) {
        space += " ";
    }
    return space;
};