import Image from "next/image";
interface ActorData {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const ActorsCard = ({ id, name, character, profile_path }: ActorData) => {
  return (
    <div key={id} className="flex flex-col cursor-pointer">
      <div className="relative h-36 rounded-xl overflow-hidden">
        <Image
          className="object-cover object-center"
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : "/actor-unknown.jpg"
          }
          alt={name}
          fill={true}
        />
      </div>
      <p className="text-teal-500 text-sm font-medium text-center xl:text-left">
        {name}
      </p>
      <p className="text-white text-xs font-medium text-center xl:text-left">
        {character}
      </p>
    </div>
  );
};

export default ActorsCard;
