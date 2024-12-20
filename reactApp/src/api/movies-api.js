export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=1a9bb3d92d70dfc6356363a3c0942248&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };