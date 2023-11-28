import Image from "next/image";
import Link from "next/link";
type Movie = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  original_name: string;
};

type MovieListProps = {
  searchResults: { results: Movie[] } | null;
  data: { results: Movie[] } | null;
  genresData: { results: Movie[] } | null;
  isLoading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  currentData: string;
};

const MoviesList = ({
  data,
  genresData,
  currentData,
  searchResults,
  page,
  setPage,
  isLoading,
}: MovieListProps) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4">
        {(searchResults
          ? searchResults
          : currentData === "trending"
          ? data
          : genresData
        )?.results?.map((item: any) => (
          <li
            key={item.id}
            className="bg-shadow relative flex flex-col group hover:scale-105 transition-all duration-200 rounded-lg overflow-hidden"
          >
            <Link href={`/movies/${item.id}`}>
              <div className="relative w-full h-96 ">
                <Image
                  className="object-cover"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  fill={true}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-shadow-basic bg-black/75 flex items-center justify-center opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-3xl text-orange-400 font-extrabold">
                    {item.vote_average?.toFixed(1)}/
                    <span className="text-lg">10</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col px-1 py-2 h-full bg-slate-400 group-hover:bg-gray-300">
                <p className="text-center text-base font-extrabold text-green-900 group-hover:text-blue-700">
                  {item.original_name ? item.original_name : item.title}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-7 justify-center">
          {page !== 1 && (
            <button
              className="w-14 bg-slate-500 text-lg font-bold flex justify-center items-center rounded-lg hover:bg-indigo-700 hover:text-neutral-300 transition-all duration-300"
              type="button"
              onClick={() => setPage((prev) => prev - 1)}
            >
              {page - 1}
            </button>
          )}
          <p className="w-14 bg-orange-600  flex justify-center items-center rounded-lg text-lg font-bold text-white">
            {page}
          </p>
          <button
            className="w-14 bg-slate-500 text-lg font-bold flex justify-center items-center rounded-lg hover:bg-indigo-700 hover:text-neutral-300 transition-all duration-300"
            type="button"
            onClick={() => setPage((prev) => prev + 1)}
          >
            {page + 1}
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviesList;
