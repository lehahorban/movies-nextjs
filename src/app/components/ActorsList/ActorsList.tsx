"use client";

import { useState, useEffect } from "react";
import { getMovieActors } from "@/app/services/reguest";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import ActorsCard from "../ActorsCard/ActorsCard";

interface ActorData {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const ActorsList = ({ id }: { id: number }) => {
  const [data, setData] = useState<ActorData[] | null>(null);
  useEffect(() => {
    getMovieActors(id).then((data) => {
      setData(data);
    });
  }, [id]);

  return (
    <div className="flex flex-col overflow-hidden">
      <h3 className="text-white text-lg font-medium mb-2">Actors</h3>
      <div className="mx-auto max-w-[270px] xs:max-w-lg xl:max-w-md">
        <Slider>
          {data &&
            data?.map((actors: ActorData) => (
              <SwiperSlide key={actors.id}>
                <ActorsCard {...actors} />
              </SwiperSlide>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ActorsList;
