#!/usr/bin/env/node

import inquirer from "inquirer";

let answer= await inquirer.prompt([
{ message:"enter firstNumber",type:"number",name:"firstNumber"},
{message:"enter secondNumber",type:"number",name:"secondNumber"},
{
    message:"select one of the operation to perform operation",
type: "list",
name: "operator",
choices: ["Addition","Subtraction","Division","Multiplication"]
}
])

// condititional statement
if (answer.operator==="Addition") {
    console.log(answer.firstNumber + answer.secondNumber)
} else if (answer.operator==="subtraction") {
    console.log(answer.firstNumber - answer.secondNumber)}
    
    
        else if (answer.operator==="Multiplication"){
            console.log(answer.firstNumber * answer.secondNumber)
        }else if (answer.operator==="Division"){
            console.log(answer.firstNumber  / answer.secondNumber )
        }
        else{console.log("pleease select valid operator")}

    
      