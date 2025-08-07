'use client'

import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import CharacterGrid from "@/components/CharacterGrid"
import Image from "next/image"
import LocationList from "@/components/LocationList"

const HomeContainer = () => {

    //aca se hace el fetch 
    const API_URL = `https://rickandmortyapi.com/api/`
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [locations, setLocations] = useState([])
    
    
    
    const getCharacters = useCallback(async ()=>{
      
      setLoading(true)
      try {
        const response = await axios.get(`${API_URL}/character`)
        setCharacters(response.data.results)

        const responseLocation = await axios.get(`${API_URL}location`)
        setLocations(responseLocation.data.results)
        setLoading(false)

      } catch (error) {
        setError(true)
        setLoading(false)
      }

    },[])

    useEffect(()=>{
      getCharacters();
      console.log(locations)
    }, [getCharacters])

  return (
    <div className="py-10 max-w-[1200px] mx-auto">
        <h1 className="text-5xl flex justify-center py-5 text-lime-200 font-semibold">Who the Rick Are They?</h1>
        <h2 className="flex justify-center text-white text-3xl mb-4">Uncover the Weirdest, Wildest, and Wubbiest Characters</h2>
        <h2 className="flex justify-center text-white text-2xl mb-8">Rick and Morty Maimo app</h2>
        {!loading && <div><CharacterGrid characters={characters}/> <LocationList locations={locations}/></div>}
        {loading && <div className="flex justify-center items-center h-full"><Image unoptimized src={"/assets/portal.gif"} width={400} height={400} alt="portal"/></div>}
    </div>
  )
}

export default HomeContainer