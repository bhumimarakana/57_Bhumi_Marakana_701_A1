const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to Looks Beauty Parlour Chatbot!");
console.log("Ask anything about services, bookings, or timings. Type 'exit' to quit.");

function ask() {
    rl.question("You: ", (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("Chatbot: Thank you for visiting Looks Parlour. Have a glowing day!");
            rl.close();
        } else {
            const reply = chatbot.getResponse(input);
            console.log("Chatbot:", reply);
            ask();
        }
    });
}

ask();
