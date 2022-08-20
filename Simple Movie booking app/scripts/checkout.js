// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amount= JSON.parse(localStorage.getItem('amount'));

document.getElementById('wallet').innerText=amount

let movie= JSON.parse(localStorage.getItem('movie')) || [];


let poster= document.createElement('img')
poster.src=movie.Poster;

let imgdiv=document.createElement('div')
imgdiv.setAttribute('class', 'imgdiv')
imgdiv.append(poster);

let title = document.createElement('p')
title.innerText=`Title: `+movie.Title;

let titlediv= document.createElement('div')
titlediv.setAttribute('class', 'titlediv')
titlediv.append(title)

document.getElementById('movie').append(imgdiv, titlediv)


function Bookmovies(){

    let number_of_seats= document.getElementById('number_of_seats').value
    let total= number_of_seats*100;

    if(total>amount){
        alert("Insufficient Balance!")
    }
    else{
        amount= amount-total;
        document.getElementById('wallet').innerText= amount;
// =========
    
        localStorage.setItem('amount',JSON.stringify(amount))
        // ========

        alert("Booking successfull!");
        return;
    }
}