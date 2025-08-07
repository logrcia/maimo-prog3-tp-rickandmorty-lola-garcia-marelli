import Image from "next/image"
import Link from "next/link";

const CharacterInfo = ({character}) => {
    if (!character || !character.image) return null; 

  return (
    <div className="max-w-[1200px] mx-auto py-10">
        <Link href={'/'} className=" font-medium text-base p-4 bg-lime-200 rounded-4xl">Back To Home</Link>
        <div className="flex justify-between mt-10 bg-cyan-500 p-6  border-black border-2 rounded-t-4xl">
        <div className="flex flex-col">
        <h1 className="text-6xl font-bold mb-8" >{character.name}</h1>
        {character.type ? (
            <h3 className="text-lg mb-4">Type: {character.type}</h3>
          ) : (
           <h3 className="text-lg italic text-gray-900 mb-4">No special type</h3>
        )}
        <div className="w-md">
          <h3 className={`px-6 py-3 mb-4 text-xl rounded-4xl ${character.status === "Alive" ? "bg-green-100 text-emerald-700" : character.status === "Dead" ? "bg-red-100 text-red-500" : "bg-gray-100"} w-fit`}>{character.status}</h3>
        </div>
        <div className="mb-2">
          <h3 className="text-base">Species:</h3>
          <p className="text-lg bg-gray-100 p-2 rounded-2xl">{character.species}</p>
        </div>
        <div className="mb-2">
          <h3 className="text-base">Gender:</h3>
          <p className="text-lg bg-gray-100 p-2 rounded-2xl">{character.gender}</p>
        </div>
        <div className="mb-2">
          <h3 className="text-base">Origin:</h3>
          <p className="text-lg bg-gray-100 p-2 rounded-2xl">{character.origin.name}</p>
        </div>

        <h3 className="text-lg">Episodes: {character.episode.length}</h3>
        </div>
        <div>
        <Image
        className="rounded-t-4xl border-black border-2"
        src={character.image}
        width={500}
        height={500}
        alt={character.name}
        />
        </div>
        </div>
    </div>
  )
}

export default CharacterInfo