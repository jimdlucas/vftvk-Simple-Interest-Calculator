function compute()
{
    p = document.getElementById("principal").value;
    
}
// Create a variable called 'principal' and assign to it the value of the input element "principal"
var principal = document.getElementById("principal").value;

// Create a variable called rate and assign to it the value of the input element "rate
var rate = document.getElementById("rate").value;

// Create a variable called years and assign to it the value of the input element "years"
var years = document.getElementById("years").value;

// Create a variable called interest and assign to it the value of principal * years * rate / 100
var interest = principal * years * rate / 100;

//Write the logic to convert the 'No of Years' into the actual year in the future.
var year = new Date().getFullYear()+parseInt(years);

//Write a function that reads the value of the range slider and displays it the <span>adjacent to the slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
        