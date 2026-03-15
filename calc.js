function calculateInvestment(){


let amount = document.getElementById("amount").value;
let rate = document.getElementById("rate").value;
let years = document.getElementById("years").value;


if(amount=="" || rate=="" || years==""){
document.getElementById("result").innerText = "Please fill all fields";
return;
}


rate = rate / 100;


let futureValue = amount * Math.pow((1 + rate), years);


futureValue = futureValue.toFixed(2);


document.getElementById("result").innerText =
"Future Value: ₹ " + futureValue;


}
