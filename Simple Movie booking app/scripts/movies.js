// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let amount= JSON.parse(localStorage.getItem('amount'));

document.getElementById('wallet').innerText=amount

let id;
async function SearchMovies(){

    try{
        let query= document.getElementById("search").value;

        const res= await fetch(`https://www.omdbapi.com/?apikey=92c4b0ee&s=${query}`);

        let data = await res.json();

        console.log(data.Search)

        let movies=data.Search

        return movies;
    }
    catch(err){
        console.log("error")
    }
}
function append(data){
    let movies= document.getElementById("movies");
    movies.innerHTML=null;

    data.forEach(function(el,index){

        let mbox=document.createElement("div")
        mbox.setAttribute("class", 'movie_tab')

        let img= document.createElement('img')
        img.src=el.Poster;

        let imgdiv= document.createElement("div")
        imgdiv.setAttribute("class","imgdiv")
        imgdiv.append(img)

        let title=document.createElement("p")
        title.innerText=el.Title;

        let book= document.createElement('button')
        book.setAttribute('class', "book_now")

        book.innerText="Book Movies"
        book.addEventListener('click', function(){
            bookMovies(el)
        })

        let titlediv= document.createElement('div')
        titlediv.setAttribute('class', "titlediv")
        titlediv.append(title,book)

        mbox.append(imgdiv,titlediv)

        movies.append(mbox)

    })
}
async function main(){
    let data= await SearchMovies();

    if(data===undefined){
        return false;
    }
    append(data)
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func()
    },delay)
}

let moviearr= JSON.parse(localStorage.getItem('movie')) || [];

function bookMovies(el){
    localStorage.setItem('movie',JSON.stringify(el));
    window.location.href ="checkout.html"
}