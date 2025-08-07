import Link from "next/link"
const LocationCard = ({location}) => {
  return (
    <div className=" p-4 mb-4">
        <Link href={`location/${location.id}`} className="text-white p-4 border-2 border-white rounded-3xl text-2xl font-semibold hover:bg-cyan-500">{location.name}</Link>
    </div>
  )
}

export default LocationCard