#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;

// Print Welcome message
console.log("Welcome to My ATM Machine");

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select option",
                type: "list",
                choices: ["withdraw","fast cash", "check balance"]
            }
        ]
    );
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            ]
        );
        
        if(amountAns.amount >  myBalance){
            console.log("Insufficient Balance");
        }
        // = += -+
        else{
        myBalance -= amountAns.amount;
        console.log(`Your Remaining Balance is: ${myBalance}`)
    }

}
else if(operationAns.operation ==="fast cash"){
    let fast = await inquirer.prompt(
        [
            {
                name: "fastcash",
                message: "Select the amount which you withdrawal",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]
    );
    myBalance -= fast.fastcash;
    console.log(`You have successfully withdrawal ${fast.fastcash} \nYour remaining balance ${myBalance}`)
}

else if (operationAns.operation === "check balance") {
        console.log(`your remaining balance is ${myBalance}`)
    }

}

else {

    console.log("Incorrect pin code");
}