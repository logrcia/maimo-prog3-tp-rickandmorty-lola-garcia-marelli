'use client'
import axios from "axios"
import { useState, useEffect, useCallback } from "react"

import Image from "next/image"
import LocationInfo from "@/components/LocationInfo"

const LocationContainer = ({id}) => {
    const [location, setLocation] = useState({})
    const [loading, setLoading] = useState(false)

    const BASE_URL = `https://rickandmortyapi.com/api/`

    const getLocation = useCallback( async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${BASE_URL}location/${id}`);
            setLocation(response.data);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(()=>{
        console.log(location)
        getLocation()
    },[])

  return (
    
    <div>
        {loading && <div className="flex justify-center items-center mt-50 "><Image unoptimized src={"/assets/portal.gif"} width={400} height={400} alt="portal"/></div>}
        {!loading && <div><LocationInfo location={location}/></div>}
    </div>
  )
}

export default LocationContainer