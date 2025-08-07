import CharacterCard from "@/components/CharacterCard"


const CharacterGrid = ({characters}) => {
  return (
    <div className="grid grid-cols-12 gap-4  my-0 mb-8">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </div>
  )
}

export default CharacterGrid