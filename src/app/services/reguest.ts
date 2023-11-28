export const getTrandingsMovies = async (
  page: number,
  currentParams: string
) => {
  const url = `https://api.themoviedb.org/3/movie/${currentParams}?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const getTrandingsMoviesById = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const searchMoviies = async (query: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?&language=en-US&query=${query}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const searchMoviesByGenre = async (genreId: number, page: number) => {
  const url = `https://api.themoviedb.org/3/discover/movie?&language=en-US&with_genres=${genreId}&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const getMovieGenres = async () => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data.genres;
};