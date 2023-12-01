import Image from "next/image";
interface ActorData {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const ActorsCard = ({ id, name, character, profile_path }: ActorData) => {
  return (
    <div key={id} className="flex flex-col items-center cursor-pointer">
      <Image
        className="rounded-xl"
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : "/actor-unknown.jpg"
        }
        alt={name}
        width={120}
        height={160}
      />
      <p className="text-teal-500 text-sm font-medium text-center ">{name}</p>
      <p className="text-white text-xs font-medium text-center ">{character}</p>
    </div>
  );
};

export default ActorsCard;
