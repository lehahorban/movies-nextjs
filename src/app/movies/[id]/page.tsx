import { getTrandingsMoviesById } from "@/app/services/reguest";
import Link from "next/link";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
export default async function Movie({ params }: { params: { id: string } }) {
  const data = await getTrandingsMoviesById(+params.id);

  return (
    <div className="flex flex-col md:justify-center items-center p-5">
      <div className="relative flex flex-col xl:flex-row rounded-md p-2 bg-slate-950/70">
        <Link
          className="absolute z-10 top-0.5 right-0.5 bg-red-500 w-4 h-4 rounded-full flex justify-center items-center group hover:bg-orange-500 transition-all duration-300"
          href={"/"}
        >
          <IoCloseCircleOutline className="w-8 h-8 group-hover:text-white transition-all duration-300" />
        </Link>

        <div className="relative w-full min-h-[500px]">
          <Image
            className="object-cover object-center "
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            fill={true}
            alt={data.title}
          />
        </div>
        <div className="bg-red-900 py-10 px-4 flex flex-col gap-3">
          <p className="text-teal-700 text-2xl font-bold">{data.title}</p>
          <p className="text-blue-200 text-lg font-medium">{data.overview}</p>
          <p className="text-white text-lg font-medium">{data.release_date}</p>
          <ul className="flex gap-3">
            {data.genres.map((item: any) => (
              <li
                className="w-fit py-2 px-3 flex justify-center items-center bg-slate-400 rounded-lg "
                key={item.id}
              >
                <p className="text-xs text-slate-950 font-semibold">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-white text-lg font-medium">
            {data.vote_average.toFixed(1)}/<span className="text-sm">10</span>
          </p>
          <div className="flex flex-wrap gap-x-20">
            <div>
              <p className="text-teal-500 text-lg font-medium">Budget</p>
              <p className="text-white text-lg font-medium">{data.budget}$</p>
            </div>
            <div>
              <p className="text-teal-500 text-lg font-medium">Revenue</p>
              <p className="text-white text-lg font-medium">{data.revenue}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
