import inquirer from "inquirer";

const Answer=await inquirer.prompt([
    
    {
        message:"plase enter your first number",
        type:"number",
        name:"firstNumber",
    },
    {
        message:"plase enter your seacond number",
        type:"number",
        name:"secondNumber",
    },
    {
        message:"choose the opraters to perfoam opration",
        type:"list",
        name:"opraters",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
]);
if(Answer.opraters === "Addition"){
    console.log( Answer.firstNumber  + Answer.secondNumber);
}
else if(Answer.opraters === "Subtraction"){
    console.log( Answer.firstNumber - Answer.secondNumber);
}
else if(Answer.opraters === "Multiplication"){
    console.log( Answer.firstNumber * Answer. secondNumber);
}
else if(Answer.opraters === "Division"){
    console.log( Answer.firstNumber / Answer.secondNumber);
}
else{
    console.log("plase enter valid oprators")
};