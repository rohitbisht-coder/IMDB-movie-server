export default class moviesRepository {
    async getMovies(page) {
        try {
            let response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?page=${page}&limit=21&api_key=ba2ca2e9e06cf946fea528f788fbcda6`
              );
              let data = await response.json();
            return { success: true,  data };
        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }
    async getTopRated(page) {
        try {
            let response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?page=${page}&limit=5&api_key=ba2ca2e9e06cf946fea528f788fbcda6`
              );
              let data = await response.json();
            return { success: true,  data };
        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }
    async getUpcoming(page) {
        try {
            let response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?page=${page}&api_key=ba2ca2e9e06cf946fea528f788fbcda6`
              );
              let data = await response.json();
            return { success: true,  data };
        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }
    async getTrending(page) {
        try {
            let response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?page=${page}&api_key=ba2ca2e9e06cf946fea528f788fbcda6`
              );
              let data = await response.json();
            return { success: true,  data };
        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }

    async getPopular() {
        try {
            let response = await fetch(
     "https://api.themoviedb.org/3/movie/popular?api_key=ba2ca2e9e06cf946fea528f788fbcda6"
              );
              let data = await response.json();
            return { success: true,  data };
        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }

    async getSingleMovie(id) {
        try {
            let response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=ba2ca2e9e06cf946fea528f788fbcda6`
              );
              let data = await response.json();
            
            return { success: true,  data };
        } catch (err) {
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }

}
