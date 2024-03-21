import Link from "next/link"
import Movie from "../../components/movie"

export const metadata = {
    title: 'Home',
}
export const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getMovies(){
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const response =await fetch(URL)
    const json = await response.json()
    return json
}

export default async function HomePage(){
    
    const movies = await getMovies()
    return (
        <>
            {movies.map(movie => <Movie/>)}
        </>
    )
}