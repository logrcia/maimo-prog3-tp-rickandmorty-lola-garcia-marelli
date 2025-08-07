import LocationCard from "@/components/LocationCard"
const LocationList = ({locations}) => {
  return (
    <div>
      <h2 className=" text-lime-200 font-semibold text-3xl mb-4">Meet the origins of the characters</h2>
        <div className="flex flex-wrap">
        {locations.map((location)=>(
            <LocationCard key={location.id} location={location}/>
        ))}
        </div>
    </div>
  )
}

export default LocationList