const API = "https://api.themoviedb.org/3";

export async function get(path){
   
   const result = await fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjAzZjk5MzQyYjViNjEzN2E2MTI3Y2ViM2JhMmFlNyIsInN1YiI6IjYxZTg5ZmU2MTY4OTM1MDAxYmE3Y2NhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DINu8_Id4aJ_EB7-iW4UZJiJvNUsv4WX536Xcao-8gg",
            "Content-Type": "application/json;charset=utf-8"
        }
    });
    return await result.json();
}