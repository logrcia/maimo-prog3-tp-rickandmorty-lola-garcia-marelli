'use client'
import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import Image from "next/image"

import CharacterInfo from "@/components/CharacterInfo"

const CharacterContainer = ({id}) => {

    const BASE_URL = `https://rickandmortyapi.com/api/`

    const [character, setCharacter] = useState({})
    const [loading, setLoading] = useState(false)

    const getCharacter = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${BASE_URL}/character/${id}`)
            setCharacter(response.data)
            setLoading(false)
        } catch (error) {
            console.log("error")
        }
    },[])

    useEffect(()=>{
        getCharacter()
    }, [])

  return (
    <div className="h-full">
        {loading && <div className="flex justify-center items-center mt-50 "><Image unoptimized src={"/assets/portal.gif"} width={400} height={400} alt="portal"/></div>}
        {!loading && <CharacterInfo character={character}/>} 
    </div>
  )
}

export default CharacterContainer