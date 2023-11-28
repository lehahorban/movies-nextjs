"use client";
import { useState, useEffect, useContext } from "react";
import {
  getTrandingsMovies,
  searchMoviies,
  searchMoviesByGenre,
} from "@/app/services/reguest";
import { ParamsContext } from "./components/Sidebar/Sidebar";
import MoviesList from "./components/MoviesList/MoviesList";

export default function Home() {
  const {
    currentParams,
    isActive,
    isToggle,
    genreId,
    isActiveGenre,
    currentData,
  } = useContext(ParamsContext);
  const [data, setData] = useState<any>(null);
  const [genresData, setGenresData] = useState<any>(null);
  const [searchResults, setSearchResults] = useState<any>(null);
  const [page, setPage] = useState<number>(1);

  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getTrandingsMovies(page, currentParams).then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, [page, currentParams]);

  useEffect(() => {
    if (searchValue) {
      searchMoviies(searchValue).then((data) => {
        setSearchResults(data);
      });
    } else {
      setSearchResults(null);
    }
  }, [searchValue]);

  useEffect(() => {
    setSearchValue("");
  }, [isToggle]);

  useEffect(() => {
    if (genreId) {
      searchMoviesByGenre(genreId, page).then((data) => {
        setGenresData(data);
      });
    }
  }, [genreId, page]);

  useEffect(() => {
    setPage(1);
  }, [isActive, isActiveGenre, isToggle]);

  return (
    <main className="pt-10 px-4">
      <div className="flex justify-between gap-5 flex-wrap items-center">
        <div>
          <h2 className="uppercase text-3xl text-gray-950 font-extrabold text-shadow-focus ">
            {isActive ? isActive : isActiveGenre}
          </h2>
          <p className="uppercase text-xl text-slate-900 font-semibold text-shadow-basic">
            Movies
          </p>
        </div>
        <search>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="rounded-xl py-2 px-4 border-none outline-none"
            type="search"
            placeholder="Search movies"
          />
        </search>
      </div>
      <MoviesList
        data={data}
        genresData={genresData}
        currentData={currentData}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        isLoading={isLoading}
      />
    </main>
  );
}
