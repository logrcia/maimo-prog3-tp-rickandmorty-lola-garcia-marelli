import LocationContainer from "@/components/LocationContainer"

const pageLocation = async ({params}) => {
    const {id} = await params
  return (
    <div>
        <LocationContainer id={id} />
    </div>
  )
}

export default pageLocation