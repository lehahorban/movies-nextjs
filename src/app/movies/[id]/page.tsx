"use client";

import { useState, useEffect } from "react";
import { getMoviesById } from "@/app/services/reguest";
import Link from "next/link";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import ActorsList from "@/app/components/ActorsList/ActorsList";

interface MovieData {
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  genres: { id: number; name: string }[];
  vote_average: number;
  budget: number;
  revenue: number;
}

export default function Movie({ params }: { params: { id: string } }) {
  const [data, setData] = useState<MovieData | null>(null);
  useEffect(() => {
    getMoviesById(+params.id).then((data) => {
      setData(data);
    });
  }, [params.id]);

  return (
    data && (
      <div className="flex flex-col items-center p-5">
        <div className="relative mowies-wrapp mt-10 rounded-md p-2 bg-slate-950/70">
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
          <div className="bg-red-900 py-2 px-4 flex flex-col justify-center gap-3">
            <h2 className="text-teal-600 text-2xl font-bold">{data.title}</h2>
            <p className="text-blue-200 text-lg font-medium">{data.overview}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col gap-3">
                <p className="text-white text-lg font-medium">
                  {data.release_date}
                </p>
                <ul className="flex flex-wrap gap-3">
                  {data?.genres?.map((item: any) => (
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
                  {data.vote_average.toFixed(1)}/
                  <span className="text-sm">10</span>
                </p>
                <div className="flex flex-row flex-wrap gap-x-10 ">
                  <div>
                    <p className="text-teal-500 text-lg font-medium">Budget</p>
                    <p className="text-white text-lg font-medium">
                      {data.budget}$
                    </p>
                  </div>
                  <div>
                    <p className="text-teal-500 text-lg font-medium">Revenue</p>
                    <p className="text-white text-lg font-medium">
                      {data.revenue}$
                    </p>
                  </div>
                </div>
              </div>
              <ActorsList id={+params.id} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
