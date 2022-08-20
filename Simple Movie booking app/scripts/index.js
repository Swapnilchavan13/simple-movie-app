// Store the wallet amount to your local storage with key "amount"
let amt= JSON.parse(localStorage.getItem('amount'));

function Addtowallet(){
    let amount=document.getElementById("amount").value

    amt+= +amount;

    document.getElementById("wallet").innerText = amt;

    localStorage.setItem('amount',JSON.stringify(amt));
}
