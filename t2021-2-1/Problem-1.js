// calculator


class Calculator {

    addition(first, second) {
        console.log(first + second);
    }
    substration(first, second) {
        console.log(first - second);
    }
    multiplication(first, second) {
        console.log(first * second);
    }
    division(first, second) {
        console.log(first / second);
    }

}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter first number `, (first) => {

    rl.question(`Enter second number `, (second) => {

        rl.question(`enter operator `, (operator) => {
            const calc = new Calculator()

            switch (operator) {
                case "addition":
                    operator = "addition";
                    calc.addition(first, second)
                    break;

                case "substration":
                    operator == "substration";
                    calc.substration(first, second)
                    break;

                case "multiplication":
                    operator == "multiplication";
                    calc.multiplication(first, second)
                    break;

                case "division":
                    operator == "division";
                    calc.division(first, second)
                    break;

                default:
                    console.log("Invalid Operator");
            }
            rl.close();
        });
    })

});
