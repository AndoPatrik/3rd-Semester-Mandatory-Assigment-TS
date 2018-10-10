let input: HTMLInputElement = <HTMLInputElement> document.getElementById("input");
let result: HTMLSpanElement = <HTMLSpanElement> document.getElementById("result");

let ChangeNumberForGramToOunces : number = 0.03527396195;
let ChangeNumberForOuncesToGram : number = 28.34952;

let ConvertToOuncesBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ConvertToOuncesBtn");
ConvertToOuncesBtn.addEventListener("click", GrammToOunces);

let ConvertToGramBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ConvertToGramBtn");
ConvertToGramBtn.addEventListener("click", OuncesToGram);

function GrammToOunces()
{
    let temp: number = Number(input.value) * ChangeNumberForGramToOunces
    result.innerHTML = temp.toString() + " " + "ounces";
   
}

function OuncesToGram()
{
    let temp: number = Number(input.value) * ChangeNumberForOuncesToGram
    result.innerHTML = temp.toString() + " " + "gram";
   
}