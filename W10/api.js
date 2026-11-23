//api: Applicaiton Programming Interface
//IE how to programs talk to each other programmatically

//calling an API in javascript using the fetch method
// fetch is asynchronous (requires being used in async function)

// async function getMovies() {
//     const url = "https://raw.githubusercontent.com/jameswarnerbyui/static-apis/refs/heads/main/movies.json";

//     const response = await fetch(url);

//     console.log(response);

//     const data = await response.json();

//     console.log(data.movies);

//     displayMovies(data.movies);
// }

// function displayMovies(movies) {
//     const body = document.querySelector("body");
    
//     movies.forEach(movie => {
//         body.innerHTML += `
//             <h1>${movie.title}</h1>
//             <p>${movie.date}</p>
//             <img src="${movie.imgSrc}" alt="${movie.imgAlt} poster" />
//         `;
//     })
// }


// getMovies();



// bdb2cd18
//     http://www.omdbapi.com/?apikey=[bdb2cd18]&

async function getMovieByTitle(title) {
    const dataUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=bdb2cd18"
    // const dataUrl = "http://www.omdbapi.com/?apikey=[bdb2cd18]&"

    const response = await fetch(dataUrl + "s=" + title);
    const data = await response.json();

    return data;
}
async function getMoviePoster(title) {
    //const posterUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=bdb2cd18"
    const posterUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=bdb2cd18"
    // const posterUrl = "http://www.omdbapi.com/?apikey=[bdb2cd18]&"

    const response = await fetch(posterUrl + "s=" + title + "&r=json");
    const data = await response.json();

    return data;
}

document.querySelector("#getDataBtn").addEventListener("click", async () => {
    const title = document.querySelector("#inputField").value;
    const movie = await getMovieByTitle(title);
    const poster = await getMoviePoster(title);
    

    const body = document.querySelector("body");
    
    body.innerHTML += `
        <h1>${movie.title}</h1>
        <p>${movie.date}</p>
        <img src="${poster.Poster}" alt="${movie.imgAlt} poster" />
    `;
});