import Image from "next/image"
import Link from "next/link"

const CharacterCard = ({character}) => {

 
  return (
    <article className="col-span-3 bg-cyan-500 p-3 rounded-3xl flex flex-col justify-between">
        <div>
          <div className="mb-4 ">
              <Image className="rounded-t-3xl"
                  src={character.image} 
                  width={300} 
                  height={300} 
                  alt={character.name} 
              />
          </div>
          <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
          <p className="text-lg">{character.status}</p>
          <p className="mb-4 text-lg">{character.origin.name}</p>
        </div>
        <Link className="bg-lime-200 flex justify-center rounded-3xl p-4 font-bold text-lg text-cyan-700 border-2 border-cyan-700 hover:bg-lime-50" href={`character/${character.id}`}>View More</Link>
    </article>
  )
}

export default CharacterCard