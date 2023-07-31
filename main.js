let movies = []; 

if(localStorage.getItem("movies")!==null){
movies=JSON.parse(localStorage.getItem("movies")) 
} 
function Tabledata(arr){ 
document.getElementById("movie_data").innerHTML =""; 
arr.forEach((movie, index) => {
MoviData=document.createElement("tr");
        let number=document.createElement("td")
        number.append(index+1);
        MoviData.appendChild(number);
        let Title=document.createElement("td")
        Title.append(movie.title);
        MoviData.appendChild(Title);
        let Releasedate=document.createElement("td")
        Releasedate.append(movie.releaseDate);
        MoviData.appendChild(Releasedate);
         let Durations=document.createElement("td")
        Durations.append(movie.duration);
        MoviData.appendChild(Durations);
    
        let
        genres=document.createElement("td");
        movie.genres.forEach((genre,index)=>{
        genres.append(genre+".");
        MoviData.appendChild(genres);
        
    })
 let
 Imdbratting=document.createElement("td")
        Imdbratting.append(movie.imdbRating);
        MoviData.appendChild(Imdbratting);
           Action=document.createElement("td")
           Action.classList.add("icon");
     MoviData.appendChild(Action)
   let Eye=document.createElement("i")
   Eye.classList.add("fa-solid")
   Eye.classList.add("fa-eye");
   Action.appendChild(Eye);
   Eye.onclick=openmoviedetail.bind(this,movie.id)
   
 let Edit=document.createElement("i")
  Edit.classList.add("fa-regular")
   Edit.classList.add("fa-pen-to-square");
   Action.appendChild(Edit)
   let
   Delete=document.createElement("i")
    Delete.classList.add("fa-solid")
   Delete.classList.add("fa-trash-can");
   Action.appendChild(Delete)
      
        document.getElementById("movie_data").appendChild(MoviData);
        
      
}
)
}
Tabledata(movies);

function openmoviedetail(movieid){
  let movie = movies.find((movie, index) => {
    return movie.id === movieid;
  });

  document.getElementById("movie_name").innerHTML = movie.title;
  document.getElementById("story_line").innerHTML = movie.storyline;
  document.getElementById("actor").innerHTML = movie.actors;
  document.getElementById("releasedate").innerHTML = movie.releaseDate;
  document.getElementById("duration").innerHTML = movie.duration;
  document.getElementById("imdbrating").innerHTML = movie.imdbRating;
  document.getElementById("genera").innerHTML = movie.genres;
  document.getElementById("image").src = movie.posterurl;


  document.getElementById("movie_container").style.display = "flex";
}

function closemoviedetails(movieId) {
  document.getElementById(movieId).style.display = "none"; 
}
function addMovie(){
  document.getElementById("create_movie").style.display="flex";
}
function textChangetoDate(){
  document.getElementById("movie_relese_date").type="Date";
}

  function createMovie() {
    let lastId;
    if (movies.length !== 0) {
      lastId = movies[movies.length - 1].id;
    } else {
      lastId = 0;
    }
    let movie = {
      id: lastId + 1,
      ratings: []
    };
    movie.title = document.getElementById("movie_title").value;
    movie.genres = document.getElementById("movie_geners").value.split(',');
    movie.duration = document.getElementById("movie_duration").value;
    movie.releaseDate = document.getElementById("movie_relese_date").value;
    movie.imdbRating = document.getElementById("movie_imdbrating").value;
    movie.actors = document.getElementById("movie_actors").value.split(',');
    movie.storyline = document.getElementById("movie_story_line").value;
    movie.posterurl = document.getElementById("movie_poster_url").value;
    movies.push(movie);
    closemoviedetails("create_movie");
    Tabledata(movies);
    document.getElementById("inputs").reset();
    localStorage.setItem('movies', JSON.stringify(movies));
    console.log(movie);
  }

