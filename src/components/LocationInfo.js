import Link from "next/link"

const LocationInfo = ({location}) => {
  return (
    <div className="max-w-[1200px] mx-auto py-10">
        <Link href={'/'} className=" font-medium text-base p-4 bg-lime-200 rounded-4xl">Back To Home</Link>
        <div className=" bg-cyan-500 mt-10  p-6  border-black border-2 rounded-t-4xl">
            <h1 className="text-6xl font-bold mb-8">{location.name}</h1>
            <h2 className="text-lg mb-4">Type: {location.type}</h2>
            <h2 className="text-lg mb-4">Dimension: {location.dimension}</h2>
            <h2 className="text-lg mb-4">Residents: {location.residents ? location.residents.length : 0}</h2>
        </div>
    </div>
  )
}

export default LocationInfo